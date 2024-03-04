import {Clothes} from '../models/Clothes.tsx';
import FilterClothesItemList from './FilterClothesItemList.tsx';

const LaundryClothesItemList = ({
  clothesList,
  store,
  onDelete,
}: {
  clothesList: Clothes[];
  store: Function;
  onDelete: Function;
}) => {
  return (
    <FilterClothesItemList
      clothesList={clothesList}
      stateList={['Wet']}
      puton={() => {}}
      putoff={() => {}}
      wash={() => {}}
      store={store}
      onDelete={onDelete}
    />
  );
};
export default LaundryClothesItemList;
