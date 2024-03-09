import { Clothes } from "../models/Clothes.tsx";
import { Button, Text, TouchableOpacity } from "react-native";
import ClothesItemContent from "./ClothesItemContent.tsx";
import OperateButton from "./OperateButton.tsx";
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
      <OperateButton type="store" onPress={store} clothesId={clothes.id} />
      <Text>{`Washed on ${new Date(
        clothes.lastTimeStamp,
      ).toDateString()}`}</Text>
    </TouchableOpacity>
  );
};
export default WetClothesItem;
