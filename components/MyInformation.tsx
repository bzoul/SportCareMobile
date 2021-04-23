import React from 'react'
import {Text, TextInput, View , StyleSheet } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RNPickerSelect from 'react-native-picker-select';

const LogInput = () => {
    return (
        <View>
            <Text style={styles.titre}> My Informations</Text>
            <View style={styles.crea_container}>
                
                <View style={styles.text_placement}>
                    <TextInput
                    style={styles.input_text}
                    placeholder="Name"
                    placeholderTextColor='grey'
                    />
                    <TextInput
                    style={styles.input_text}
                    placeholder= "Firstname"
                    placeholderTextColor='grey'
                    />
                </View>
                <View style={styles.text_placement}>
                    <TextInput
                    style={styles.input_text}
                    placeholder="MM/DD/AAAA"
                    placeholderTextColor='grey'
                    />
                    <Picker style={styles.picker_text}>
                        <Picker.Item label="M" value="M"/>
                        <Picker.Item label="Mme" value="Mme" />
                        <Picker.Item label="Other" value="none" />
                    </Picker>
                </View>
                <TextInput
                    style={[styles.input_text, styles.width]}
                    placeholder="@ email"
                    placeholderTextColor='grey'
                    />
            </View>
        </View>
    );
    }

const styles = StyleSheet.create ({
    crea_container: {
        width:"100%",
        justifyContent:'center',
        alignItems:'center'
    },
    input_text: {
        width:'45%',
        height:40,
        borderWidth:2,
        marginBottom:10,
        borderColor: 'grey',
        backgroundColor:'white',
        borderRadius: 10
    },
    text_placement: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },picker_text: {
        width:'45%',
        height:40,
        borderWidth:2,
        marginBottom:1,
        borderColor: 'green',
        backgroundColor:'red',
        borderRadius: 1,
        color:'white'
    },
    width: {
        width:"80%"
    },
    titre: {
        color:"white",
        fontSize:20,
        marginLeft:30,
        marginBottom:10
    }

})

export default LogInput;