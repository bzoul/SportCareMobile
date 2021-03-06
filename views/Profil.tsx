/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Image, Dimensions, AsyncStorage } from 'react-native'
import BottomBar from '../components/blocs/Bottombar';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

export default class Profil extends React.Component {
    // supprime le token stocker sur le telephone
    removeToken = async () => {
        try {
            await AsyncStorage.removeItem('token');
            this.props.navigation.navigate("Login");
            this.setState({ token: null })
        } catch (e) {
            console.log('RmToken  ' + e);
        }
    }
    render() {
        return (
            <View>
                <View style={styles.main_container}>
                    <View style={styles.header}>
                        <Image style={[styles.logo, { left: '5%' }]} source={require("../components/logos/logo_mobile.png")} />
                        <TouchableOpacity
                            style={styles.touchableLogout}
                            onPress={() => {
                                this.removeToken();
                            }}
                        >
                            <Image style={styles.logout} source={require("../icon/logout.png")} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.photo_container}>
                        <Image style={styles.photo} source={require("../icon/téléchargement.jpeg")} />
                        <Text style={{ fontSize: 25 }}>
                            Basile Rolland
                        </Text>
                        <Text style={{ fontSize: 20 }}>
                            basile.rolland@sportcare.co
                        </Text>
                    </View>
                    <View style={styles.features_container} >
                        <View style={styles.text_container}>
                            <Image style={styles.icon} source={require("../icon/user.png")} />
                            <Text style={styles.text_style}>Profil</Text>
                        </View>
                        <View style={styles.text_container} >
                            <Image style={styles.icon} source={require("../icon/settings.png")} />
                            <TouchableOpacity style={{ width: 300 }} onPress={() => {
                                this.props.navigation.navigate('Parametre');
                            }}>
                                <Text style={styles.text_style}>Parametre de compte</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View><BottomBar navigation={this.props.navigation} /></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: 'white',
    },
    photo: {
        borderRadius: 150,
        width: 120,
        height: 120,
    },
    photo_container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15%",
    },
    features_container: {
        marginTop: "15%",
        borderTopWidth: 1,
        width: "90%",
        alignItems: "center"
    },
    text_style: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
    icon: {
        width: 20,
        height: 20,
    },
    text_container: {
        flexDirection: "row",
        alignItems: "center",
        width: "80%",
        marginTop: 10,
        marginBottom: 5,
    },
    logo: {
        position: "absolute",
        top: 20,
        width: 150,
        height: 30,
        resizeMode: 'contain',
    },
    logout:{
        resizeMode: 'contain',
        width:35,
        height:35,
    },
    touchableLogout:{
        left: widthScreen * 82 / 100 , 
        width:35,
        height:35,
        top: 20,
    },
    header: {
        width: widthScreen,
        flexDirection: 'row',
        height:heightScreen * 10 / 100,
    },
});

