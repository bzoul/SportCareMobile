/* eslint-disable no-return-assign */
/* eslint-disable space-infix-ops */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions,TouchableOpacity } from 'react-native';
import BottomBar from '../components/blocs/Bottombar';
import Day from '../components/blocs/progressCircle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from '../config.json';
import { set } from 'react-native-reanimated';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
var readiness = 57;
var readinessTxt = "57%  ";
var IMC = 19;
var weight = 70;
var height = 181;
var colorReadiness = '#00a8f3';
interface State {
    navigation: any;
}
export default class Dashboard extends React.Component<State> {
    constructor(props: State) {
        super(props);
        this.state = {
            token: null,
            userid:null,
            nom:null,
        };
        this.getData();
        this.getAccountData();
    }

    getData = async () => {
        console.log("GETASYNCSTORAGE");
        try {
            const Token = await  AsyncStorage.getItem('token');
            const Userid = await AsyncStorage.getItem('userid');
            console.log(Token);
            console.log(Userid);

            if (Token !== null) {
                this.setState({ token: Token });
            } else {
                return false;
            }
            if (Userid !== null) {
                this.setState({ userid: Userid });
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }

    getAccountData = async () => {
        console.log("getAccountData");
        
        const json = JSON.stringify({
            token: this.state.token,
        });
        console.log("lance la requete");
        try {
            console.log("dans requete : "+ this.state.token);
            console.log("dans requete : "+ this.state.userid);
            await axios.post(
            `${Config.baseURL}/users/`+ this.state.userid, json)
            .then((response) => {
                console.log(response.data);
                if (response.status === 200) { 
                    console.log(response.data);
                    this.setState({
                        nom : response.data.firstName,
                    });
                }
                else {
                    console.log('id invalid ' + this.state.userid);
                }
            }, (error) => {
                // handle error
                console.log('log ' + error);
            });
        } catch (e) {
            return false;
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>


                <View style={styles.header}>
                    <View>
                        <Image style={styles.logo_image} source={require("../components/logos/logo_mobile.png")} />
                        <Text style={styles.textWelcom}>Bonjour Marceau,</Text>
                        <Text style={styles.textNotif}>Vous avez un message de votre coach.</Text>
                    </View>
                    <View style={styles.bpm}>
                        <Image style={styles.like_logo} source={require("../icon/like.png")} />
                        <Text>63 BPM</Text>
                    </View>
                    <TouchableOpacity style={[styles.formeView, { right: widthScreen * 7 / 100 }]}
                        onPress={() => {
                            this.props.navigation.navigate('Electrocardiogramme');
                        }}>
                        <Image style={styles.emoji} source={require("../icon/emoji-3.png")} />
                        <Image style={styles.heart} source={require("../icon/like.png")} />
                    </TouchableOpacity>
                </View>
                <View style={{ borderColor: 'grey', borderWidth: 0.25, width: widthScreen * 94 / 100, left: widthScreen * 3 / 100 }} />
                
                
                <View style={{ height: heightScreen - (heightScreen * 28/100), top: -20}}>
                    

                        <View style={styles.formeJournaliere}>
                            <Text style={styles.titreFormeJournaliere}>Forme journalière</Text>
                            <View style={styles.week}>
                                <Day textFontWeight="normal" textFontColor="grey" ringBgColor="#E0E0E0" ringColor="grey" percent="50" text="Lun" radius={25} viewType={"littleOne"}></Day>
                                <Day textFontWeight="normal" textFontColor="grey" ringBgColor="#E0E0E0" ringColor="grey" percent="25" text="Mar" radius={25} viewType={"littleOne"}></Day>
                                <Day textFontWeight="normal" textFontColor="grey" ringBgColor="#E0E0E0" ringColor="grey" percent="25" text="Mer" radius={25} viewType={"littleOne"}></Day>
                                <Day textFontWeight="normal" textFontColor="grey" ringBgColor="#E0E0E0" ringColor="grey" percent="75" text="Jeu" radius={25} viewType={"littleOne"}></Day>
                                <Day textFontWeight="normal" textFontColor="grey" ringBgColor="#E0E0E0" ringColor="grey" percent="0" text="Ven" radius={25} viewType={"littleOne"}></Day>
                            </View>

                            <View style={styles.readinessView}>
                                <View style={[styles.viewFormeToday, { backgroundColor: '#ff7f27' }, { position: 'absolute', right: 20, top: 20 }]}>
                                    <Text style={styles.textFormeToday}>Very Low</Text>
                                </View>
                                <View style={[styles.viewFormeToday, { backgroundColor: '#ffca18' }, { position: 'absolute', right: 20, bottom: 20 }]}>
                                    <Text style={styles.textFormeToday}>Low</Text>
                                </View>
                                <View style={[styles.viewFormeToday, { backgroundColor: '#00a8f3', position: 'absolute', left: 20, bottom: 20 }]}>
                                    <Text style={styles.textFormeToday}>Normal</Text>
                                </View>
                                <View style={[styles.viewFormeToday, { backgroundColor: '#0ed145', position: 'absolute', left: 20, top: 20 }]}>
                                    <Text style={styles.textFormeToday}>High</Text>
                                </View>
                                <Day textFontWeight="bold" textFontColor="grey" ringBgColor="#E0E0E0" textFontSize={30}
                                    ringColor={colorReadiness} percent={readiness} text={readinessTxt} radius={100} bgRingWidth={14} viewType="bigone" />
                            </View>
                        </View>

                        <View style={styles.IMCView}>
                            <Text style={styles.textIMC}>Indice de masse corporelle</Text>
                            <View style={{ flexDirection: 'row', width: widthScreen * 94 / 100, justifyContent: 'space-around' }}>
                                <View style={styles.mensuration}>
                                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Taille : {"\n"}{height}cm</Text>
                                </View>
                                <View style={styles.mensuration}>
                                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Poids : {"\n"}{weight}kg</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', width: widthScreen * 94 / 100, justifyContent: 'space-around', top: -15 }}>
                                <View style={styles.IMC}>
                                    {/*IMC < 18.5? colorIMC = 'orange':IMC < 25 ? colorIMC = 'green' : IMC < 30 ? colorIMC = 'blue': IMC< 35 ? colorIMC = 'orange' : IMC < 40 ? colorIMC ='red': IMC >= 40 ? colorIMC = 'black': colorIMC = 'white'*/}
                                    <Text style={{ textAlign: 'center', color: 'green', fontWeight: 'bold' }}>
                                        IMC {"\n"}{(weight / ((height / 100) * (height / 100))).toFixed(1)}
                                    </Text>
                                </View>
                            </View>
                        </View>
                 
                </View>
                <BottomBar navigation={this.props.navigation} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo_image: {
        width: 150,
        height: 30,
        resizeMode: 'contain',
    },
    header: {
        left: widthScreen * 3 / 100,
        width: widthScreen * 94 / 100,
        top: heightScreen * 3 / 100,
        height: heightScreen * 15 / 100,
        flexDirection: 'row',
    },
    like_logo: {
        width: 10,
        height: 10,
        resizeMode: 'contain',
        tintColor: 'blue',
        top: '9%',
    },
    bpm: {
        flexDirection: "row",
        alignSelf: 'baseline',
        left: widthScreen * 12 / 100,
        top: heightScreen * 7.35 / 100,
    },
    textWelcom: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        left: widthScreen * 1 / 100,
    },
    textNotif: {
        fontSize: 16,
        color: 'orange',
        left: widthScreen * 1 / 100,
    },
    formeView: {
        borderRadius: 40,
        height: heightScreen * 5 / 100,
        width: widthScreen * 20 / 100,
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
    },
    mensuration: {
        borderRadius: 40,
        height: heightScreen * 5 / 100,
        width: widthScreen * 20 / 100,
        borderWidth: 1,
        display: 'flex',
    },
    emoji: {
        resizeMode: 'contain',
        height: '90%',
        width: '90%',
        tintColor: "#EFD907",
        flex: 1,
    },
    heart: {
        resizeMode: 'contain',
        height: '90%',
        width: '90%',
        tintColor: 'green',
        flex: 1,
    },
    formeJournaliere: {
        height: heightScreen * 55 / 100,
        width: widthScreen * 94 / 100,
        left: widthScreen * 3 / 100,
    },
    titreFormeJournaliere: {
        top: heightScreen * 4 / 100,
        fontSize: 20,
    },
    week: {
        flexDirection: 'row',
        top: heightScreen * 5 / 100,
        justifyContent: 'space-around',
    },
    dayText: {
        color: 'grey',
    },
    formeToday: {
        flexDirection: 'row',
        top: heightScreen * 2 / 100,
    },
    viewFormeToday: {
        height: heightScreen * 4 / 100,
        width: widthScreen * 20 / 100,
    },
    textFormeToday: {
        textAlign: 'center',
        color: 'white',
        top: 5,
    },
    textIMC: {
        textAlign: 'center',
        color: 'white',
    },
    arrow: {
        height: 20,
        width: 20,
    },
    containerForme: {
        flexDirection: 'column',
        height: heightScreen * 6 / 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusBar: {
        borderWidth: 1,
        backgroundColor: '#e7e7e7',
        top: heightScreen * 4 / 100,
        height: 15,
        width: widthScreen * IMC / 40 - IMC * 6 / 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    textBoxIMC: {
        fontSize: 12,
        color: 'white',
    },
    IMCView: {
        borderTopWidth: 0.75,
        borderColor: 'grey',
        left: widthScreen * 3 / 100,
        width: widthScreen * 94 / 100,
        height: heightScreen * 20 / 100,
    },
    boiteIMC: {
        flexDirection: 'column',
        height: heightScreen * 6 / 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    IMC: {
        height: widthScreen * 20 / 100,
        width: widthScreen * 20 / 100,
        borderRadius: 100, borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'grey',
    },
    readinessView: {
        top: heightScreen * 8 / 100,
        height: heightScreen * 30 / 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

