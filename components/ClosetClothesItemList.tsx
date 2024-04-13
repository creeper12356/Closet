import {Clothes} from '../models/Clothes.tsx';
import FilterClothesItemList from './FilterClothesItemList.tsx';
import React from 'react';

const ClosetClothesItemList = ({
  onLongPress,
}: {
  clothesList: Clothes[];
  onLongPress: (id: number) => void;
}) => {
  return (
    <FilterClothesItemList stateList={['Dry']} onLongPress={onLongPress} />
  );
};
export default ClosetClothesItemList;
