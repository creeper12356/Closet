import { Clothes } from '../models/Clothes.tsx';
import { TouchableOpacity } from 'react-native';
import ClothesItemContent from './ClothesItemContent.tsx';
import OperateButton from './OperateButton.tsx';
const DryClothesItem = ({
  clothes,
  puton,
  onDelete,
}: {
  clothes: Clothes;
  puton: Function;
  onDelete: Function;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'grey',
        borderColor: 'white',
        borderBottomWidth: 1,
        flexDirection: 'row',
      }}
    >
      <ClothesItemContent clothes={clothes} onDelete={onDelete}/>
      <OperateButton type="puton" onPress={puton} clothesId={clothes.id} />
    </TouchableOpacity>
  );
};
export default DryClothesItem;
