import {Clothes} from '../models/Clothes.tsx';
import {Text, View} from 'react-native';
import { deleteClothes } from "../services/clothes.ts";
import { useContext } from "react";
import { ClothesContext } from "../contexts/ClothesContext.ts";

const ClothesItemContent = ({clothes}: {clothes: Clothes}) => {
  const {clothesList, setClothesList} = useContext(ClothesContext);
  return (
    <View style={{flexDirection: 'row'}}>
      <Text
        style={{marginRight: 20, fontSize: 35, color: 'rgb(100,0,0)'}}
        onPress={() => {
          deleteClothes(clothesList, setClothesList, clothes.id);
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
