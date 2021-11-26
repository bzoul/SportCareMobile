/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import {View , StyleSheet, ImageBackground, KeyboardAvoidingView} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/buttons/LogButton'
import Logo from "../components/logos/Logo"
import LogInput from "../components/inputs/LogInput"
import Config from '../config.json';
import axios from 'axios';
interface State{
    navigation: any;
    email: string;
    password: string;
}


export default class Login extends React.Component<State> {
    constructor(props:State) {
        super(props);
        this.state={
            email: null,
            password: null,  
            token: null,          
        };
        this.getData()
    }

    // supprime le token stocker sur le telephone
    removeToken = async () => {
        try {
          await AsyncStorage.removeItem('token');
          this.setState({ token: null})
        } catch (e) {
            console.log('RmToken  '+e);
        }
    }

    // sauvegarde le token dans la memoire du telephone
    storeToken = async (value:string) => {
        try {
            await AsyncStorage.setItem('token', value)
        //   console.log(this.state.token);
        } catch (e) {
            console.log('storeToken '+e);
        }
    }

    tokenVerif(){
        const json = JSON.stringify({
            token: this.state.token
        });
        axios.post(
            `${Config.baseURL}webservice/tokenVerif`, json)
          .then((response) => {
            // handle success
            if (response.data){
                // ouvre la page d'autoLogin
                console.log(response.data)
                this.props.navigation.navigate('AutoLogin');
            }
            else {
                console.log('token invalid '+this.state.token);
            }
          },(error) => {
            // handle error
            console.log('log11 '+error);
          });
    }

    updateEmail = (data:string) => {
        this.setState({email:data})
        console.log(this.state.email)
    }

    updatePassword = (data:string) => {
        this.setState({password:data})
        console.log(this.state.password)

    }

    getData = async () => {
        try {
            const valueToken = await AsyncStorage.getItem('token');
            if (valueToken !== null){
                this.setState({token: valueToken});
            } else {
                return false;
            }
        } catch(e) {
           return false;
        }
      }

    getAllData(){
        if (this.state.token !== null){
            this.tokenVerif();
        } else {
            console.log('nop')
        }
    }
    
    login (){
        var log = this.state.email;
        var pass = this.state.password;
        const json = 
                    {email: log,
                    password: pass
                    }
        axios.post(
            `http://192.168.1.49:8000/login`, json)
          .then((response) => {
            // handle success
            if (response.status == 201){
                this.props.navigation.navigate("Sensor");
            } else {
                console.log(response.status);
            }
          },(error) => {
            //     // handle error
            //     console.log (log+ "  s  "+ pass)
                console.log(error.request);
                console.log(error.message);
            // console.log(error.config);
            console.log(error)
          });
    }
    
    render(){
        this.getAllData()
        const image = {uri :"https://cdn.discordapp.com/attachments/786976841851732038/830091403409358888/dzqdzqdzqd.png"};
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
                enabled={Platform.OS === "ios" ? true : false}
                style={styles.main_container}>
            <View style={styles.main_container}>
                <ImageBackground source={image} style={styles.image}>
                <Logo/>
                <LogInput
                updateEmail={(val:string) => this.updateEmail(val)} 
                updatePassword={(val:string) => this.updatePassword(val)} 
                />
                <View style={styles.button_container}>  
                    <Button
                    title="Register"
                    onClick={() => this.props.navigation.navigate('Register')}
                    color= "red"
                    width="35%"
                    />
                    <Button
                    title="Login"
                    onClick={ () => this.login()}
                    color= "green"
                    width="35%"
                    />
                    
                </View>
                </ImageBackground>
            </View>
            </KeyboardAvoidingView>
        );
        }
    
}

const styles = StyleSheet.create ({
    main_container: {
        width:'100%',
        height:'100%',
        display:'flex',
        backgroundColor:'white',

    },
    button_container: {
        flex:1,
        width:"100%",
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    image:{
        width:'100%',
        flex:1,
        resizeMode:'stretch',
        justifyContent:"center",
    },
})
