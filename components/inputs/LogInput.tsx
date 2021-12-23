/* eslint-disable prettier/prettier */
/* eslint-disable no-spaced-func */
/* eslint-disable semi */
import React from 'react'
import {TextInput, View, StyleSheet } from 'react-native'

export default class LogInput extends React.Component {
    constructor(props) {
        super(props);
    }
    handleEmail = (e:string) => {
        this.props.updateEmail(e)
    }
    handlePassword = (e:string) => {
        this.props.updatePassword (e)
    }

    
    render(){
        return (
        <View style={styles.text_input_container}>
            <TextInput
            style={styles.input_text}
            placeholder=" Email"
            placeholderTextColor='grey'
            onChangeText={text => this.handleEmail(text)}
            color="black"
            />
            <TextInput
            style={styles.input_text}
            placeholder=" Mot de passe"
            onChangeText={text => this.handlePassword(text)}
            placeholderTextColor='grey'
            secureTextEntry={true}
            color="black"
            />    
        </View>
    );
    }
    
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

