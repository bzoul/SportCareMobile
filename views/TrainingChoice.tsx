/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, FlatList, View, StyleSheet, Dimensions, Pressable, Image, TouchableOpacity } from 'react-native';
import BottomBar from '../components/blocs/Bottombar';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const DATA = [
    {
        id:1,
        path: require('../pics/running_sport.jpg'),
        text: 'Course à pied',
    },
    {
        id:2,
        path: require('../pics/velo_sport.jpg'),
        text: 'Cyclisme',
    },
    {
        id:3,
        path: require('../pics/natation_sport.jpg'),
        text: 'Natation',
    },
    {
        id:4,
        path: require('../pics/muscu_sport.jpg'),
        text: 'Musculation',
    },
]

const SportImage = ({ item, onPress}) => (  
    <TouchableOpacity
        style={styles.touchableSport}
        onPress={onPress}>
        <Image style={styles.imageSport} source={item.path} />
        <Text style={styles.textSport}>
            {item.text}
        </Text>
    </TouchableOpacity>
);

export default class TrainingChoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {         
        return (
            <>
                <View style={styles.header}>
                    <TouchableOpacity style={{top: heightScreen * 5 / 100, left: widthScreen * 5 / 100,
                            height: 35, width: 35}} onPress={() => {
                        this.props.navigation.navigate('Training')
                    }}>
                        <Image style={styles.arrow} source={require("../icon/down-arrow.png")} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>
                        Séléctionnez une activité
                    </Text>

                </View>
                <View style={styles.main_container}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <SportImage item={item} onPress={() => {
                            console.log("yes")
                        }}
                        />}
                        keyExtractor={(item) => item.id}
                    />
                </View>



                <BottomBar navigation={this.props.navigation} />
            </>
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
    touchableSport: {
        height: heightScreen * 15 / 100,
        marginHorizontal: widthScreen * 15 / 100,
        marginVertical : heightScreen * 1 / 100,
        alignItems:'center',
    },
    imageSport: {
        resizeMode: 'contain',
        height: heightScreen * 15 / 100,
        
    },
    textSport:{
        color:'white',
        top: heightScreen * -3 / 100,
        left : widthScreen * -12 / 100,
        backgroundColor : 'rgba(0,0,0,0.4)',
        textAlign:'left',
    },
});

