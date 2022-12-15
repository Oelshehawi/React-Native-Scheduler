/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form'

  const NewPasswordScreen = () => {
    const navigation = useNavigation()

    const {control,handleSubmit} = useForm();

    const onSubmitPressed = (data) => {
      navigation.navigate('HomeScreen')
    };
    const onSignInPressed = () => {
      navigation.navigate('Login')
    };
    return (
      <ScrollView showVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.title}>Reset Your Password </Text>

      <CustomInput
        name= "code"
        placeholder="Enter your confirmation code"
        control={control}
        rules={{required: "Please enter your confirmation code"}}/>
        <CustomInput
        name = "newpassword"
        placeholder="Enter your new password"
        control= {control}
        rules={{required: 'Please enter a password',
        minLength: {value: 8, message: "Password must be at least 8 characters long"}}}
        />

        <CustomButton
        text = "Submit"
        onPress={handleSubmit(onSubmitPressed)}/>

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

export default NewPasswordScreen;
