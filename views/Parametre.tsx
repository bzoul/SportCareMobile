/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { voidTypeAnnotation } from '@babel/types';
import React from 'react';
import { Text, TextInput, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import BottomBar from '../components/blocs/Bottombar';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

export default class Parametre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.header}>
                    <View style={styles.topheader}>
                        <TouchableOpacity style={{
                            height: 35, width: 35,
                        }} onPress={() => {
                            this.props.navigation.navigate('TrainingChoice')
                        }}>
                            <Image style={styles.arrow} source={require("../icon/down-arrow.png")} />
                        </TouchableOpacity>
                        <Image style={styles.logo_image} source={require("../components/logos/logo_mobile.png")} />
                    </View>
                    <Text style={styles.textHeader}>
                        Paramêtre du compte
                    </Text>
                </View>
                <View style={styles.myInfos}>
                    <Text>
                        Mettre à jour mes informations
                    </Text>
                    <View style={styles.nomprenom}>
                        <TextInput style={styles.input}
                            placeholder="Nom"
                            keyboardType="default"
                        />
                        <TextInput style={styles.input}
                            
                            placeholder="Prenom"
                            keyboardType="default"
                        />
                    </View>
                </View>
                <BottomBar navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
    },
    flatList: {
        marginHorizontal: widthScreen * 15 / 100,
        borderWidth: 1,
    },
    header: {
        width: widthScreen,
        height: heightScreen * 20 / 100,
        backgroundColor: 'white',
    },
    topheader: {
        flexDirection: 'row',
        top: heightScreen * 5 / 100,
        left: widthScreen * 5 / 100,
    },
    textHeader: {
        textAlign: 'center',
        fontSize: 25,
        color: 'black',
        top: heightScreen * 7 / 100,
    },
    arrow: {
        resizeMode: 'contain',
        height: 35,
        width: 35,
        tintColor: 'black',
        transform: [{ rotate: '90deg' }],
    },
    logo_image: {
        width: 150,
        height: 30,
        resizeMode: 'contain',
        left: widthScreen * 50 / 100,
        top: 5,
    },
    myInfos: {
        height: heightScreen * 30 / 100,
        width: widthScreen * 94 / 100,
        marginHorizontal: widthScreen * 3 / 100,
    },
    nomprenom: {
        flexDirection: 'row',
        justifyContent : 'space-around',
        marginVertical : 20,
      },
    input:{
        borderWidth: 1,
        width : widthScreen * 40 / 100,
        height: 35,
    },
});

