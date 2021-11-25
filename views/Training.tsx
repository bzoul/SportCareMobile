/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, ScrollView, View, StyleSheet, Dimensions, TouchableOpacity, Image, Alert  } from 'react-native';
import BottomBar from '../components/blocs/Bottombar';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Table, Row, Rows } from 'react-native-table-component';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    today: 'Aujourd\'hui',
};
LocaleConfig.defaultLocale = 'fr';

export default class Training extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //tableHead: ['Head', 'Head2'],
            tableData: [
                ['Temps d\'effort', '1h 25min'],
                ['Intensité de l\'effort', '4/5'],
                ['Fatigue ressentie', '3/5'],
                ['Readiness', '74%'],
            ],
        }
    }
    render() {
        return (
            <>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>
                        Vos séances
                    </Text>
                    <TouchableOpacity style={{left: widthScreen * 45 / 100,
                    top: heightScreen * 1 / 100, width: 60, height: 60}} onPress={() => {
                        this.props.navigation.navigate('TrainingChoice');
                    }}>
                        <Image style={styles.plus} source={require("../icon/plus.png")} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: "auto", maxHeight: heightScreen, flex: 1 }}>
                    <ScrollView style={styles.main_container}>
                        <View style={styles.calendarView}>
                            <Calendar
                                style={styles.calendar}
                                current={Date()}
                            />
                        </View>
                        <View style={styles.textView}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                                Séance du 04/11/2021 :
                            </Text>
                            <Table borderStyle={{ borderWidth: 2, borderColor: '#0094ff' }}>
                                <Rows data={this.state.tableData} textStyle={styles.data} />
                            </Table>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                                Commentaires :
                            </Text>
                            <Text>
                                Grosse séance wola, que de la transpi du bibi et la veine je l'ai vu en sah.
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                                Le mot du coach :
                            </Text>
                            <Text>
                                G vu tu t'es donné mon salaud. Par contre reclaque moi lcul pendant la séance jte jure t mort.
                            </Text>
                        </View>
                    </ScrollView>
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
    header: {
        width: widthScreen,
        height: heightScreen * 10 / 100,
        flexDirection: 'row',
        backgroundColor: '#E0E0E0',
    },
    plus: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        position: 'absolute',
    },
    textHeader: {
        fontSize: 26,
        fontWeight: 'bold',
        left: widthScreen * 3 / 100,
        textAlignVertical: 'center',
    },
    calendarView: {
        left: widthScreen * 3 / 100,
        width: widthScreen * 94 / 100,
        height: heightScreen * 47 / 100,
        top: heightScreen * 3 / 100,
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
    },
    calendar: {
        borderWidth: 1,
        borderColor: 'gray',
        width: widthScreen * 85 / 100,
    },
    textView: {
        left: widthScreen * 3 / 100,
        top: heightScreen * 6 / 100,
        width: widthScreen * 94 / 100,
        height: heightScreen * 30 / 100,
    },
    data: {
        textAlign: 'center',
    },

});

