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

<<<<<<< HEAD
    // supprime le token stocker sur le telephone
    removeFromApp = async (value:string) => {
        try {
          await AsyncStorage.removeItem(value);
          this.setState({ token: null})
        } catch (e) {
            console.log('RmToken  '+e);
        }
    }
    // sauvegarde le token dans la memoire du telephone
    storeInApp = async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value)
            // console.log('key '+key);
        } catch (e) {
            console.log('storeToken ' + e);
        }
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
            const valueEmail = await AsyncStorage.getItem('email');
            const valuePass = await AsyncStorage.getItem('pass');
            if (valueEmail !== null) {
                this.setState({ email: valueEmail });
                
            }
            if (valuePass !== null) {
                this.setState({ password: valuePass });
            } 
            console.log('email ' + this.state.email)
            console.log('pass ' + this.state.password)
            this.getAllData();

        } catch (e) {
            return false;
        }
    }

    getAllData() {
        if (this.state.email !== null && this.state.password !== null) {
            this.login();
        } else {
            console.log('nop')
        }
    }

    login() {
        var log = this.state.email;
        var pass = this.state.password;
        const json =
        {
            email: log,
            password: pass,
        }
        axios.post(
            `${Config.baseURL}/login`, json)
            .then((response) => {
                console.log(response.data.token)
                // handle success
                if (response.status === 200) {
                    this.storeInApp('email',this.state.email)
                    this.storeInApp('pass',this.state.password)
                    this.storeInApp('token',response.data.token)
                    this.props.navigation.navigate("Dashboard");
                }
            }, (error) => {
                if (error.message.includes("400")){
                    Alert.alert("Email ou password invalide.")
                }
                console.log(error);
                console.log('error')
            });
    }

    render() {
        const image = { uri: "https://cdn.discordapp.com/attachments/786976841851732038/830091403409358888/dzqdzqdzqd.png" };
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
                                title="Register"
                                onClick={() => this.props.navigation.navigate('Register')}
                                color="red"
                                width="35%"
                            />
                            <Button
                                title="Login"
                                onClick={() => this.login()}
                                color="green"
                                width="35%"
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

