import React from 'react';
import {View , StyleSheet, ImageBackground, Text,  } from 'react-native';
import LogButton from '../components/buttons/LogButton';
import Logo from "../components/logos/Logo";
import MyInformation from "../components/blocs/MyInformation";
import Password from '../components/inputs/PasswordInput';
import MyMeasure from '../components/inputs/MyMeasure';


export default class Login extends React.Component {
    render() {
        const image = {uri :"https://cdn.discordapp.com/attachments/786976841851732038/830091403409358888/dzqdzqdzqd.png"};
        return (
            <View style={styles.main_container}>
                <ImageBackground source={image} style={styles.image}>
                <View style={styles.top_container}>
                    <Logo/>
                    <Text style={styles.title}>Création de compte</Text>
                </View>
                <MyInformation/>
                <Password/>
                <MyMeasure/>
                <View style={styles.button_container}>  
                    <LogButton title='Register'/>
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
