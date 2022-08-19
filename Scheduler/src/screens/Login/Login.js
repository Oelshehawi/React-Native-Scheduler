/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View,Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/quilchena_logo.png';
import CustomInput from '../../components/CustomInput';


  const Login = () => {
    const {height} = useWindowDimensions();
    return (
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />

        <CustomInput />
      </View>
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
