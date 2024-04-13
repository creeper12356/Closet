import {Clothes} from '../models/Clothes.tsx';
import {Text, View} from 'react-native';
import ClothesItemContent from './ClothesItemContent.tsx';
import OperateButton from './OperateButton.tsx';
import ClothesItemContainer from './ClothesItemContainer.tsx';
import {ProgressBar} from 'react-native-paper';
import React from 'react';
const OnClothesItem = ({
  clothes,
  onLongPress,
}: {
  clothes: Clothes;
  onLongPress: (id: number) => void;
}) => {
  return (
    <ClothesItemContainer
      backgroundColor="tomato"
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
        <OperateButton type="putoff" clothesId={clothes.id} />
        <OperateButton type="wash" clothesId={clothes.id} />
        <OperateButton type="drop" clothesId={clothes.id} />
      </View>
      <Text style={{textAlignVertical: 'center'}}>
        {`On for ${Math.round(clothes.onTime / 3600000)} h`}
      </Text>
      <Text>
        {`Last put on at 
        ${new Date(clothes.lastTimeStamp).toLocaleDateString()} 
        ${new Date(clothes.lastTimeStamp).toLocaleTimeString()}`}
      </Text>
      {clothes.onCycle !== 0 && (
        <ProgressBar
          color={clothes.onTime < clothes.onCycle ? 'green' : 'red'}
          style={{height: 5}}
          animatedValue={
            clothes.onTime < clothes.onCycle
              ? clothes.onTime / clothes.onCycle
              : 1
          }
        />
      )}
    </ClothesItemContainer>
  );
};
export default OnClothesItem;
