import React from 'react'
import {Text, TextInput, View , StyleSheet } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RNPickerSelect from 'react-native-picker-select';

export default class LogInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleName = (e:string) => {
        this.props.updateName(e)
    }

    handleFirstname = (e:string) => {
        this.props.updateFirstname(e)
    }

    handleEmail = (e:string) => {
        this.props.updateEmail(e)
    }

    //lance la fonction updatePassword du composant Login
    handleBirthday = (e:string) => {
        this.props.updateBirthday(e)
    }

    handleCivility = (e:string) => {
        this.props.updateCivility(e)
    }

    render() {
        return (
            <View>
                <Text style={styles.titre}> My Informations</Text>
                <View style={styles.crea_container}>
                    
                    <View style={styles.text_placement}>
                        <TextInput
                        style={styles.input_text}
                        placeholder="Name"
                        placeholderTextColor='grey'
                        onChangeText={text => this.handleName(text)}
                        color="black"
                        />
                        <TextInput
                        style={styles.input_text}
                        placeholder= "Firstname"
                        placeholderTextColor='grey'
                        onChangeText={text => this.handleFirstname(text)}
                        color="black"
                        />
                    </View>
                    <View style={styles.text_placement}>
                        <TextInput
                        style={styles.input_text}
                        placeholder="Birthday"
                        placeholderTextColor='grey'
                        onChangeText={text => this.handleBirthday(text)}
                        color="black"
                        />
                        <TextInput
                        style={styles.input_text}
                        placeholder= "Civility"
                        placeholderTextColor='grey'
                        onChangeText={text => this.handleCivility(text)}
                        color="black"
                        />
                    </View>
                    <TextInput
                        style={[styles.input_text, styles.width]}
                        placeholder="@ email"
                        placeholderTextColor='grey'
                        onChangeText={text => this.handleEmail(text)}
                        color="black"
                    />
                </View>
            </View>
        );
    }
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
        width:"75%"
    },
    titre: {
        color:"white",
        fontSize:20,
        marginLeft:30,
        marginBottom:10
    },
    bloc_container:{
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
    }

})

