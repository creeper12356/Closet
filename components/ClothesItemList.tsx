import {FlatList, Text} from 'react-native';
import {Clothes} from '../objects/Clothes.tsx';
import React from 'react';
import OnClothesItem from "./OnClothesItem.tsx";
import OffClothesItem from "./OffClothesItem.tsx";
import WetClothesItem from "./WetClothesItem.tsx";
import DryClothesItem from "./DryClothesItem.tsx";
const renderItem = ({
  item,
  puton,
  putoff,
  wash,
  store,
  onDelete,
}: {
  item: Clothes;
  puton: Function;
  putoff: Function;
  wash: Function;
  store: Function;
  onDelete: Function;
}) => {
  return item.state == 'On' ? (<OnClothesItem clothes={item} putoff={putoff} wash={wash} onDelete={onDelete}/>)
    : item.state == 'Off' ? (<OffClothesItem clothes={item} puton={puton} wash={wash} onDelete={onDelete}/>)
      : item.state == 'Wet' ? (<WetClothesItem clothes={item} store={store} onDelete={onDelete}/>)
        : (<DryClothesItem clothes={item} puton={puton} onDelete={onDelete}/> );
};
const ClothesItemList = ({
  clothesList,
  puton,
  putoff,
  wash,
  store,
  onDelete,
}: {
  clothesList: Clothes[];
  puton: Function;
  putoff: Function;
  wash: Function;
  store: Function;
  onDelete: Function;
}) => {
  return (
    <FlatList
      data={clothesList}
      renderItem={({item}) => renderItem({item, puton,putoff,wash,store,onDelete})}
    />);
};
export default ClothesItemList;
