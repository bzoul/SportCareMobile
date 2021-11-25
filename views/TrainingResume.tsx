/* eslint-disable react/no-string-refs */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TextInput, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import BottomBar from '../components/blocs/Bottombar';
import Form from 'react-native-form';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const data = ["Big Data", "Hadoop", "Spark", "Hive"];

export default class TrainingResume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
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
                        Résumé de votre activité
                    </Text>
                </View>
                <View style={styles.corps}>
                    <View style={styles.duree}>
                        <Text style={styles.dureeText}>
                            Durée de l'entrainement
                        </Text>
                        <TextInput style={styles.input}
                            placeholder="En minute"
                            keyboardType="numeric" />
                        <View style={styles.intensite}>
                            <Text style={styles.dureeText}>
                                Intensité
                            </Text>
                            <View style={styles.viewEmoji}>
                                <Image style={styles.emoji} source={require("../icon/emoji-5.png")} />
                                <Image style={styles.emoji} source={require("../icon/emoji-4.png")} />
                                <Image style={styles.emoji} source={require("../icon/emoji-3.png")} />
                                <Image style={styles.emoji} source={require("../icon/emoji-2.png")} />
                                <Image style={styles.emoji} source={require("../icon/emoji-1.png")} />
                            </View>
                        </View>
                        <View style={styles.intensite}>
                            <Text style={styles.dureeText}>
                                Poids actuel
                            </Text>
                            <TextInput style={styles.input}
                                placeholder="En kg"
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={styles.intensite}>
                            <Text style={styles.dureeText}>
                                Commentaire
                            </Text>
                            <TextInput style={styles.inputCom}
                                placeholder="Ressenti, progression, engouement etc.."
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.finalButtonView}>
                            <TouchableOpacity style={[styles.valide, {backgroundColor : 'red'}]}>
                                <Text style={{textAlign : 'center', marginTop : 9}}>
                                    Annulé
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.valide, {backgroundColor : 'green'}]}>
                                <Text style={{textAlign : 'center', marginTop : 9}}>
                                    Validé
                                </Text>
                            </TouchableOpacity>
                        </View>
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
    header: {
        height: heightScreen * 20 / 100,
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
    corps: {
        alignItems: 'center',
    },
    duree: {
        alignItems: 'center',
    },
    dureeText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        marginTop: 10,
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
    intensite: {
        alignItems: 'center',
        marginTop: heightScreen * 5 / 100,
    },
    viewEmoji: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: heightScreen * 5 / 100,
        width: widthScreen * 55 / 100,
        top: 5,
    },
    emoji: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        tintColor: 'grey',
    },
    inputCom: {
        marginTop: 10,
        width: widthScreen * 94 / 100,
        height: heightScreen * 10 / 100,
        borderWidth: 1,
    },
    logo_image: {
        width: 150,
        height: 30,
        resizeMode: 'contain',
        left: widthScreen * 50 / 100,
        top: 5,
    },
    finalButtonView: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-around',
    },
    valide: {
        borderWidth: 1,
        width: 70,
        height: 40,
        marginHorizontal: 50,
        borderRadius: 5,
    },
});

