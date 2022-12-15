/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';


  const ConfirmEmailScreen = () => {
    const navigation = useNavigation();

    const {control,handleSubmit, formState: {errors}}= useForm();

    const onConfirmPressed = (data) => {
      navigation.navigate('HomeScreen');
    };
    const onSignInPressed = () => {
      navigation.navigate('Login')
    };
    const onResendPressed = () => {
      console.warn('onResendPress');
    };
    return (
      <ScrollView showVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.title}>Confirm your Email </Text>

        <CustomInput
        name= "confirmationCode"
        placeholder="Enter your confirmation code"
        control={control}
        rules={{required: "Please enter your confirmation code"}}/>

        <CustomButton
        text = "Confirm"
        onPress={handleSubmit(onConfirmPressed)}/>

        <CustomButton text = "Resend Code" onPress={onResendPressed} type ="SECONDARY" />
        <CustomButton text = "Back to Sign In" onPress={onSignInPressed} type ="TERTIARY"/>
      </View>
      </ScrollView>
    );
  };


const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  title: {
    fontWeight : 'bold',
    fontSize : 24,
    color: 'white',
    margin: 10,
  },
});

export default ConfirmEmailScreen;
