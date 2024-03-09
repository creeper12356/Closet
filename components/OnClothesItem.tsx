import {Clothes} from '../models/Clothes.tsx';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button} from 'react-native-paper';
import ClothesItemContent from './ClothesItemContent.tsx';
import React from 'react';
import OperateButton from "./OperateButton.tsx";
const OnClothesItem = ({
  clothes,
  putoff,
  wash,
  onDelete,
}: {
  clothes: Clothes;
  putoff: Function;
  wash: Function;
  onDelete: Function;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'tomato',
        borderColor: 'white',
        borderBottomWidth: 1,
        flexDirection: 'row',
      }}>
      <ClothesItemContent clothes={clothes} onDelete={onDelete} />
      <OperateButton type="putoff" onPress={putoff} clothesId={clothes.id} />
      <OperateButton type="wash" onPress={wash} clothesId={clothes.id} />
      <View>
        <Text>{`On for ${Math.round(clothes.onTime / 3600000)} h`}</Text>
        <Text>{new Date(clothes.lastTimeStamp).toString()}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default OnClothesItem;
