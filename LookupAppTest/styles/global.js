import React from 'react';
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container : {
        flex: 1,        
        padding: 10        
    },
    title: {
        fontSize: 32
    },
    button: {
        marginTop: 20,
        backgroundColor: '#add8e6',
        borderWidth: 2,
        borderColor: '#aee8e6',
        padding:5,
        borderRadius: 15,
        alignItems: 'center'
    },
    textWhite: {
        color:'#fff'
    },
    textBlack : {
        color: '#000'
    },
    textButton : {
        fontSize: 24
    }
});

export default globalStyles;