export interface FormInterface {
  name: string;
  onCycle: number;
  wetCycle: number;
}

import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Form = ({
  isVisible,
  onClose,
  onSubmit,
}: {
  isVisible: boolean;
  onClose: Function;
  onSubmit: Function;
}) => {
  const [formData, setFormData] = useState<FormInterface>({
    name: '衣服',
    onCycle:0,
    wetCycle:0,
  })
  const handleChange = (fieldName: string, value: string | number) => {
    setFormData({...formData, [fieldName]: value});
  };

  const handleSubmit = () => {
    // 处理表单提交
    onSubmit(formData);
    // 清空表单数据
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <View style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
          <Text>New Clothes</Text>
          <TextInput
            placeholder="Name"
            value={formData.name}
            onChangeText={text => handleChange('name', text)}
          />
          <TextInput
            placeholder="OnCycle"
            keyboardType="numeric"
            value={formData.onCycle.toString()}
            onChangeText={text => handleChange('onCycle', Number(text))}
          />
          <TextInput
            placeholder="WetCycle"
            keyboardType="numeric"
            value={formData.wetCycle.toString()}
            onChangeText={text => handleChange('wetCycle', Number(text))}
          />
          <View
            style={{flexDirection:'row'}}
          >
            <TouchableOpacity
              style={{
                marginHorizontal:10,
              }}
              onPress={() => {
                onClose();
              }}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSubmit}
              style={{
              marginHorizontal:10,
            }}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Form;
