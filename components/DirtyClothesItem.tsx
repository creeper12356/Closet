import { Clothes } from '../models/Clothes.tsx';
import { GestureResponderEvent, Text, View } from "react-native";
import ClothesItemContent from './ClothesItemContent.tsx';
import OperateButton from './OperateButton.tsx';
import React from 'react';
import ClothesItemContainer from './ClothesItemContainer.tsx';
const DirtyClothesItem = ({
  clothes,
  wash,
  onDelete,
  onLongPress,
}: {
  clothes: Clothes;
  wash: Function;
  onDelete: Function;
  onLongPress: (id: number) => void;
}) => {
  return (
    <ClothesItemContainer
      backgroundColor="rgb(153,102,51)"
      onLongPress={() => {
        onLongPress(clothes.id);
      }}>
      <ClothesItemContent clothes={clothes} onDelete={onDelete} />
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
        {`Droped at 
        ${new Date(clothes.lastTimeStamp).toLocaleDateString()} 
        ${new Date(clothes.lastTimeStamp).toLocaleTimeString()}`}
      </Text>
    </ClothesItemContainer>
  );
};
export default DirtyClothesItem;
