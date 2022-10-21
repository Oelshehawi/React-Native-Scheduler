/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';


  const SignUpScreen = () => {
    const {username, setUsername} = useState('');
    const {email, setEmail} = useState('');
    const {password, setPassword} = useState('');
    const {passwordRepeat, setPasswordRepeat} = useState('');


    const onRegisterPressed = () => {
      console.log('onRegister');
    };
    const onSignInPressed = () => {
      console.log('SignUp');
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
        placeholder="Username"
        value={username}
        setValue={setUsername}/>
        <CustomInput
        placeholder="Email"
        value={email}
        setValue={setEmail}
        secureTextEntry={true}/>
        <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}/>
        <CustomInput
        placeholder="Repeat Password"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry={true}/>
        <CustomButton
        text = "Register"
        onPress={onRegisterPressed}/>
        <Text style={styles.text}> By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and<Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text> </Text>
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
