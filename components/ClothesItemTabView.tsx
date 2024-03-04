import { TabView } from "react-native-tab-view";
import React from "react";
import BodySideClothesItemList from './BodySideClothesItemList.tsx';
import { Clothes } from '../models/Clothes.tsx';
import LaundryClothesItemList from './LaundryClothesItemList.tsx';
import { Button, View } from "react-native";
import ClosetClothesItemList from './ClosetClothesItemList.tsx';

const ClothesItemTabView = ({
  clothesList,
  puton,
  putoff,
  wash,
  store,
  onDelete,
}: {
  clothesList: Clothes[];
  puton: Function;
  putoff: Function;
  wash: Function;
  store: Function;
  onDelete: Function;
}) => {
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
        <Button
          title="BodySide"
          color="tomato"
          onPress={() => {
            setIndex(0);
          }}
        />
        <Button
          title="Laundry"
          color="steelblue"
          onPress={() => {
            setIndex(1);
          }}
        />
        <Button
          title="Store"
          color="grey"
          onPress={() => {
            setIndex(2);
          }}
        />
      </View>
      {index === 0 ? (
        <BodySideClothesItemList
          clothesList={clothesList}
          puton={puton}
          putoff={putoff}
          wash={wash}
          onDelete={onDelete}
        />
      ) : index === 1 ? (
        <LaundryClothesItemList
          clothesList={clothesList}
          store={store}
          onDelete={onDelete}
        />
      ) : (
        <ClosetClothesItemList
          clothesList={clothesList}
          puton={puton}
          onDelete={onDelete}
        />
      )}
    </>
  );
};
export default ClothesItemTabView;
