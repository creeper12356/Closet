import {Clothes} from '../models/Clothes.ts';
import {Text, View} from 'react-native';
import {deleteClothes} from '../services/clothes.ts';
import {useContext} from 'react';
import {ClothesContext} from '../contexts/ClothesContext.ts';
import {Tag} from '@ant-design/react-native';

const ClothesItemContent = ({clothes}: {clothes: Clothes}) => {
  const {clothesList, setClothesList} = useContext(ClothesContext);
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{marginRight: 20, fontSize: 35, color: 'rgb(100,0,0)'}}
          onPress={() => {
            deleteClothes(clothesList, setClothesList, clothes.id);
          }}>
          ×
        </Text>
        <Text>{clothes.name}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        {clothes.tags?.map((tag, index) => (
          <Tag closable key={index} style={{marginRight: 5}}>
            {tag}
          </Tag>
        ))}
      </View>
    </View>
  );
};

export default ClothesItemContent;
