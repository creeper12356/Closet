import { Clothes } from "../objects/Clothes.tsx";
import { Text, View } from "react-native";

const ClothesItemContent = ({
  clothes,
  onDelete,
}: {
  clothes: Clothes;
  onDelete: Function;
}) => {
  return (
    <View style={{flexDirection:'row'}}>
      <Text
        style={{marginRight:20,fontSize:35}}
        onPress={() => {
          onDelete(clothes.id);
        }}
      >
        ×
      </Text>
      <View
        style={{
          marginRight: 20,
        }}>
        <Text style={{marginRight: 30}}>{clothes.name}</Text>
      </View>
    </View>
  );
};

export default ClothesItemContent;
