import {Clothes} from '../models/Clothes.tsx';
import FilterClothesItemList from './FilterClothesItemList.tsx';

const HamperClothesItemList = ({
  clothesList,
  wash,
  onDelete,
}: {
  clothesList: Clothes[];
  wash: Function;
  onDelete: Function;
}) => {
  return (
    <FilterClothesItemList
      clothesList={clothesList}
      stateList={['Dirty']}
      puton={() => {}}
      putoff={() => {}}
      wash={wash}
      store={() => {}}
      drop={() => {}}
      onDelete={onDelete}
    />
  );
};
export default HamperClothesItemList;
