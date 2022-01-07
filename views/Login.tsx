/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, StyleSheet, ImageBackground, KeyboardAvoidingView, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/buttons/LogButton'
import Logo from "../components/logos/Logo"
import LogInput from "../components/inputs/LogInput"
import Config from '../config.json';
import axios from 'axios';

interface State {
    navigation: any;
    email: string;
    password: string;
}


export default class Login extends React.Component<State> {
    constructor(props: State) {
        super(props);
        this.state = {
            email: null,
            password: null,
            token: null,
        };
        this.getData()
    }

    // sauvegarde le token dans la memoire du telephone
    storeToken = async (key : string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value)
            console.log("On store : ", key, value);
        } catch (e) {
            console.log('storeToken ' + e);
        }
    }

    tokenVerif() {
        const json = JSON.stringify({
            token: this.state.token,
        });
        axios.post(
            `${Config.baseURL}webservice/tokenVerif`, json)
            .then((response) => {
                // handle success
                if (response.data) {
                    // ouvre la page d'autoLogin
                    console.log(response.data)
                    this.props.navigation.navigate('AutoLogin');
                }
                else {
                    console.log('token invalid ' + this.state.token);
                }
            }, (error) => {
                // handle error
                console.log('log11 ' + error);
            });
    }

    updateEmail = (data: string) => {
        this.setState({ email: data })
        console.log(this.state.email)
    }

    updatePassword = (data: string) => {
        this.setState({ password: data })
        console.log(this.state.password)
    }

    getData = async () => {
        try {
            const valueToken = await AsyncStorage.getItem('token');
            if (valueToken !== null) {
                this.setState({ token: valueToken });
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }

    getAllData() {
        if (this.state.token !== null) {
            this.tokenVerif();
        } else {
            console.log('nop')
        }
    }

    login = async () => {
        var log = this.state.email;
        var pass = this.state.password;
        const json =
        {
            email: log,
            password: pass,
        }
        axios.post(
            `http://192.168.236.2:8000/login`, json)
            .then((response) => {
                // handle success
                console.log(response.status)
                if (response.status === 200) {
                    this.storeToken("token", response.data.token);
                    this.storeToken("userid",response.data._id)
                    this.props.navigation.navigate("Dashboard");
                } else {
                    
                }
            }, (error) => { 
                if (error.message.includes("400")){
                    Alert.alert("Email ou password invalide.")
                }
            });
    }

    render() {
        this.getAllData()
        const image = { uri: "https://cdn.discordapp.com/attachments/814808646873251850/918430062678781962/istockphoto-491514160-612x612.jpg" };
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
                enabled={Platform.OS === "ios" ? true : false}
                style={styles.main_container}>
                <View style={styles.main_container}>
                    <ImageBackground source={image} style={styles.image}>
                        <Logo />
                        <LogInput
                            updateEmail={(val: string) => this.updateEmail(val)}
                            updatePassword={(val: string) => this.updatePassword(val)}
                        />
                        <View style={styles.button_container}>
                            <Button
                                title="S'enregistrer"
                                onClick={() => this.props.navigation.navigate('Register')}
                                color="grey"
                                width="40%"
                            />
                            <Button
                                title="Se connecter"
                                onClick={() => this.login()}
                                color="#0094ff"
                                width="40%"
                            />

                        </View>
                    </ImageBackground>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: 'white',

    },
    button_container: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    image: {
        width: '100%',
        flex: 1,
        resizeMode: 'stretch',
        justifyContent: "center",
    },
})

