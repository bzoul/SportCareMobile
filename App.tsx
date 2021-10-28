/* eslint-disable prettier/prettier */
import React from 'react';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import Chat from './views/Chat';
import Profil from './views/Profil';
import Stats from './views/Stats';
import Electrocardiogramme from './views/Electrocardiogramme';

import Sensor from './views/Sensor';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
        }}>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
          />
          <Stack.Screen
            name="Electrocardiogramme"
            component={Electrocardiogramme}
          />
          <Stack.Screen
            name="Stats"
            component={Stats}
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
