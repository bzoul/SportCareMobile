import React from 'react'
import {View , StyleSheet, ImageBackground, Text } from 'react-native'
import LogButton from '../components/buttons/LogButton'
import Logo from "../components/logos/Logo"
import MyInformation from "../components/blocs/MyInformation"

const LogIn = () => {
    const image = {uri :"https://cdn.discordapp.com/attachments/786976841851732038/830091403409358888/dzqdzqdzqd.png"};
    return (
        <View style={styles.main_container}>
            <ImageBackground source={image} style={styles.image}>
            <Logo/>
            <Text style={styles.title}>Création de compte</Text>
            <MyInformation/>
            <View style={styles.button_container}>  
                <LogButton onPress={this.props.navigation.navigate('Login')} title="REGISTER" backgroundColor="blue"/>
            </View>
            </ImageBackground>
        </View>
       );
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
    title:{
        fontSize:25,
        color:"white",
        borderColor:"white",
        borderTopWidth:2,
        borderBottomWidth:2,
        alignContent:"center",
        justifyContent:"center",
        textAlign:"center",
        flex:1,
        margin:"5%"
        
    }
})
export default LogIn;