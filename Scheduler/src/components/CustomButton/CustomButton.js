/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({ onPress, text, type = 'PRIMARY', bgColor , fgColor}) =>{
    return (
      <Pressable style={[styles.container, styles[`container_${type}`], bgColor ? {backgroundColor : bgColor} : {} ]} onPress={onPress} >
        <Text style={[styles.text, styles[`text_${type}`], fgColor ? {color : fgColor} : {} ]}>{text} </Text>
      </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,

    },

    container_PRIMARY : {
        backgroundColor: 'green',
        

    },

    container_TERTIARY: {
        backgroundColor: 'blue',
    },

    container_SECONDARY:{
        borderColor: 'green',
        borderWidth: 2,

    },

    text:{
        fontWeight: 'bold',
        color: 'white',
    },

    text_TERTIARY: {
        color: 'gray',
    },
    
    text_SECONDARY:{
        color: 'gray',
    },
 

});

export default CustomButton;
