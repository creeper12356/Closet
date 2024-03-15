/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet, Text,
  useColorScheme,
  View
} from "react-native";
import { Button } from "react-native-paper";

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Clothes} from './models/Clothes.tsx';
import {AddClothesFormData} from './models/AddClothesFormData.tsx';
import ClothesItemTabView from './components/ClothesItemTabView.tsx';
import AddClothesForm from './components/AddClothesForm.tsx';

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

  const puton = (id: number) => {
    setClothesList(
      clothesList.map((clothes: Clothes) =>
        clothes.id === id
          ? clothes.state === 'Dry'
            ? {
                ...clothes,
                firstPutOnTimeStamp: Date.now(),
                state: 'On',
                lastTimeStamp: Date.now(),
              }
            : {...clothes, state: 'On', lastTimeStamp: Date.now()}
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
  const drop = (id: number) => {
    setClothesList(
      clothesList.map((clothes: Clothes) =>
        clothes.id === id
          ? {...clothes, state: 'Dirty', lastTimeStamp: Date.now() }
          : clothes,
      ),
    );
  };

  const deleteClothes = (id: number) => {
    setClothesList(clothesList.filter(clothes => clothes.id !== id));
  };
  const createClothes = (data: AddClothesFormData) => {
    const newClothes: Clothes = {
      id: Date.now(),
      name: data.name,
      state: 'Dry',
      onCycle: data.onCycle,
      onTime: 0,
      firstPutOnTimeStamp: 0,
      wetCycle: data.wetCycle,
      lastTimeStamp: 0,
    };
    setClothesList([...clothesList, newClothes]);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
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
              setFormVisible(true);
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
          isVisible={isFormVisible}
          onClose={() => {
            setFormVisible(false);
          }}
          onSubmit={(data: AddClothesFormData) => {
            createClothes(data);
          }}
        />
        <ClothesItemTabView
          clothesList={clothesList}
          puton={puton}
          putoff={putoff}
          wash={wash}
          store={store}
          drop={drop}
          onDelete={deleteClothes}
        />
      </View>
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
