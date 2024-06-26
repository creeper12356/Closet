import {Button} from '@ant-design/react-native';
import React, {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
const ThinkTwiceButton = ({
  style,
  onPress,
  children,
  ...otherProps
}: {
  style: StyleProp<ViewStyle>;
  onPress: () => void;
  children: ReactNode;
  otherProps?: any;
}) => {
  const [pending, setPending] = React.useState(false);
  return (
    <Button
      style={
        pending
          ? typeof style === 'object'
            ? {...style, backgroundColor: 'orange'}
            : {backgroundColor: 'orange'}
          : style
      }
      onPress={
        pending
          ? () => {
              setPending(false);
              onPress();
            }
          : () => {
              setPending(true);
              setTimeout(() => {
                setPending(false);
              }, 1000);
            }
      }
      {...otherProps}>
      {pending ? 'Really?' : children}
    </Button>
  );
};
export default ThinkTwiceButton;
