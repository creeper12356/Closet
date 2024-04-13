import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import { Button } from 'react-native-paper';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Clothes} from './models/Clothes.tsx';
import {AddClothesFormData} from './models/AddClothesFormData.tsx';
import ClothesItemTabView from './components/ClothesItemTabView.tsx';
import AddClothesForm from './components/AddClothesForm.tsx';
import EditClothesForm from './components/EditClothesForm.tsx';
import { ClothesContext } from './contexts/ClothesContext.ts';
import { createClothes, restoreClothes, saveClothes } from './services/clothes.ts';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [clothesList, setClothesList] = useState<Clothes[]>([]);
  const [isAddClothesFormVisible, setAddClothesFormVisible] = useState(false);
  const [isEditClothesFormVisible, setEditClothesFormVisible] = useState(false);
  const [editedClothesId, setEditedClothesId] = useState(0);
  useEffect(() => {
    console.log('restore');
    restoreClothes(clothesList, setClothesList);
  }, []);
  useEffect(() => {
    console.log('save');
    saveClothes(clothesList, setClothesList);
  }, [clothesList]);

  const editClothes = (id: number) => {
    console.log(new Date(id).toLocaleDateString());
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
              buttonColor="green"
              textColor="white"
              onPress={() => {
                setAddClothesFormVisible(true);
              }}>
              Add Clothes
            </Button>
            <Text>{`Total: ${clothesList.length}`}</Text>
            <Button
              buttonColor="red"
              textColor="white"
              onPress={() => {
                AsyncStorage.removeItem('clothes');
                setClothesList([]);
              }}>
              Clear Clothes
            </Button>
          </View>

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
          <ClothesItemTabView
            clothesList={clothesList}
            onLongPress={editClothes}
          />
        </View>
      </ClothesContext.Provider>
    </SafeAreaView>
  );
}
StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default App;
