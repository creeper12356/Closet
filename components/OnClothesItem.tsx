import {Clothes} from '../models/Clothes.tsx';
import { GestureResponderEvent, Text, View } from "react-native";
import ClothesItemContent from './ClothesItemContent.tsx';
import React from 'react';
import OperateButton from './OperateButton.tsx';
import ClothesItemContainer from './ClothesItemContainer.tsx';
const OnClothesItem = ({
  clothes,
  putoff,
  wash,
  drop,
  onDelete,
  onLongPress,
}: {
  clothes: Clothes;
  putoff: Function;
  wash: Function;
  drop: Function;
  onDelete: Function;
  onLongPress: (id: number) => void;
}) => {
  return (
    <ClothesItemContainer
      backgroundColor="tomato"
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
        <OperateButton type="putoff" onPress={putoff} clothesId={clothes.id} />
        <OperateButton type="wash" onPress={wash} clothesId={clothes.id} />
        <OperateButton type="drop" onPress={drop} clothesId={clothes.id} />
      </View>
      <Text style={{textAlignVertical: 'center'}}>
        {`On for ${Math.round(clothes.onTime / 3600000)} h`}
      </Text>
      <Text>
        {`Last put on at 
        ${new Date(clothes.lastTimeStamp).toLocaleDateString()} 
        ${new Date(clothes.lastTimeStamp).toLocaleTimeString()}`}
      </Text>
    </ClothesItemContainer>
  );
};
export default OnClothesItem;
