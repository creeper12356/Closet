import { Clothes } from "../objects/Clothes.tsx";
import { Button, Text, TouchableOpacity } from "react-native";
import ClothesItemContent from "./ClothesItemContent.tsx";
const WetClothesItem = ({
  clothes,
  store,
  onDelete,
}: {
  clothes: Clothes;
  store: Function;
  onDelete: Function;
}) => {
  // @ts-ignore
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'steelblue',
        borderColor: 'white',
        borderBottomWidth: 1,
        flexDirection: 'row',
      }}
    >
      <ClothesItemContent clothes={clothes} onDelete={onDelete}/>
      <Button
        title="store"
        onPress={() => {
          store(clothes.id);
        }}
      />
      <Text>{`Washed on ${new Date(
        clothes.lastTimeStamp,
      ).toDateString()}`}</Text>
    </TouchableOpacity>
  );
};
export default WetClothesItem;
