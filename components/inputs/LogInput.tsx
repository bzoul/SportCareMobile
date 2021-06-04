import React from 'react'
import {TextInput, View, StyleSheet } from 'react-native'

const LogInput = () => {
    return (
        <View style={styles.text_input_container}>
            <TextInput
            style={styles.input_text}
            placeholder=" @ email"
            placeholderTextColor='grey'
            />
            <TextInput
            style={styles.input_text}
            placeholder=" Password"
            placeholderTextColor='grey'
            />    
        </View>
    );
    }

const styles = StyleSheet.create ({
    text_input_container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    input_text: {
        width:'80%',
        borderWidth:2,
        marginBottom:25,
        marginTop:25,
        borderColor: 'grey',
        backgroundColor:'white',
        borderRadius: 10
    },
})

export default LogInput;