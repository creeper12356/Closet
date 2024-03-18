import React from 'react';
import {Clothes} from '../models/Clothes.tsx';
import OnClothesItem from './OnClothesItem.tsx';
import OffClothesItem from './OffClothesItem.tsx';
import WetClothesItem from './WetClothesItem.tsx';
import DryClothesItem from './DryClothesItem.tsx';
import DirtyClothesItem from './DirtyClothesItem.tsx';
import { GestureResponderEvent } from "react-native";
const FilterClothesItem = ({
  clothes,
  puton,
  putoff,
  wash,
  store,
  drop,
  onDelete,
  onLongPress,
  stateList,
}: {
  clothes: Clothes;
  puton: Function;
  putoff: Function;
  wash: Function;
  store: Function;
  drop: Function;
  onDelete: Function;
  onLongPress: (id: number) => void;
  stateList: string[];
}) => {
  return stateList.some(state => state === clothes.state) ? (
      clothes.state === 'On' ? (<OnClothesItem clothes={clothes} putoff={putoff} wash={wash} drop={drop} onDelete={onDelete} onLongPress={onLongPress}/>)
        : clothes.state === 'Off' ? (<OffClothesItem clothes={clothes} puton={puton} wash={wash} drop={drop} onDelete={onDelete} onLongPress={onLongPress}/>)
        : clothes.state === 'Wet' ? (<WetClothesItem clothes={clothes} store={store} onDelete={onDelete} onLongPress={onLongPress}/>)
        : clothes.state === 'Dry' ? (<DryClothesItem clothes={clothes} puton={puton} onDelete={onDelete} onLongPress={onLongPress}/>)
            :(<DirtyClothesItem clothes={clothes} wash={wash} onDelete={onDelete} onLongPress={onLongPress}/>))
    : (<></>);
};
const FilterClothesItemList = ({
  clothesList,
  stateList,
  puton,
  putoff,
  wash,
  store,
  drop,
  onDelete,
  onLongPress,
}: {
  clothesList: Clothes[];
  stateList: string[];
  puton: Function;
  putoff: Function;
  wash: Function;
  store: Function;
  drop: Function;
  onDelete: Function;
  onLongPress: (id: number) => void;
}) => {
  return (
    <>
      {
        clothesList.map((clothes: Clothes) =>
          <FilterClothesItem
            clothes={clothes}
            puton={puton}
            putoff={putoff}
            wash={wash}
            store={store}
            drop={drop}
            onDelete={onDelete}
            onLongPress={onLongPress}
            stateList={stateList}
          />)
      }
    </>
  )
};
export default FilterClothesItemList;
