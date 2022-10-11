/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Text, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/quilchena_logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


  const SignUpScreen = () => {
    const {username, setUsername} = useState('');
    const {password, setPassword} = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
      console.log('Sign in');
    };
    const onForgotPasswordPressed = () => {
      console.log('Forgot');
    };
    const onSignInFacebook = () => {
      console.log('Facebook');
    };
    const onSignInGoogle= () => {
      console.log('google');
    };
    const onSignInApple = () => {
      console.log('apple');
    };
    const onSignUpPressed = () => {
      console.log('SignUp');
    };
    return (
      <ScrollView showVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.title}>Create an Account </Text>

        <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
        <CustomInput placeholder="Password" value={password} setValue={setPassword}  secureTextEntry={true}/>
        <CustomButton text = "Sign in" onPress={onSignInPressed}/>
        <CustomButton text = "Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
        <CustomButton text = "Sign in with Facebook" onPress={onSignInFacebook} bgColor = "#E7EAF4" fgColor = "#4765A9"/>
        <CustomButton text = "Sign in with Google" onPress={onSignInGoogle} bgColor = "#FAE9EA" fgColor = "#DD4D44"/>
        <CustomButton text = "Sign in with Apple" onPress={onSignInApple} bgColor = "#e3e3e3" fgColor = "#363636"/>
        <CustomButton text = "Don't Have an Account?" onPress={onSignUpPressed} type="TERTIARY"/>
      </View>
      </ScrollView>
    );
  };


const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '80%',
    maxWidth: 500,
    maxHeight: 200,
  },
  title: {
    fontWeight : 'bold',
    fontSize : 24,
    color: '#051C60',
    margin: 10,
  }
});

export default SignUpScreen;
