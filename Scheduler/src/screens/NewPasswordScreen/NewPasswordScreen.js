/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


  const NewPasswordScreen = () => {
    const {code, setCode} = useState('');
    const {newPassword, setNewPassword} = useState('');


    const onSubmitPressed = () => {
      console.log('onSubmit');
    };
    const onSignInPressed = () => {
      console.log('onSignIn');
    };
    return (
      <ScrollView showVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.title}>Reset Your Password </Text>

        <CustomInput
        placeholder="Enter your confirmation code"
        value={code}
        setValue={setCode}/>
        <CustomInput
        placeholder="Enter your new password"
        value={newPassword}
        setValue={setNewPassword}/>

        <CustomButton
        text = "Submit"
        onPress={onSubmitPressed}/>

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
