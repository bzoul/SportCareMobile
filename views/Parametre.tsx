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
                            this.props.navigation.navigate('Profil')
                        }}>
                            <Image style={styles.arrow} source={require("../icon/down-arrow.png")} />
                        </TouchableOpacity>
                        <Image style={styles.logo_image} source={require("../components/logos/logo_mobile.png")} />
                    </View>
                    <Text style={styles.textHeader}>
                        Paramêtres du compte
                    </Text>
                </View>
                <View style={styles.myInfos}>
                    <Text style={styles.titres}>
                        Mettre à jour mes informations
                    </Text>
                    <View style={styles.nomprenom}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>
                                Nom
                            </Text>
                            <TextInput style={styles.input}
                                placeholder="Nom actuel"
                                keyboardType="default"
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>
                                Prenom
                            </Text>
                            <TextInput style={styles.input}
                                placeholder="Prenom actuel "
                                keyboardType="default"
                            />
                        </View>

                    </View>
                    <View style={[styles.nomprenom, { marginVertical: 20 }]}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>
                                Date de naissance
                            </Text>
                            <TextInput style={styles.input}
                                placeholder="DDN actuelle"
                                keyboardType="default"
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>
                                Civilité
                            </Text>
                            <TextInput style={styles.input}
                                placeholder="Civilité acutel"
                                keyboardType="default"
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={[styles.buttonConfirm, { marginTop: -5 }]}
                        onPress={() => {}}
                    >
                        <Text>
                            CONFIRMER
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mdp}>
                    <Text style={styles.titres}>
                        Mettre à jour mon mot de passe
                    </Text>
                    <View style={styles.nomprenom}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>
                                Mot de passe
                            </Text>
                            <TextInput style={styles.input}
                                placeholder="mdp actuel cripté"
                                keyboardType="default"
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>
                                Confirmer le mot de passe
                            </Text>
                            <TextInput style={styles.input}
                                placeholder="same"
                                keyboardType="default"
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={[styles.buttonConfirm, { marginTop: 10 }]}
                        onPress={() => { }}
                    >
                        <Text>
                            CONFIRMER
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mesures}>
                    <Text style={styles.titres}>
                        Mettre à jour mes mensurations
                    </Text>
                    <View style={styles.nomprenom}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>
                                Taille
                            </Text>
                            <TextInput style={styles.input}
                                placeholder="Taille actuelle"
                                keyboardType="default"
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>
                                Poids
                            </Text>
                            <TextInput style={styles.input}
                                placeholder="Poids actuel"
                                keyboardType="default"
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={[styles.buttonConfirm, { marginTop: 10 }]}
                        onPress={() => { }}
                    >
                        <Text>
                            CONFIRMER
                        </Text>
                    </TouchableOpacity>
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
        height: heightScreen * 18 / 100,
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
        top: heightScreen * 6 / 100,
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
    titres: {
        fontSize: 20,
    },
    myInfos: {
        height: heightScreen * 28 / 100,
        width: widthScreen * 94 / 100,
        marginHorizontal: widthScreen * 3 / 100,
        borderBottomWidth: 1,
    },
    nomprenom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        borderWidth: 1,
        width: widthScreen * 40 / 100,
        height: 35,
    },
    mdp: {
        marginTop: 20,
        height: heightScreen * 17 / 100,
        width: widthScreen * 94 / 100,
        marginHorizontal: widthScreen * 3 / 100,
        borderBottomWidth: 1,
    },
    mesures: {
        marginTop: 20,
        height: heightScreen * 15 / 100,
        width: widthScreen * 94 / 100,
        marginHorizontal: widthScreen * 3 / 100,
    },
    buttonConfirm: {
        alignSelf: 'center',
        borderWidth: 1,
        backgroundColor: '#0094ff',
        borderColor: 'grey',
        padding: 3,
    },
});

