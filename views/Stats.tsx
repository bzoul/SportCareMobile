/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomBar from '../components/blocs/Bottombar';
import TopBarNavigator from '../components/blocs/Topbar';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;


export default class Stats extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>
                        Vos Statistiques
                    </Text>
                </View>
                <SafeAreaProvider>
                    <TopBarNavigator/>
                </SafeAreaProvider>
                <BottomBar navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        width: "100%",
        backgroundColor: "white",
        height: "100%",
    },
    header: {
        width: widthScreen,
        height: heightScreen * 10 / 100,
        flexDirection: 'row',
        backgroundColor: '#E0E0E0',
    },
    textHeader: {
        fontSize: 26,
        fontWeight: 'bold',
        left: widthScreen * 3 / 100,
        textAlignVertical: 'center',
    },
    body: {

    },
});

