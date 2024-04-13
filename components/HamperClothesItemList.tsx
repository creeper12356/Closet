import FilterClothesItemList from './FilterClothesItemList.tsx';
import React from 'react';

const HamperClothesItemList = ({
  onLongPress,
}: {
  onLongPress: (id: number) => void;
}) => {
  return (
    <FilterClothesItemList stateList={['Dirty']} onLongPress={onLongPress} />
  );
};
export default HamperClothesItemList;
