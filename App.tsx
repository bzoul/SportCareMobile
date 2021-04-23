import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './views/Login'
import Register from "./views/Register"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      <Register/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
