import React from 'react'
import {Text, View, StyleSheet } from 'react-native'

const Logo = () => {
    return (
        <View style={styles.logo_conainer}>
            <Text style={styles.titre}>SPORT CARE</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    logo_conainer: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    titre: {
        color:'white',
        fontSize:25
    }
})
export default Logo;