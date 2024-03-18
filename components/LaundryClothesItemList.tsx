import {Clothes} from '../models/Clothes.tsx';
import FilterClothesItemList from './FilterClothesItemList.tsx';
import { GestureResponderEvent } from "react-native";

const LaundryClothesItemList = ({
  clothesList,
  store,
  onDelete,
  onLongPress,
}: {
  clothesList: Clothes[];
  store: Function;
  onDelete: Function;
  onLongPress: (id: number) => void;
}) => {
  return (
    <FilterClothesItemList
      clothesList={clothesList}
      stateList={['Wet']}
      puton={() => {}}
      putoff={() => {}}
      wash={() => {}}
      store={store}
      drop={() => {}}
      onDelete={onDelete}
      onLongPress={onLongPress}
    />
  );
};
export default LaundryClothesItemList;
