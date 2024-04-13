import React, { useContext } from 'react';
import {Clothes} from '../models/Clothes.tsx';
import OnClothesItem from './OnClothesItem.tsx';
import OffClothesItem from './OffClothesItem.tsx';
import WetClothesItem from './WetClothesItem.tsx';
import DryClothesItem from './DryClothesItem.tsx';
import DirtyClothesItem from './DirtyClothesItem.tsx';
import { ClothesContext } from '../contexts/ClothesContext.ts';
const FilterClothesItem = ({
  clothes,
  onLongPress,
  stateList,
}: {
  clothes: Clothes;
  onLongPress: (id: number) => void;
  stateList: string[];
}) => {
  if (!stateList.some(state => state === clothes.state)) {
    return <></>;
  }

  switch (clothes.state) {
    case 'On':
      return <OnClothesItem clothes={clothes} onLongPress={onLongPress} />;
    case 'Off':
      return <OffClothesItem clothes={clothes} onLongPress={onLongPress} />;
    case 'Wet':
      return <WetClothesItem clothes={clothes} onLongPress={onLongPress} />;
    case 'Dry':
      return <DryClothesItem clothes={clothes} onLongPress={onLongPress} />;
    case 'Dirty':
      return <DirtyClothesItem clothes={clothes} onLongPress={onLongPress} />;
    default:
      return <></>;
  }
};
const FilterClothesItemList = ({
  stateList,
  onLongPress,
}: {
  stateList: string[];
  onLongPress: (id: number) => void;
}) => {
  const {clothesList} = useContext(ClothesContext);
  return (
    <>
      {clothesList.map((clothes: Clothes, index: number) => (
        <FilterClothesItem
          key={index}
          clothes={clothes}
          onLongPress={onLongPress}
          stateList={stateList}
        />
      ))}
    </>
  );
};
export default FilterClothesItemList;
