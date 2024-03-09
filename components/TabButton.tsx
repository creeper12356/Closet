import { Button } from 'react-native-paper';
import React from 'react';
import { GestureResponderEvent } from "react-native";

const TabButton = ({
  text,
  onPress,
  isSelected,
}: {
  text: string;
  onPress: (e: GestureResponderEvent) => void;
  isSelected: boolean;
}) => {
  return (
    <Button
      buttonColor={isSelected ? 'black' : 'steelblue'}
      onPress={onPress}
      textColor="white"
      style={{borderRadius: 2}}
    >
      {text}
    </Button>
  );
};
export default TabButton;
