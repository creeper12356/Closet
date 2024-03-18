import { Clothes } from "../models/Clothes.tsx";
import { GestureResponderEvent, Text, View } from "react-native";
import ClothesItemContent from "./ClothesItemContent.tsx";
import OperateButton from "./OperateButton.tsx";
import React from "react";
import ClothesItemContainer from "./ClothesItemContainer.tsx";
const WetClothesItem = ({
  clothes,
  store,
  onDelete,
  onLongPress,
}: {
  clothes: Clothes;
  store: Function;
  onDelete: Function;
  onLongPress: (id: number) => void;
}) => {
  // @ts-ignore
  return (
    <ClothesItemContainer
      backgroundColor="steelblue"
      onLongPress={() => {
        onLongPress(clothes.id);
      }}>
      <ClothesItemContent clothes={clothes} onDelete={onDelete}/>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <OperateButton type="store" onPress={store} clothesId={clothes.id} />
      </View>
      <Text
        style={{
          textAlignVertical: 'center',
        }}>
        {`Washed at 
        ${new Date(clothes.lastTimeStamp).toLocaleDateString()} 
        ${new Date(clothes.lastTimeStamp).toLocaleTimeString()}`}
      </Text>
    </ClothesItemContainer>
  );
};
export default WetClothesItem;
