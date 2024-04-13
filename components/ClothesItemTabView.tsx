import React from 'react';
import BodySideClothesItemList from './BodySideClothesItemList.tsx';
import {Clothes} from '../models/Clothes.tsx';
import LaundryClothesItemList from './LaundryClothesItemList.tsx';
import ClosetClothesItemList from './ClosetClothesItemList.tsx';
import TabButton from './TabButton.tsx';
import HamperClothesItemList from './HamperClothesItemList.tsx';
import { ScrollView, View } from 'react-native';

const ClothesItemTabView = ({
  clothesList,
  onLongPress,
}: {
  clothesList: Clothes[];
  onLongPress: (id: number) => void;
}) => {
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          gap: 5,
          margin: 10,
        }}>
        <TabButton
          text="Body Side"
          badgeNumber={
            clothesList.filter(
              (clothes: Clothes) =>
                clothes.state === 'On' || clothes.state === 'Off',
            ).length
          }
          onPress={() => {
            setIndex(0);
          }}
          isSelected={index === 0}
        />
        <TabButton
          text="Laundry"
          badgeNumber={
            clothesList.filter(
              (clothes: Clothes) =>
                clothes.state === 'Wet',
            ).length
          }
          onPress={() => {
            setIndex(1);
          }}
          isSelected={index === 1}
        />
        <TabButton
          text="Closet"
          badgeNumber={
            clothesList.filter(
              (clothes: Clothes) =>
                clothes.state === 'Dry',
            ).length
          }
          onPress={() => {
            setIndex(2);
          }}
          isSelected={index === 2}
        />
        <TabButton
          text="Hamper"
          badgeNumber={
            clothesList.filter(
              (clothes: Clothes) =>
                clothes.state === 'Dirty',
            ).length
          }
          onPress={() => {
            setIndex(3);
          }}
          isSelected={index === 3}
        />
      </View>
      <ScrollView style={{height: '80%'}}>
        {index === 0 ? (
          <BodySideClothesItemList onLongPress={onLongPress} />
        ) : index === 1 ? (
          <LaundryClothesItemList onLongPress={onLongPress} />
        ) : index === 2 ? (
          <ClosetClothesItemList onLongPress={onLongPress} />
        ) : (
          <HamperClothesItemList onLongPress={onLongPress} />
        )}
      </ScrollView>
    </>
  );
};
export default ClothesItemTabView;
