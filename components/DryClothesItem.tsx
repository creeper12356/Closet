import { Clothes } from '../models/Clothes.tsx';
import { TouchableOpacity, View } from "react-native";
import ClothesItemContent from './ClothesItemContent.tsx';
import OperateButton from './OperateButton.tsx';
import React from "react";
const DryClothesItem = ({
  clothes,
  puton,
  onDelete,
}: {
  clothes: Clothes;
  puton: Function;
  onDelete: Function;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'grey',
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
        <OperateButton type="puton" onPress={puton} clothesId={clothes.id} />
      </View>
    </TouchableOpacity>
  );
};
export default DryClothesItem;
