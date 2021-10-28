/* eslint-disable no-return-assign */
/* eslint-disable space-infix-ops */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {Text, ScrollView, View , StyleSheet,Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color, withDecay } from 'react-native-reanimated';
import BottomBar from '../components/blocs/Bottombar';  
import Day from '../components/blocs/progressCircle';
import Config from "../../Config.json";

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

export default class Electrocardiogramme extends React.Component {
    render() {
        return (
            <>
                <ScrollView style={styles.main_container}>
                    <View style={styles.header}>
                        <Image style={styles.heart} source={require("../icon/like.png")}/>
                        <View style={styles.formedujour}>
                            <Text style={{textAlign:'center'}}>
                                Forme du jour
                            </Text>
                            <View style={styles.viewEmoji}>
                                <Image style={styles.emoji} source={require("../icon/emoji-5.png")}/>
                                <Image style={styles.emoji} source={require("../icon/emoji-4.png")}/>
                                <Image style={styles.emoji} source={require("../icon/emoji-3.png")}/>
                                <Image style={styles.emoji} source={require("../icon/emoji-2.png")}/>
                                <Image style={styles.emoji} source={require("../icon/emoji-1.png")}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bpmView}>
                                <Day textFontWeight = "bold" textFontColor= "grey" ringBgColor="#E0E0E0" textFontSize = {30}
                                ringColor={Config.AppColor.Second} percent= "50" text="yes" radius={100} bgRingWidth={14} bigone = {true}/>
                            </View>
                </ScrollView>
                <View><BottomBar navigation={this.props.navigation}/></View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        width:"100%",
        backgroundColor: "white",
        height:"100%",
        borderWidth:1,
    },
    heart:{
        resizeMode:'contain',
        height: 35,
        width: 35,
        tintColor: 'grey',
        left: widthScreen * 80 / 100,
    },
    header:{
        left:  widthScreen * 3 / 100,
        width: widthScreen * 94 / 100,
        borderWidth:1,
        top:heightScreen * 3 / 100,
        height: heightScreen * 18 / 100,
    },
    formedujour:{
        width: widthScreen * 94 / 100,
        alignItems :'center',
    },
    viewEmoji:{
        flexDirection:'row',
        justifyContent: 'space-around',
        height:heightScreen * 5 / 100,
        width:widthScreen * 55 / 100,
        top:5,
    },
    emoji:{
        height:30,
        width:30,
        resizeMode:'contain',
        tintColor:'grey', 
    },
    bpmView:{
        top: heightScreen * 8 / 100,
        height: heightScreen * 40 / 100,
        alignItems :'center',
    }
})