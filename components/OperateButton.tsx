import {Button} from 'react-native-paper';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ClothesContext } from '../contexts/ClothesContext.ts';
import { drop, putoff, puton, store, wash } from '../services/clothes.ts';

/**
 * 执行衣服操作的按钮
 * @param type
 * @param onPress
 * @constructor
 */
const OperateButton = ({
  type,
  clothesId,
}: {
  type: 'puton' | 'putoff' | 'wash' | 'store' | 'drop';
  clothesId: number;
}) => {
  const {clothesList, setClothesList} = useContext(ClothesContext);
  return (
    <Button
      style={styles.button}
      onPress={() => {
        switch (type) {
          case 'puton': {
            puton(clothesList, setClothesList, clothesId);
            break;
          }
          case 'putoff': {
            putoff(clothesList, setClothesList, clothesId);
            break;
          }
          case 'wash': {
            wash(clothesList, setClothesList, clothesId);
            break;
          }
          case 'store': {
            store(clothesList, setClothesList, clothesId);
            break;
          }
          case 'drop': {
            drop(clothesList, setClothesList, clothesId);
            break;
          }
        }
      }}
      buttonColor="steelblue"
      textColor="white">
      {type}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    marginHorizontal: 5,
    borderColor: 'white',
    borderWidth: 2,
  },
});
export default OperateButton;
