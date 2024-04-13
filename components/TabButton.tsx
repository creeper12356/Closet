import React from 'react';
import { GestureResponderEvent, Text } from 'react-native';
import { Badge, Button } from '@ant-design/react-native';

const TabButton = ({
  text,
  badgeNumber,
  onPress,
  isSelected,
}: {
  text: string;
  badgeNumber: number;
  onPress: (e: GestureResponderEvent) => void;
  isSelected: boolean;
}) => {
  return (
    <Button
      type="primary"
      size="large"
      onPress={onPress}
      style={{
        backgroundColor: isSelected ? 'black' : 'steelblue',
      }}>
      <Badge text={badgeNumber}>
        <Text
          style={{
            marginTop: 15,
            fontSize: 14,
            color: 'white',
          }}>
          {text}
        </Text>
      </Badge>
    </Button>
  );
};
export default TabButton;
