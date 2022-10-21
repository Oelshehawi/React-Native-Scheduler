/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


  const ConfirmEmailScreen = () => {
    const {code, setCode} = useState('');


    const onConfirmPressed = () => {
      console.log('onConfirm');
    };
    const onSignInPressed = () => {
      console.log('onSignIn');
    };
    const onResendPressed = () => {
      console.log('onResend');
    };
    return (
      <ScrollView showVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.title}>Confirm your Email </Text>

        <CustomInput
        placeholder="Enter your confirmation code"
        value={code}
        setValue={setCode}/>

        <CustomButton
        text = "Confirm"
        onPress={onConfirmPressed}/>

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
