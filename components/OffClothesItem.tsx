import { Clothes } from '../models/Clothes.tsx';
import { Text, TouchableOpacity, View } from 'react-native';
import ClothesItemContent from './ClothesItemContent.tsx';
import OperateButton from './OperateButton.tsx';
const OffClothesItem = ({
  clothes,
  puton,
  wash,
  onDelete,
}: {
  clothes: Clothes;
  puton: Function;
  wash: Function;
  onDelete: Function;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'brown',
        borderColor: 'white',
        borderBottomWidth: 1,
        flexDirection: 'row',
      }}
    >
      <ClothesItemContent clothes={clothes} onDelete={onDelete}/>
      <OperateButton type="puton" onPress={puton} clothesId={clothes.id} />
      <OperateButton type="wash" onPress={wash} clothesId={clothes.id} />
      <View>
        <Text>{`On for ${Math.round(clothes.onTime / 3600000)} h`}</Text>
        <Text>{new Date(clothes.lastTimeStamp).toString()}</Text>
      </View>
    </TouchableOpacity>

  );
};
export default OffClothesItem;
