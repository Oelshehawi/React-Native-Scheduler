/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const SignUpScreen = () => {
    
    const navigation = useNavigation();

    const {control,handleSubmit, formState: {errors},watch}= useForm();
    const pwd = watch('password')
    const onRegisterPressed = (data) => {
      console.log(data.repeatpassword)
      navigation.navigate('ConfirmEmailScreen')
    };
    const onSignInPressed = () => {
      navigation.navigate('Login');
    };
    const onTermsOfUsePressed = () => {
      console.log('TermsOfUsePressed');
    };
    const onPrivacyPressed = () => {
      console.log('PrivacyPressed');
    };
    return (
      <ScrollView showVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.title}>Create an Account </Text>

        <CustomInput
        name="username"
        placeholder="Username"
        control={control}
        rules={{required: "Please enter a Username", 
        minLength: {value: 3, message: "Username must be at least 3 characters long"},
        maxLength: {value: 20, message: "Username must be less than 20 characters long"}
        }}/>
        <CustomInput
        name="email"
        placeholder="Email"
        control={control}
        rules={{required: 'Please enter your Email',
        pattern: {value: EMAIL_REGEX, message: "Please enter a valid Email"},} }/>
        <CustomInput
        name="password"
        placeholder="Password"
        control={control}
        rules={{required: 'Please enter a password',
        minLength: {value: 8, message: "Password must be at least 8 characters long"}}}
        secureTextEntry={true}/>
        <CustomInput
        name="repeatpassword"
        placeholder="Repeat Password"
        control={control}
        rules={{validate: value => value === pwd || 'Passwords do no match'}}
        secureTextEntry={true}/>
        <CustomButton
        text = "Register"
        onPress={handleSubmit(onRegisterPressed)}/>

        <Text style={styles.text}> By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and {' '}<Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text> </Text>
        <SocialSignInButtons />
        <CustomButton text = "Already Have an Account? Sign in" onPress={onSignInPressed} type="TERTIARY"/>
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
  link: {
    color: '#FDB075',
  },
});

export default SignUpScreen;
