import {Clothes} from '../models/Clothes.tsx';
import FilterClothesItemList from './FilterClothesItemList.tsx';
import { GestureResponderEvent } from "react-native";

const ClosetClothesItemList = ({
  clothesList,
  puton,
  onDelete,
  onLongPress,
}: {
  clothesList: Clothes[];
  puton: Function;
  onDelete: Function;
  onLongPress: (id: number) => void;
}) => {
  return (
    <FilterClothesItemList
      clothesList={clothesList}
      stateList={['Dry']}
      puton={puton}
      putoff={() => {}}
      wash={() => {}}
      store={() => {}}
      drop={() => {}}
      onDelete={onDelete}
      onLongPress={onLongPress}
    />
  );
};
export default ClosetClothesItemList;
