import React, {useContext} from 'react';
import {ClothesContext} from '../contexts/ClothesContext.ts';
import {drop, putoff, puton, store, wash} from '../services/clothes.ts';
import {Button} from '@ant-design/react-native';

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
      type="primary"
      size="large"
      style={{
        borderWidth: 2,
        borderColor: 'white',
        margin: 5,
        borderRadius: 15,
      }}
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
      }}>
      {type}
    </Button>
  );
};

export default OperateButton;
