/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import {View , StyleSheet, ImageBackground} from 'react-native'
import Button from '../components/buttons/LogButton'
import Logo from "../components/logos/Logo"
import LogInput from "../components/inputs/LogInput"
import axios from 'axios';
interface State{
    navigation: any
}


export default class Login extends React.Component<State> {
    constructor(props:State) {
        super(props);
        this.state={
            email: null,
            password: null,            
        };
    }

    updateEmail = (data:string) => {
        this.setState({email:data})
        console.log(this.state.email)

    }

    updatePassword = (data:string) => {
        this.setState({password:data})
        console.log(this.state.password)

    }
    
    login (){
        var log = this.state.email;
        var pass = this.state.password;
        const json = JSON.stringify(
                    {Login: log,
                    Password: pass
                    });
        axios.post(
            `http://192.168.1.49:8000/login`, json)
          .then((response) => {
            // handle success
            console.log(response.status);
            
          },(error) => {
        //     // handle error
        //     console.log (log+ "  s  "+ pass)
        //     console.log(error.request);
        // console.log(error.message);
        // console.log(error.config);
        console.log('mort')
          });
    }
    
    render(){
        const image = {uri :"https://cdn.discordapp.com/attachments/786976841851732038/830091403409358888/dzqdzqdzqd.png"};
        return (
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
