import React from 'react';
import {View , StyleSheet, ImageBackground, Text,  } from 'react-native';
import Button from '../components/buttons/LogButton';
import Logo from "../components/logos/Logo";
import MyInformation from "../components/blocs/MyInformation";
import Password from '../components/inputs/PasswordInput';
import MyMeasure from '../components/inputs/MyMeasure';
import axios from 'axios';

interface State{
    navigation: any;
    email: string;
    password: string;
    password2: string;
    name: string;
    firstname: string;
    title: string;
    cm: string;
    kg: string;
    civility:string;
    birthday:string;
}

export default class Login extends React.Component<State> {
    constructor(props:State) {
        super(props);
        this.state={
            email: null,
            password: null,
            password2: null,
            name: null,
            firstname: null,
            title: null,
            cm: null,
            kg: null,
            civility: null,
            birthday: null,
        };
    }
    updateKg = (data:string) => {
        this.setState({kg:data})
        // console.log(this.state.kg)
    }

    updateCm = (data:string) => {
        this.setState({cm:data})
        // console.log(this.state.cm)
    }

    updateCivility = (data:string) => {
        this.setState({civility:data})
        // console.log(this.state.civility)
    }

    updateBirthday = (data:string) => {
        this.setState({birthday:data})
        // console.log(this.state.birthday)
    }

    updateName = (data:string) => {
        this.setState({name:data})
        // console.log(this.state.name)
    }

    updateFirstname = (data:string) => {
        this.setState({firstname:data})
        // console.log(this.state.firstname)
    }
    
    updateEmail = (data:string) => {
        this.setState({email:data})
        // console.log(this.state.email)

    }

    updatePassword = (data:string) => {
        this.setState({password:data})
        // console.log(this.state.password)

    }

    updatePassword2 = (data:string) => {
        this.setState({password2:data})
        // console.log(this.state.password2)

    }

    register (){
        const json = JSON.stringify(
                    {   email: this.state.email,
                        password: this.state.password,
                        lastName: this.state.name,
                        firstName: this.state.firstname,
                        adress:"jflsdkjfhsk dkjslfj",
                        // cm: this.state.cm,
                        // kg: this.state.kg,
                        civility: 1,
                        birthdate: this.state.birthday,
                        role:false
                    });
        axios.post(
            `http://192.168.1.49:8000/register`, json)
            .then(function (response) {
                console.log(response);
                console.log("salut vivant")

              })
              .catch(function (error) {
                console.log(error.data.status);
                console.log("salut err")
              })
        }

    render() {
        const image = {uri :"https://cdn.discordapp.com/attachments/786976841851732038/830091403409358888/dzqdzqdzqd.png"};
        return (
            <View style={styles.main_container}>
                <ImageBackground source={image} style={styles.image}>
                <View style={styles.top_container}>
                    <Logo/>
                    <Text style={styles.title}>Création de compte</Text>
                </View>
                <MyInformation
                    updateEmail={(val:string) => this.updateEmail(val)} 
                    updateCivility={(val:string) => this.updateCivility(val)}
                    updateName={(val:string) => this.updateName(val)}
                    updateFirstname={(val:string) => this.updateFirstname(val)} 
                    updateBirthday={(val:string) => this.updateBirthday(val)}
                />
                <Password
                    updatePassword={(val:string) => this.updatePassword(val)} 
                    updatePassword2={(val:string) => this.updatePassword2(val)}
                />
                <MyMeasure
                    updateCm={(val:string) => this.updateCm(val)} 
                    updateKg={(val:string) => this.updateKg(val)}
                />
                <View style={styles.button_container}>  
                <Button
                    title="Return"
                    onClick={() => this.props.navigation.navigate('Login')}
                    color= "red"
                    width="35%"
                    />
                    <Button
                    title="Valide"
                    onClick={ () => this.register()}
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
    top_container:{
        height:"23%"
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
    title:{
        fontSize:25,
        color:"white",
        borderColor:"white",
        borderTopWidth:2,
        borderBottomWidth:2,
        textAlign:"center",
        margin:"5%",
        paddingBottom:'2%',
        paddingTop: '2%'     
    }
})
