import { GestureResponderEvent, TouchableOpacity } from "react-native";
import React, { ReactNode } from 'react';

const ClothesItemContainer = ({
  backgroundColor,
  children,
  onLongPress,
}: {
  backgroundColor: string;
  children: ReactNode;
  onLongPress: (e: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      style={{
        backgroundColor: backgroundColor,
        borderColor: 'white',
        borderBottomWidth: 1,
        flexDirection: 'column',
      }}>
      {React.Children.map(children, child => {
        return child;
      })}
    </TouchableOpacity>
  );
};
export default ClothesItemContainer;
