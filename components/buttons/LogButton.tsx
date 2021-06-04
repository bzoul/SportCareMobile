import React from 'react'

import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";


const LogButton = ({ onPress, title, backgroundColor }) => (
    <TouchableOpacity onPress={onPress} style={[
        styles.appButtonContainer,
        backgroundColor && { backgroundColor }
      ]}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });

export default LogButton