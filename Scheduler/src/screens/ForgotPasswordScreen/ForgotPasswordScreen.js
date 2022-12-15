/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

  const ForgotPasswordScreen = () => {
    
    const navigation = useNavigation()

    const {control,handleSubmit} = useForm();
    const onSendPressed = () => {
      navigation.navigate('NewPasswordScreen')
    };
    const onSignInPressed = (data) => {
      navigation.navigate('Login')
    };
    return (
      <ScrollView showVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.title}>Reset Your Password </Text>

      <CustomInput
        name="username"
        placeholder="Username"
        control={control}
        rules={{required: "Please enter a Username", 
        minLength: {value: 3, message: "Username must be at least 3 characters long"},
        maxLength: {value: 20, message: "Username must be less than 20 characters long"}
        }}/>

        <CustomButton
        text = "Send"
        onPress={handleSubmit(onSendPressed)}/>

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

export default ForgotPasswordScreen;
