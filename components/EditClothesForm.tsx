import React, { useState } from 'react';
import { Button, Modal, Text, TextInput, View } from 'react-native';
import {AddClothesFormData} from '../models/AddClothesFormData.ts';
import { Clothes } from '../models/Clothes.ts';

const EditClothesForm = ({
  isVisible,
  clothes,
  onClose,
  onSubmit,
}: {
  isVisible: boolean;
  clothes: Clothes;
  onClose: () => void;
  onSubmit: (clothes: Clothes) => void;
}) => {
  const [formData, setFormData] = useState<AddClothesFormData>({
    name: '衣服',
    onCycle: 0,
    wetCycle: 0,
  });

  const handleSubmit = () => {
    onSubmit({
      ...clothes,
      name: formData.name,
      onCycle: formData.onCycle,
      wetCycle: formData.wetCycle,
      tags: formData.name.split(' ').filter((tag: string) => tag !== ''),
    });
    onClose();
  };

  return (
    <Modal
      onShow={() => {
        setFormData({
          name: clothes.name,
          onCycle: clothes.onCycle,
          wetCycle: clothes.wetCycle,
        });
      }}
      visible={isVisible}
      animationType="slide"
      transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
          <Text>Edit Clothes</Text>
          <TextInput
            placeholder="Name"
            defaultValue={formData.name}
            onChangeText={text => setFormData({...formData, name: text})}
          />
          <TextInput
            placeholder="OnCycle"
            keyboardType="numeric"
            defaultValue={formData.onCycle.toString()}
            onChangeText={text => {
              let onCycle: number = Number(text);
              setFormData({...formData, onCycle: onCycle});
            }}
          />
          <TextInput
            placeholder="WetCycle"
            keyboardType="numeric"
            defaultValue={formData.wetCycle.toString()}
            onChangeText={text => {
              let wetCycle: number = Number(text);
              setFormData({...formData, wetCycle: wetCycle});
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Button
              title="Cancel"
              color="tomato"
              onPress={() => {
                onClose();
              }}
            />
            <Button title="Submit" color="green" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditClothesForm;
