import React from 'react';
import BodySideClothesItemList from './BodySideClothesItemList.tsx';
import {Clothes} from '../models/Clothes.tsx';
import LaundryClothesItemList from './LaundryClothesItemList.tsx';
import ClosetClothesItemList from './ClosetClothesItemList.tsx';
import {Appbar} from 'react-native-paper';
import TabButton from './TabButton.tsx';
import HamperClothesItemList from './HamperClothesItemList.tsx';

const ClothesItemTabView = ({
  clothesList,
  puton,
  putoff,
  wash,
  store,
  drop,
  onDelete,
}: {
  clothesList: Clothes[];
  puton: Function;
  putoff: Function;
  wash: Function;
  store: Function;
  drop: Function;
  onDelete: Function;
}) => {
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <Appbar
        style={{display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start'
        }}>
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
        <TabButton
          text={`Hamper(${
            clothesList.filter(
              (clothes: Clothes) =>
                clothes.state === 'Dirty',
            ).length
          })`}
          onPress={() => {
            setIndex(3);
          }}
          isSelected={index === 3}
        />
      </Appbar>
      {index === 0 ? (
        <BodySideClothesItemList
          clothesList={clothesList}
          puton={puton}
          putoff={putoff}
          wash={wash}
          drop={drop}
          onDelete={onDelete}
        />
      ) : index === 1 ? (
        <LaundryClothesItemList
          clothesList={clothesList}
          store={store}
          onDelete={onDelete}
        />
      ) : index === 2 ? (
        <ClosetClothesItemList
          clothesList={clothesList}
          puton={puton}
          onDelete={onDelete}
        />
      ) : (
        <HamperClothesItemList
          clothesList={clothesList}
          wash={wash}
          onDelete={onDelete}
        />
      )}
    </>
  );
};
export default ClothesItemTabView;
