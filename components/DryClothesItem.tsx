import { Clothes } from "../models/Clothes.tsx";
import { Button, Text, TouchableOpacity } from "react-native";
import ClothesItemContent from "./ClothesItemContent.tsx";
const DryClothesItem = ({
  clothes,
  puton,
  onDelete,
}: {
  clothes: Clothes;
  puton: Function;
  onDelete: Function;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'grey',
        borderColor: 'white',
        borderBottomWidth: 1,
        flexDirection: 'row',
      }}
    >
      <ClothesItemContent clothes={clothes} onDelete={onDelete}/>
      <Button
        title="puton"
        onPress={() => {
          puton(clothes.id);
        }}
      />
    </TouchableOpacity>
  );
};
export default DryClothesItem;
