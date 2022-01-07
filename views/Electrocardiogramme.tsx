/* eslint-disable no-return-assign */
/* eslint-disable space-infix-ops */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { Text, ScrollView, View, StyleSheet, Image, Dimensions, TouchableOpacity, AsyncStorage } from 'react-native';
import BottomBar from '../components/blocs/Bottombar';
import Day from '../components/blocs/progressCircle';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';
import Config from '../config.json';
import Spinner from 'react-native-loading-spinner-overlay';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
var bpm = 57 * 100 / 120;
var bpmText = "57";

const chartData = {
    labels: [0, 10, 20, 30, 40, 50, 60, 70, 90, 100],
    datasets: [
        {
            data: [1.1, 1.15, 1.1, 1, 0.9, 0.85, 0.9, 1,
                1.1, 1.15, 1.1, 1, 0.9, 0.85, 0.9, 1,
                1.1, 1.15, 1.1, 1, 0.9, 0.85, 0.9, 1,
                1.1, 1.15, 1.1, 1, 0.9, 0.85, 0.9, 1,
                1.1, 1.15, 1.1, 1, 0.9, 0.85, 0.9, 1],
            color: (opacity = 1) => `rgba(62, 39, 35, ${opacity})`, // optional
            strokeWidth: 2, // optional
        },
    ],
    legend: ["RR(ms) / temps (s)"] // optional
};

const chartConfig = {
    backgroundGradientFrom: "#ECEFF1",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ECEFF1",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(62, 39, 35, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

interface State {
    navigation: any;
}

export default class Electrocardiogramme extends React.Component {

    constructor(props: State) {
        super(props);
        this.state = {
            token: null,
            userid: null,
            isloading: true,
        };
    }

    async componentDidMount() {
        await this.getData();
        await this.getAccountData();
    }
    getData = async () => {
        console.log("GETASYNCSTORAGE");
        try {
            const Token = await AsyncStorage.getItem('token');
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
            console.log("dans requete : " + this.state.token);
            console.log("dans requete : " + this.state.userid);
            await axios.get(
                `${Config.baseURL}/users/${this.state.userid}`, {
                headers: {
                    'Authorization': 'Bearer ' + json,
                }
            })
                .then((response) => {

                    if (response.status === 200) {
                        console.log(response.data);

                        this.setState({
                            isloading: false,
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
            <>
                {
                    this.state.isloading ?
                        <View style={styles.container}>
                            <Spinner
                                //visibility of Overlay Loading Spinner
                                visible={this.state.isloading}
                                //Text with the Spinner
                                textContent={'Loading...'}
                                //Text style of the Spinner Text
                                textStyle={styles.spinnerTextStyle}
                            />
                        </View> 
                        :
                        <View style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
                            <View style={styles.header}>
                                <View style={styles.entete}>
                                    <TouchableOpacity style={styles.touchableArrow} onPress={() => {
                                        this.props.navigation.navigate('Dashboard');
                                    }}>
                                        <Image style={styles.arrow} source={require("../icon/down-arrow.png")} />
                                    </TouchableOpacity>
                                    <Image style={styles.heart} source={require("../icon/like.png")} />
                                </View>

                                <View style={styles.formedujour}>
                                    <Text style={{ textAlign: 'center' }}>
                                        Forme du jour
                                    </Text>
                                    <View style={styles.viewEmoji}>
                                        <Image style={styles.emoji} source={require("../icon/emoji-5.png")} />
                                        <Image style={styles.emoji} source={require("../icon/emoji-4.png")} />
                                        <Image style={styles.emoji} source={require("../icon/emoji-3.png")} />
                                        <Image style={styles.emoji} source={require("../icon/emoji-2.png")} />
                                        <Image style={styles.emoji} source={require("../icon/emoji-1.png")} />
                                    </View>
                                </View>
                            </View>
                            <ScrollView>
                                <View style={styles.bpmView}>
                                    <Day textFontWeight="bold" textFontColor="black" ringBgColor="#E0E0E0" textFontSize={30}
                                        ringColor="#0094ff" percent={bpm} text={bpmText} radius={100} bgRingWidth={14} viewType="Electro" />
                                </View>
                                <View style={styles.chartView}>
                                    <LineChart
                                        data={chartData}
                                        width={widthScreen * 94 / 100}
                                        height={heightScreen * 23 / 100}
                                        chartConfig={chartConfig}
                                    />
                                </View>
                            </ScrollView>

                            <BottomBar navigation={this.props.navigation} />
                        </View>
                }
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 30,
        backgroundColor: '#ecf0f1',
        padding: 8,
      },
      spinnerTextStyle: {
        color: '#FFF',
      },
    main_container: {
        width: "100%",
        backgroundColor: "white",
        height: "100%",
    },
    entete: {
        width: widthScreen * 94 / 100,
        height: heightScreen * 4 / 100,
        flexDirection: 'row',
    },
    heart: {
        resizeMode: 'contain',
        height: 35,
        width: 35,
        tintColor: 'grey',
        left: widthScreen * 70 / 100,
    },
    arrow: {
        resizeMode: 'contain',
        height: 35,
        width: 35,
        tintColor: 'black',
        transform: [{ rotate: '90deg' }],
    },
    touchableArrow: {
        height: 35,
        width: 35,
        left: widthScreen * 5 / 100,
    },
    header: {
        left: widthScreen * 3 / 100,
        top: heightScreen * 3 / 100,
        height: heightScreen * 18 / 100,
    },
    formedujour: {
        top: heightScreen * 5 / 100,
        width: widthScreen * 94 / 100,
        alignItems: 'center',
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
    bpmView: {
        top: heightScreen * 6 / 100,
        height: heightScreen * 40 / 100,
        alignItems: 'center',
    },
    chartView: {
        borderWidth: 1,
        left: widthScreen * 3 / 100,
        width: widthScreen * 94 / 100,
        height: heightScreen * 28 / 100,
        alignContent: 'center',
    },
});
