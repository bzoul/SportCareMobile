import React from 'react'
import {Text, ScrollView, View , StyleSheet } from 'react-native'
import BottomBar from '../components/blocs/Bottombar';

export default class Test extends React.Component {
    render() {
        return (
            <View>
            <ScrollView style={styles.main_container}>

                    
            </ScrollView>
            <View><BottomBar navigation={this.props.navigation}/></View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    main_container: {
        width:"100%",
        backgroundColor: "green",
        height:"100%"
    },
    

})

