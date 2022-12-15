import React, {useState} from 'react';
import {View, StyleSheet, Image, useWindowDimensions, ScrollView, TextInput} from 'react-native';
import Logo from '../../../assets/images/quilchena_logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {Auth} from 'aws-amplify';
import { Alert } from 'react-native';

  const Login = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {control,handleSubmit, formState: {errors}}= useForm();

    const [loading,setLoading] = useState(false);

    const onSignInPressed = async (data) => {
      //validate user
      console.log(data.username);
      if (loading) {
        return;
      }
      setLoading(true);
      try {
        const response = await Auth.signIn(data.username, data.password);
        console.log(response);
      } catch (e) {
        Alert.alert('Oops', e.message);
      }
      setLoading(false);
    };


    const onForgotPasswordPressed = () => {
      navigation.navigate('ForgotPasswordScreen');
    };
    const onSignUpPressed = () => {
      navigation.navigate('SignUpScreen');
    };
    return (
      <ScrollView showVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />

        <CustomInput 
          name="username"
          placeholder="Username" 
          control={control}
          rules={{required: 'Please enter your username'}}/>
        <CustomInput 
          name="password"
          placeholder="Password" 
          control={control} 
          secureTextEntry={true}
          rules={{required: 'Please enter a password'}}/>


        <CustomButton text = {loading ? 'Loading...' : 'Sign in'} onPress={handleSubmit(onSignInPressed)}/>

        <CustomButton text = "Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
        <SocialSignInButtons />
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
