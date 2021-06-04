import React from 'react'
import {View , StyleSheet, ImageBackground } from 'react-native'
import LogButton from '../components/buttons/LogButton'
import Logo from "../components/logos/Logo"
import LogInput from "../components/inputs/LogInput"

const LogIn = () => {
    const image = {uri :"https://cdn.discordapp.com/attachments/786976841851732038/830091403409358888/dzqdzqdzqd.png"};
    return (
        <View style={styles.main_container}>
            <ImageBackground source={image} style={styles.image}>
            <Logo/>
            <LogInput/>
            <View style={styles.button_container}>  
                <LogButton onPress={this.props.navigation.navigate('Login')} title="SING IN" backgroundColor="blue"/>
                <LogButton onPress={this.props.navigation.navigate('Register')} title="REGISTER" backgroundColor="orange"/>
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
})
export default LogIn;