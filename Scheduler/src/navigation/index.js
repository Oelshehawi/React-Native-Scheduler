/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import SignUpScreen from '../screens/SignUp';
import ConfirmEmailScreen from '../screens/ConfirmEmail';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const MyTheme = {
  dark: false,
  colors: {
    background: 'blue',
  }
}
const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component = {Login} />
            <Stack.Screen name="SignUpScreen" component = {SignUpScreen} />
            <Stack.Screen name="ConfirmEmailScreen" component = {ConfirmEmailScreen} />
            <Stack.Screen name="ForgotPasswordScreen" component = {ForgotPasswordScreen} />
            <Stack.Screen name="NewPasswordScreen" component = {NewPasswordScreen} />
            <Stack.Screen name="HomeScreen" component = {HomeScreen} />

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation