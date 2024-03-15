import { Clothes } from "../models/Clothes.tsx";
import { Button, Text, TouchableOpacity, View } from "react-native";
import ClothesItemContent from "./ClothesItemContent.tsx";
import OperateButton from "./OperateButton.tsx";
import React from "react";
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
        flexDirection: 'column',
      }}
    >
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
        {`Washed at ${new Date(
        clothes.lastTimeStamp,
      ).toLocaleTimeString()}`}</Text>
    </TouchableOpacity>
  );
};
export default WetClothesItem;
