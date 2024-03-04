/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Clothes} from './objects/Clothes.tsx';
import ClothesItemList from './components/ClothesItemList.tsx';
import Form, { FormInterface } from "./components/Form.tsx";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [clothesList, setClothesList] = useState<Clothes[]>([]);
  const [isFormVisible , setFormVisible ] = useState(false);

  useEffect(() => {
    console.log('restore');
    restoreClothes();
  }, []);
  useEffect(() => {
    console.log('save');
    saveClothes();
  }, [clothesList]);
  const restoreClothes = async () => {
    try {
      const jsonString: string | null = await AsyncStorage.getItem('clothes');
      console.log(`jsonString = ${jsonString}`);
      if (jsonString !== null) {
        setClothesList(JSON.parse(jsonString));
      }
    } catch (error) {
      console.error(`restoreClothes error: ${error}`);
    }
  };
  const saveClothes = async () => {
    try {
      console.log(JSON.stringify(clothesList));
      await AsyncStorage.setItem('clothes', JSON.stringify(clothesList));
    } catch (error) {
      console.error(`saveClothes error: ${error}.`);
    }
  };
  const setClothesState = (id: number, state: string) => {
    setClothesList(
      clothesList.map((clothes: Clothes) =>
        clothes.id === id ? {...clothes, state: state} : clothes,
      ),
    );
  };
  const puton = (id: number) => {
    setClothesList(
      clothesList.map((clothes: Clothes) =>
        clothes.id === id
          ? {...clothes, state: 'On', lastTimeStamp: Date.now()}
          : clothes,
      ),
    );
  };
  const putoff = (id: number) => {
    setClothesList(
      clothesList.map((clothes: Clothes) =>
        clothes.id === id
          ? {
              ...clothes,
              state: 'Off',
              onTime: clothes.onTime + Date.now() - clothes.lastTimeStamp,
            }
          : clothes,
      ),
    );
  };
  const wash = (id: number) => {
    setClothesList(
      clothesList.map((clothes: Clothes) =>
        clothes.id === id
          ? {...clothes, state: 'Wet', lastTimeStamp: Date.now()}
          : clothes,
      ),
    );
  };
  const store = (id: number) => {
    setClothesList(
      clothesList.map((clothes: Clothes) =>
        clothes.id === id
          ? {...clothes, state: 'Dry', lastTimeStamp: 0, onTime: 0}
          : clothes,
      ),
    );
  };
  const deleteClothes = (id: number) => {
    setClothesList(clothesList.filter(clothes => clothes.id !== id));
  };
  const createClothes = (data: FormInterface) => {
    const newClothes : Clothes = {
      id: Date.now(),
      name: data.name,
      onCycle: data.onCycle,
      wetCycle: data.wetCycle,
      state: 'Dry',
      onTime: 0,
      lastTimeStamp: 0,
    };
    setClothesList([...clothesList, newClothes]);
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button title={`${clothesList.length}`} />
          <Button
            title="add clothes"
            color="green"
            onPress={() => {
              setFormVisible(true);
            }}
          />
          <Button
            title="clear clothes"
            color="red"
            onPress={() => {
              AsyncStorage.removeItem('clothes');
              setClothesList([]);
            }}
          />
          {isFormVisible && (
            <Form
              isVisible={isFormVisible}
              onClose={() => {
                setFormVisible(false);
              }}
              onSubmit={(data: FormInterface) => {
                createClothes(data);
              }}
            />
          )}
          <ClothesItemList
            clothesList={clothesList}
            puton={puton}
            putoff={putoff}
            wash={wash}
            store={store}
            onDelete={deleteClothes}
          />
        </View>
      </ScrollView>
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
