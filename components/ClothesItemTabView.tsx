import React from 'react';
import BodySideClothesItemList from './BodySideClothesItemList.tsx';
import {Clothes} from '../models/Clothes.tsx';
import LaundryClothesItemList from './LaundryClothesItemList.tsx';
import ClosetClothesItemList from './ClosetClothesItemList.tsx';
import {Appbar} from 'react-native-paper';
import TabButton from './TabButton.tsx';

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
      <Appbar>
        <TabButton
          text={`Body Side(${
            clothesList.filter(
              (clothes: Clothes) =>
                clothes.state === 'On' || clothes.state === 'Off',
            ).length
          })`}
          onPress={() => {
            setIndex(0);
          }}
          isSelected={index === 0}
        />
        <TabButton
          text={`Laundry(${
            clothesList.filter(
              (clothes: Clothes) =>
                clothes.state === 'Wet',
            ).length
          })`}
          onPress={() => {
            setIndex(1);
          }}
          isSelected={index === 1}
        />
        <TabButton
          text={`Closet(${
            clothesList.filter(
              (clothes: Clothes) =>
                clothes.state === 'Dry',
            ).length
          })`}
          onPress={() => {
            setIndex(2);
          }}
          isSelected={index === 2}
        />
      </Appbar>
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
