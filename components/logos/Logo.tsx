/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from 'react'
import {Image, View, StyleSheet } from 'react-native'

const Logo = () => {
    return (
        <View style={styles.logo_conainer}>
           <Image style={styles.logo} source={require("./logo_mobile.png")} />
        </View>
    );
}

const styles = StyleSheet.create ({
    logo_conainer: {
        top:-60,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    logo: {
        width: 250,
        resizeMode: 'contain',
    }
})
export default Logo;