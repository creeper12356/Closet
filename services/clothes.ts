import AsyncStorage from '@react-native-async-storage/async-storage';
import {Clothes} from '../models/Clothes.ts';
import React from 'react';
import {AddClothesFormData} from '../models/AddClothesFormData.ts';
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

const updateAndMoveToTop = (
  clothesList: Clothes[],
  setClothesList: React.Dispatch<React.SetStateAction<Clothes[]>>,
  transform: (clothes: Clothes) => Clothes,
  id: number,
) => {
  const targetClothes = clothesList.find(
    (clothes: Clothes) => clothes.id === id,
  );
  if (targetClothes === undefined) {
    return;
  }
  const newClothes = transform(targetClothes);
  const newClothesList = clothesList.filter(
    (clothes: Clothes) => clothes.id !== id,
  );
  newClothesList.unshift(newClothes);
  setClothesList(newClothesList);
};
const putonTransform = (clothes: Clothes) => {
  return clothes.state === 'Dry'
    ? {
        ...clothes,
        firstPutOnTimeStamp: Date.now(),
        state: 'On',
        lastTimeStamp: Date.now(),
      }
    : {...clothes, state: 'On', lastTimeStamp: Date.now()};
};
const putoffTransform = (clothes: Clothes) => {
  return {
    ...clothes,
    state: 'Off',
    onTime: clothes.onTime + Date.now() - clothes.lastTimeStamp,
  };
};
const washTransform = (clothes: Clothes) => {
  return {...clothes, state: 'Wet', lastTimeStamp: Date.now()};
};
const storeTransform = (clothes: Clothes) => {
  return {...clothes, state: 'Dry', lastTimeStamp: 0, onTime: 0};
};

const dropTransform = (clothes: Clothes) => {
  return {...clothes, state: 'Dirty', lastTimeStamp: Date.now()};
};

export const puton = (
  clothesList: Clothes[],
  setClothesList: React.Dispatch<React.SetStateAction<Clothes[]>>,
  id: number,
) => {
  updateAndMoveToTop(clothesList, setClothesList, putonTransform, id);
};
export const putoff = (
  clothesList: Clothes[],
  setClothesList: React.Dispatch<React.SetStateAction<Clothes[]>>,
  id: number,
) => {
  updateAndMoveToTop(clothesList, setClothesList, putoffTransform, id);
};
export const wash = (
  clothesList: Clothes[],
  setClothesList: React.Dispatch<React.SetStateAction<Clothes[]>>,
  id: number,
) => {
  updateAndMoveToTop(clothesList, setClothesList, washTransform, id);
};
export const store = (
  clothesList: Clothes[],
  setClothesList: React.Dispatch<React.SetStateAction<Clothes[]>>,
  id: number,
) => {
  updateAndMoveToTop(clothesList, setClothesList, storeTransform, id);
};
export const drop = (
  clothesList: Clothes[],
  setClothesList: React.Dispatch<React.SetStateAction<Clothes[]>>,
  id: number,
) => {
  updateAndMoveToTop(clothesList, setClothesList, dropTransform, id);
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
    tags: data.name.split(' ').filter((tag: string) => tag !== ''),
    isVisible: true,
  };
  setClothesList([newClothes, ...clothesList]);
};
