import { Clothes } from '../models/Clothes.tsx';
import { Text, TouchableOpacity, View } from "react-native";
import ClothesItemContent from './ClothesItemContent.tsx';
import OperateButton from './OperateButton.tsx';
import React from "react";
const DirtyClothesItem = ({
  clothes,
  wash,
  onDelete,
}: {
  clothes: Clothes;
  wash: Function;
  onDelete: Function;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'rgb(153, 102, 51)',
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
        <OperateButton type="wash" onPress={wash} clothesId={clothes.id} />
      </View>
      <Text
        style={{
          textAlignVertical: 'center',
        }}>
        {`Droped at ${new Date(
          clothes.lastTimeStamp,
        ).toLocaleTimeString()}`}</Text>
    </TouchableOpacity>
  );
};
export default DirtyClothesItem;
