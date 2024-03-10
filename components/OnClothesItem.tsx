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
  drop,
  onDelete,
}: {
  clothes: Clothes;
  putoff: Function;
  wash: Function;
  drop: Function;
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
      <OperateButton type="drop" onPress={drop} clothesId={clothes.id} />
      <Text style={{textAlignVertical: 'center'}}>
        {`On for ${Math.round(clothes.onTime / 3600000)} h`}
      </Text>
    </TouchableOpacity>
  );
};
export default OnClothesItem;
