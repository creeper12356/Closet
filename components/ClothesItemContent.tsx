import {Clothes} from '../models/Clothes.tsx';
import {Text, View} from 'react-native';

const ClothesItemContent = ({
  clothes,
  onDelete,
}: {
  clothes: Clothes;
  onDelete: Function;
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text
        style={{marginRight: 20, fontSize: 35, color: 'rgb(100,0,0)'}}
        onPress={() => {
          onDelete(clothes.id);
        }}>
        ×
      </Text>
      <View>
        <Text>{clothes.name}</Text>
      </View>
    </View>
  );
};

export default ClothesItemContent;
