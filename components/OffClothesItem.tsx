import {Clothes} from '../models/Clothes.ts';
import { ProgressBarAndroid, Text, View } from "react-native";
import ClothesItemContent from './ClothesItemContent.tsx';
import OperateButton from './OperateButton.tsx';
import React from 'react';
import ClothesItemContainer from './ClothesItemContainer.tsx';
import { Progress } from "@ant-design/react-native";
const OffClothesItem = ({
  clothes,
  onLongPress,
}: {
  clothes: Clothes;
  onLongPress: (id: number) => void;
}) => {
  return (
    <ClothesItemContainer
      backgroundColor="brown"
      onLongPress={() => {
        onLongPress(clothes.id);
      }}>
      <ClothesItemContent clothes={clothes} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <OperateButton type="puton" clothesId={clothes.id} />
        <OperateButton type="wash" clothesId={clothes.id} />
        <OperateButton type="drop" clothesId={clothes.id} />
      </View>
      <Text
        style={{
          textAlignVertical: 'center',
        }}>
        {`On for ${Math.round(clothes.onTime / 3600000)} h`}
      </Text>
      <Text
        style={{
          textAlignVertical: 'center',
        }}>
        {`Last put on at 
        ${new Date(clothes.lastTimeStamp).toLocaleDateString()} 
        ${new Date(clothes.lastTimeStamp).toLocaleTimeString()}`}
      </Text>
      {clothes.onCycle !== 0 && (
        <Progress
          percent={
            clothes.onTime < clothes.onCycle
              ? (clothes.onTime / clothes.onCycle) * 100
              : 100
          }
        />
      )}
    </ClothesItemContainer>
  );
};
export default OffClothesItem;
