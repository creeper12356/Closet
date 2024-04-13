import React, { useState } from 'react';
import {Modal, Text, TextInput, View} from 'react-native';
import {Button} from '@ant-design/react-native';
import {AddClothesFormData} from '../models/AddClothesFormData.tsx';

const AddClothesForm = ({
  isVisible,
  onClose,
  onSubmit,
}: {
  isVisible: boolean;
  onClose: Function;
  onSubmit: Function;
}) => {
  const [formData, setFormData] = useState<AddClothesFormData>({
    name: '衣服',
    onCycle: 0,
    wetCycle: 0,
  });

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal
      onShow={() => {
        setFormData({name: '衣服', onCycle: 0, wetCycle: 0});
      }}
      visible={isVisible} animationType="slide" transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
          <Text>New Clothes</Text>
          <TextInput
            placeholder="Name"
            defaultValue={'衣服'}
            onChangeText={text => setFormData({...formData, name: text})}
          />
          <TextInput
            placeholder="OnCycle"
            keyboardType="numeric"
            defaultValue={'0'}
            onChangeText={text => {
              let onCycle: number = Number(text);
              setFormData({...formData, onCycle: onCycle});
            }}
          />
          <TextInput
            placeholder="WetCycle"
            keyboardType="numeric"
            defaultValue={'0'}
            onChangeText={text => {
              let wetCycle: number = Number(text);
              setFormData({...formData, wetCycle: wetCycle});
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Button
              type="primary"
              style={{
                backgroundColor: 'tomato',
              }}
              onPress={() => {
                onClose();
              }}>
              Cancel
            </Button>
            <Button
              type="primary"
              style={{
                backgroundColor: 'green',
              }}
              onPress={handleSubmit}>
              Submit
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddClothesForm;
