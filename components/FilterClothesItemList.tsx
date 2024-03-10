import React from 'react';
import {Clothes} from '../models/Clothes.tsx';
import OnClothesItem from './OnClothesItem.tsx';
import OffClothesItem from './OffClothesItem.tsx';
import WetClothesItem from './WetClothesItem.tsx';
import DryClothesItem from './DryClothesItem.tsx';
import DirtyClothesItem from './DirtyClothesItem.tsx';
const FilterClothesItem = ({
  clothes,
  puton,
  putoff,
  wash,
  store,
  drop,
  onDelete,
  stateList,
}: {
  clothes: Clothes;
  puton: Function;
  putoff: Function;
  wash: Function;
  store: Function;
  drop: Function;
  onDelete: Function;
  stateList: string[];
}) => {
  return stateList.some(state => state === clothes.state) ? (
      clothes.state === 'On' ? (<OnClothesItem clothes={clothes} putoff={putoff} wash={wash} drop={drop} onDelete={onDelete}/>)
        : clothes.state === 'Off' ? (<OffClothesItem clothes={clothes} puton={puton} wash={wash} drop={drop} onDelete={onDelete}/>)
        : clothes.state === 'Wet' ? (<WetClothesItem clothes={clothes} store={store} onDelete={onDelete}/>)
        : clothes.state === 'Dry' ? (<DryClothesItem clothes={clothes} puton={puton} onDelete={onDelete}/>)
            :(<DirtyClothesItem clothes={clothes} wash={wash} onDelete={onDelete} />))
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
}: {
  clothesList: Clothes[];
  stateList: string[];
  puton: Function;
  putoff: Function;
  wash: Function;
  store: Function;
  drop: Function;
  onDelete: Function;
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
            stateList={stateList}
          />)
      }
    </>
  )
};
export default FilterClothesItemList;
