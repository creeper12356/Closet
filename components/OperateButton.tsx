import {Button} from 'react-native-paper';
import React from 'react';
import {StyleSheet} from 'react-native';

/**
 * 执行衣服操作的按钮
 * @param type
 * @param onPress
 * @constructor
 */
const OperateButton = ({
  type,
  onPress,
  clothesId,
}: {
  type: 'puton' | 'putoff' | 'wash' | 'store';
  onPress: (id: number) => void;
  clothesId: number;
}) => {
  return (
    <Button
      style={styles.button}
      onPress={() => {
        onPress(clothesId);
      }}
      buttonColor="steelblue"
      textColor="white"
    >
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
