import { Clothes } from '../models/Clothes.tsx';
import { TouchableOpacity } from 'react-native';
import ClothesItemContent from './ClothesItemContent.tsx';
import OperateButton from './OperateButton.tsx';
const DirtyClothesItem = ({
  clothes,
  wash,
  onDelete,
}: {
  clothes: Clothes;
  wash: Function;
  onDelete: Function;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'rgb(153, 102, 51)',
        borderColor: 'white',
        borderBottomWidth: 1,
        flexDirection: 'row',
      }}
    >
      <ClothesItemContent clothes={clothes} onDelete={onDelete}/>
      <OperateButton type="wash" onPress={wash} clothesId={clothes.id} />
    </TouchableOpacity>
  );
};
export default DirtyClothesItem;
