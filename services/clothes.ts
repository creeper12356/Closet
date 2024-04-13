import AsyncStorage from '@react-native-async-storage/async-storage';
import { Clothes } from '../models/Clothes.tsx';
import React from 'react';
import { AddClothesFormData } from '../models/AddClothesFormData.tsx';
export const restoreClothes = async (
  clothesList: Clothes[],
  setClothesList: React.Dispatch<React.SetStateAction<Clothes[]>>,
) => {
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
export const saveClothes = async (
  clothesList: Clothes[],
  setClothesList: React.Dispatch<React.SetStateAction<Clothes[]>>,
) => {
  try {
    console.log(JSON.stringify(clothesList));
    await AsyncStorage.setItem('clothes', JSON.stringify(clothesList));
  } catch (error) {
    console.error(`saveClothes error: ${error}.`);
  }
};

export const puton = (
  clothesList: Clothes[],
  setClothesList: React.Dispatch<React.SetStateAction<Clothes[]>>,
  id: number,
) => {
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
export const putoff = (
  clothesList: Clothes[],
  setClothesList: React.Dispatch<React.SetStateAction<Clothes[]>>,
  id: number,
) => {
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
export const wash = (
  clothesList: Clothes[],
  setClothesList: React.Dispatch<React.SetStateAction<Clothes[]>>,
  id: number,
) => {
  setClothesList(
    clothesList.map((clothes: Clothes) =>
      clothes.id === id
        ? {...clothes, state: 'Wet', lastTimeStamp: Date.now()}
        : clothes,
    ),
  );
};
export const store = (
  clothesList: Clothes[],
  setClothesList: React.Dispatch<React.SetStateAction<Clothes[]>>,
  id: number,
) => {
  setClothesList(
    clothesList.map((clothes: Clothes) =>
      clothes.id === id
        ? {...clothes, state: 'Dry', lastTimeStamp: 0, onTime: 0}
        : clothes,
    ),
  );
};
export const drop = (
  clothesList: Clothes[],
  setClothesList: React.Dispatch<React.SetStateAction<Clothes[]>>,
  id: number,
) => {
  setClothesList(
    clothesList.map((clothes: Clothes) =>
      clothes.id === id
        ? {...clothes, state: 'Dirty', lastTimeStamp: Date.now() }
        : clothes,
    ),
  );
};

export const deleteClothes = (
  clothesList: Clothes[],
  setClothesList: React.Dispatch<React.SetStateAction<Clothes[]>>,
  id: number,
) => {
  setClothesList(clothesList.filter(clothes => clothes.id !== id));
};

export const createClothes = (
  clothesList: Clothes[],
  setClothesList: React.Dispatch<React.SetStateAction<Clothes[]>>,
  data: AddClothesFormData,
) => {
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
