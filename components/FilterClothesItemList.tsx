import { FlatList, Text } from 'react-native';
import React from 'react';
import {Clothes} from '../models/Clothes.tsx';
import OnClothesItem from './OnClothesItem.tsx';
import OffClothesItem from './OffClothesItem.tsx';
import WetClothesItem from './WetClothesItem.tsx';
import DryClothesItem from './DryClothesItem.tsx';
const renderItem = ({
  item,
  puton,
  putoff,
  wash,
  store,
  onDelete,
  stateList,
}: {
  item: Clothes;
  puton: Function;
  putoff: Function;
  wash: Function;
  store: Function;
  onDelete: Function;
  stateList: string[];
}) => {
  return stateList.some(state => state === item.state) ? (
      item.state === 'On' ? (<OnClothesItem clothes={item} putoff={putoff} wash={wash} onDelete={onDelete}/>)
        : item.state === 'Off' ? (<OffClothesItem clothes={item} puton={puton} wash={wash} onDelete={onDelete}/>)
        : item.state === 'Wet' ? (<WetClothesItem clothes={item} store={store} onDelete={onDelete}/>)
        : item.state === 'Dry' ? (<DryClothesItem clothes={item} puton={puton} onDelete={onDelete}/>)
            :(<Text>hello world</Text>))
    :(<></>);
};
const FilterClothesItemList = ({
  clothesList,
  stateList,
  puton,
  putoff,
  wash,
  store,
  onDelete,
}: {
  clothesList: Clothes[];
  stateList: string[];
  puton: Function;
  putoff: Function;
  wash: Function;
  store: Function;
  onDelete: Function;
}) => {
  return (
    <>
      <FlatList
        data={clothesList}
        renderItem={({item}) => {
          return renderItem({
            item,
            puton,
            putoff,
            wash,
            store,
            onDelete,
            stateList,
          });
        }}
      />
    </>
  );
};
export default FilterClothesItemList;
