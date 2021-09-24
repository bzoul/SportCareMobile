import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './views/Login';
import Register from './views/Register';
import Test from './views/Test';
import Chat from './views/Chat';
import Profil from './views/Profil';
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
            name="Test"
            component={Test}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Register"
            component={Register}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
          />
          <Stack.Screen
            name="Profil"
            component={Profil}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default App;

