import React from 'react';
import {Text, TextInput, View , StyleSheet, Pressable, Image } from 'react-native';
import Config from "../../Config.json";

const BottomBar = ({ navigation }) => (

            <View style={styles.main_container}>
                <View style={styles.bar}>
                    <Pressable style={styles.icon} onPress={() =>navigation.navigate('Profil')} >
                        <Image style={styles.icon} source={require("../../icon/user.png")}/>
                    </Pressable>
                    <Pressable style={styles.icon} onPress={() =>navigation.navigate('Chat')}>
                        <Image style={styles.icon} source={require("../../icon/high-heel.png")}/>
                    </Pressable>
                    <Pressable style={styles.icon} onPress={() =>navigation.navigate('Test')}>
                        <Image style={styles.icon} source={require("../../icon/page-d'accueil.png")}/>
                    </Pressable>
                    <Pressable style={styles.icon} onPress={() =>navigation.navigate('Chat')}>
                        <Image style={styles.icon} source={require("../../icon/statistics.png")}/>
                    </Pressable>
                    <Pressable style={styles.icon} onPress={() =>navigation.navigate('Chat')}>
                        <Image style={styles.icon} source={require("../../icon/chat.png")}/>
                    </Pressable>
                </View>
            </View>
);
    
export default BottomBar;


const styles = StyleSheet.create ({
    main_container: {
        position: "absolute",
        width:"100%",
        height:75,
        backgroundColor : Config.AppColor.Second,
        bottom: 0,
        alignItems: "center",
        justifyContent:"center",
    },
    bar:{
        flexDirection: "row",
        width:"100%",
        justifyContent:"space-evenly",
    },
    icon:{
        width:40,
        height:40,
    }
    

})

