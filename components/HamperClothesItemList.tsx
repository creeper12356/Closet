import {Clothes} from '../models/Clothes.tsx';
import FilterClothesItemList from './FilterClothesItemList.tsx';
import { GestureResponderEvent } from "react-native";

const HamperClothesItemList = ({
  clothesList,
  wash,
  onDelete,
  onLongPress,
}: {
  clothesList: Clothes[];
  wash: Function;
  onDelete: Function;
  onLongPress: (id: number) => void;
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
      onLongPress={onLongPress}
    />
  );
};
export default HamperClothesItemList;
