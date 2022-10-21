/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { useNavigation} from '@react-navigation/native';


const HomeScreen = () => {
    const onSignUpPressed = () => {
        navigation.navigate('SignUpScreen');
      };
    const navigation = useNavigation();
  return (
    <View>
      <Text style={{ fontSize: 24,alignItems: 'center'}}>Home</Text>

      <CustomButton text = "Don't Have an Account?" onPress={onSignUpPressed} type="TERTIARY"/>
    </View>
  )
}

export default HomeScreen