import React from 'react'
import {Text, ScrollView, View , StyleSheet, Image } from 'react-native'
import BottomBar from '../components/blocs/Bottombar';
import Logo from "../components/logos/Logo"

export default class Test extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.main_container}>
                    <Text style={styles.logo}>SPORT CARE</Text>
                    <View style={styles.photo_container}>
                        <Image style={styles.photo} source={require("../icon/téléchargement.jpeg")}/>
                        <Text style={{fontSize:25}}>
                            Basile Rolland
                        </Text>
                        <Text style={{fontSize:20}}>
                            Basile.Rolland@sportcare.audd
                        </Text>
                    </View>
                    <View style={styles.features_container} >
                        <View style={styles.text_container}>
                            <Image style={styles.icon} source={require("../icon/user.png")}/>
                            <Text style={styles.text_style}>Profil</Text>
                        </View>
                        <View style={styles.text_container} >
                            <Image style={styles.icon} source={require("../icon/settings.png")}/>
                            <Text style={styles.text_style}>Parametre de compte</Text>
                        </View>
                    </View>
                </View>
                <View><BottomBar navigation={this.props.navigation}/></View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    main_container: {
        width:"100%",
        height:"100%",
        alignItems:"center",
    },
    photo: {
        borderRadius:150,
        width:120,
        height:120
    },
    photo_container:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:"15%"
    },
    features_container:{
        marginTop:"15%",
        borderTopWidth:1,
        width:"90%",
        alignItems: "center"
    },
    text_style:{
        fontSize:20,
        marginLeft:10,
        width:"90%",
    },
    icon:{
        width:20,
        height:20,
    },
    text_container:{
        flexDirection:"row",
        alignItems:"center",
        width:"80%" ,
        marginTop:10,
        marginBottom:5,
    },
    logo:{
        position: "absolute",
        top:20,
        left:"10%",
        fontSize:20,
        backgroundColor:"black",
        color:"white",
    }
    

})

