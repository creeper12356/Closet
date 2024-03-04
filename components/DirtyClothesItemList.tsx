import {Clothes} from '../models/Clothes.tsx';
import FilterClothesItemList from './FilterClothesItemList.tsx';

const DirtyClothesItemList = ({
  clothesList,
  puton,
  putoff,
  wash,
  onDelete,
}: {
  clothesList: Clothes[];
  puton: Function;
  putoff: Function;
  wash: Function;
  onDelete: Function;
}) => {
  return (
    <FilterClothesItemList
      clothesList={clothesList}
      stateList={['On', 'Off']}
      puton={puton}
      putoff={putoff}
      wash={wash}
      store={() => {}}
      onDelete={onDelete}
    />
  );
};
export default DirtyClothesItemList;
