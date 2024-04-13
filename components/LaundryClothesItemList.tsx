import FilterClothesItemList from './FilterClothesItemList.tsx';
import React from 'react';

const LaundryClothesItemList = ({
  onLongPress,
}: {
  onLongPress: (id: number) => void;
}) => {
  return (
    <FilterClothesItemList stateList={['Wet']} onLongPress={onLongPress} />
  );
};
export default LaundryClothesItemList;
