import { Clothes } from '../models/Clothes.tsx';
import { GestureResponderEvent, View } from "react-native";
import ClothesItemContent from './ClothesItemContent.tsx';
import OperateButton from './OperateButton.tsx';
import React from 'react';
import ClothesItemContainer from './ClothesItemContainer.tsx';
const DryClothesItem = ({
  clothes,
  puton,
  onDelete,
  onLongPress,
}: {
  clothes: Clothes;
  puton: Function;
  onDelete: Function;
  onLongPress: (id: number) => void;
}) => {
  return (
    <ClothesItemContainer
      backgroundColor="grey"
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
        <OperateButton type="puton" onPress={puton} clothesId={clothes.id} />
      </View>
    </ClothesItemContainer>
  );
};
export default DryClothesItem;
