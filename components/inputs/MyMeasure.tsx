import React from 'react'
import {Text, TextInput, View , StyleSheet } from 'react-native'
import HoriInput from '../inputs/HorizontalInput';

export default class MyMeasure extends React.Component {
    render() {
        return (
            <View>
                
                <View style={styles.crea_container}>
                    <Text style={styles.titre}> My measure </Text>
                    <View style={styles.text_placement}>
                        <HoriInput place1= 'Cm' place2='Kg'/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    crea_container: {
        fontSize:25,
        color:"white",
        borderColor:"white",
        textAlign:"center",
        marginLeft:"5%",
        marginRight:"5%",
        paddingBottom:'2%',
        paddingTop: '2%'  
    },
    text_placement: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    titre: {
        color:"white",
        fontSize:20,
        marginLeft:30,
        
    }

})

