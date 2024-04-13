import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';
import { Button, SearchBar } from "@ant-design/react-native";

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Clothes} from './models/Clothes.ts';
import {AddClothesFormData} from './models/AddClothesFormData.ts';
import ClothesItemTabView from './components/ClothesItemTabView.tsx';
import AddClothesForm from './components/AddClothesForm.tsx';
import EditClothesForm from './components/EditClothesForm.tsx';
import {ClothesContext} from './contexts/ClothesContext.ts';
import {
  createClothes,
  restoreClothes,
  saveClothes,
} from './services/clothes.ts';
import ThinkTwiceButton from './components/ThinkTwiceButton.tsx';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [clothesList, setClothesList] = useState<Clothes[]>([]);
  const [isAddClothesFormVisible, setAddClothesFormVisible] = useState(false);
  const [isEditClothesFormVisible, setEditClothesFormVisible] = useState(false);
  const [editedClothesId, setEditedClothesId] = useState(0);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    console.log('restore');
    restoreClothes(clothesList, setClothesList);
  }, []);
  useEffect(() => {
    console.log('save');
    saveClothes(clothesList, setClothesList);
  }, [clothesList]);
  useEffect(() => {
    console.log(searchText);
    setClothesList(
      clothesList.map(clothes => {
        return {
          ...clothes,
          isVisible:
            searchText === '' ? true : clothes.name.includes(searchText),
        };
      }),
    );
  }, [searchText]);

  const editClothes = (id: number) => {
    setEditedClothesId(id);
    setEditClothesFormVisible(true);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ClothesContext.Provider value={{clothesList, setClothesList}}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginVertical: 20,
            }}>
            <Button
              type="primary"
              style={{
                backgroundColor: 'green',
              }}
              onPress={() => {
                setSearchText('');
                setAddClothesFormVisible(true);
              }}>
              Add Clothes
            </Button>
            <Text>{`Total: ${clothesList.length}`}</Text>
            <ThinkTwiceButton
              style={{
                backgroundColor: 'red',
              }}
              onPress={() => {
                AsyncStorage.removeItem('clothes');
                setClothesList([]);
              }}
              // @ts-ignore
              type="primary">
              Clear Clothes
            </ThinkTwiceButton>
          </View>
          <SearchBar
            placeholder="Search"
            value={searchText}
            onChange={(text: string) => {
              setSearchText(text);
            }}
            showCancelButton
            cancelText={'Clear'}
            onCancel={() => {
              setSearchText('');
            }}
          />

          <AddClothesForm
            isVisible={isAddClothesFormVisible}
            onClose={() => {
              setAddClothesFormVisible(false);
            }}
            onSubmit={(data: AddClothesFormData) => {
              createClothes(clothesList, setClothesList, data);
            }}
          />
          <EditClothesForm
            isVisible={isEditClothesFormVisible}
            //@ts-ignore
            clothes={clothesList.find(
              clothes => clothes.id === editedClothesId,
            )}
            onClose={() => {
              setEditClothesFormVisible(false);
            }}
            onSubmit={editedClothes => {
              setClothesList(
                clothesList.map(clothes =>
                  clothes.id === editedClothes.id ? editedClothes : clothes,
                ),
              );
            }}
          />

          <ClothesItemTabView onLongPress={editClothes} />
        </View>
      </ClothesContext.Provider>
    </SafeAreaView>
  );
}
export default App;
