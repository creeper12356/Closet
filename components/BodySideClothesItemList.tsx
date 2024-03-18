import {Clothes} from '../models/Clothes.tsx';
import FilterClothesItemList from './FilterClothesItemList.tsx';
import { GestureResponderEvent } from "react-native";

const BodySideClothesItemList = ({
  clothesList,
  puton,
  putoff,
  wash,
  drop,
  onDelete,
  onLongPress,
}: {
  clothesList: Clothes[];
  puton: Function;
  putoff: Function;
  wash: Function;
  drop: Function;
  onDelete: Function;
  onLongPress: (id: number) => void;
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
      onLongPress={onLongPress}
    />
  );
};
export default BodySideClothesItemList;
