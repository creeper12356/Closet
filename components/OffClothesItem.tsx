import { Clothes } from '../models/Clothes.tsx';
import { Text, TouchableOpacity, View } from 'react-native';
import ClothesItemContent from './ClothesItemContent.tsx';
import OperateButton from './OperateButton.tsx';
import React from "react";
const OffClothesItem = ({
  clothes,
  puton,
  wash,
  drop,
  onDelete,
}: {
  clothes: Clothes;
  puton: Function;
  wash: Function;
  drop: Function;
  onDelete: Function;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'brown',
        borderColor: 'white',
        borderBottomWidth: 1,
        flexDirection: 'column',
      }}
    >
      <ClothesItemContent clothes={clothes} onDelete={onDelete} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <OperateButton type="puton" onPress={puton} clothesId={clothes.id} />
        <OperateButton type="wash" onPress={wash} clothesId={clothes.id} />
        <OperateButton type="drop" onPress={drop} clothesId={clothes.id} />
      </View>
      <Text style={{
          textAlignVertical: 'center',
        }}>
        {`On for ${Math.round(clothes.onTime / 3600000)} h`}
      </Text>
      <Text style={{
          textAlignVertical: 'center',
        }}>
        {`Last put on at ${new Date(
          clothes.lastTimeStamp,
        ).toLocaleTimeString()}`}
      </Text>
    </TouchableOpacity>

  );
};
export default OffClothesItem;
