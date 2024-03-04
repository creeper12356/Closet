import {Clothes} from '../models/Clothes.tsx';
import FilterClothesItemList from './FilterClothesItemList.tsx';

const ClosetClothesItemList = ({
  clothesList,
  puton,
  onDelete,
}: {
  clothesList: Clothes[];
  puton: Function;
  onDelete: Function;
}) => {
  return (
    <FilterClothesItemList
      clothesList={clothesList}
      stateList={['Dry']}
      puton={puton}
      putoff={() => {}}
      wash={() => {}}
      store={() => {}}
      onDelete={onDelete}
    />
  );
};
export default ClosetClothesItemList;
