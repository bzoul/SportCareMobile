import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './views/Login';
import Register from './views/Register';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer >
        <Stack.Navigator 
          screenOptions={{
            headerShown: false
        }}>
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Register"
            component={Register}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default App;

