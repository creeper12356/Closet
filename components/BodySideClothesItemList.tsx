import {Clothes} from '../models/Clothes.tsx';
import FilterClothesItemList from './FilterClothesItemList.tsx';

const BodySideClothesItemList = ({
  clothesList,
  puton,
  putoff,
  wash,
  drop,
  onDelete,
}: {
  clothesList: Clothes[];
  puton: Function;
  putoff: Function;
  wash: Function;
  drop: Function;
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
      drop={drop}
      onDelete={onDelete}
    />
  );
};
export default BodySideClothesItemList;
