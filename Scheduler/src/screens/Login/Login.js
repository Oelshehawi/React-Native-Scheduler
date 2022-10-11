/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/quilchena_logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


  const Login = () => {
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
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />

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
});

export default Login;
