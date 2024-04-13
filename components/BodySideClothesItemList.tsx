import React from 'react';
import FilterClothesItemList from './FilterClothesItemList.tsx';

const BodySideClothesItemList = ({
  onLongPress,
}: {
  onLongPress: (id: number) => void;
}) => {
  return (
    <FilterClothesItemList
      stateList={['On', 'Off']}
      onLongPress={onLongPress}
    />
  );
};
export default BodySideClothesItemList;
