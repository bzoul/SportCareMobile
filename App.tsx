/* eslint-disable prettier/prettier */
import React from 'react';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import Chat from './views/Chat';
import Profil from './views/Profil';
import Stats from './views/Stats';
import Electrocardiogramme from './views/Electrocardiogramme';
import Training from './views/Training';
import TrainingChoice from './views/TrainingChoice';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from './config.json';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TrainingResume from './views/TrainingResume';
import Parametre from './views/Parametre';


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
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
          />
          <Stack.Screen
            name="Parametre"
            component={Parametre}
          />
          <Stack.Screen
            name="TrainingResume"
            component={TrainingResume}
          />
          <Stack.Screen
            name="TrainingChoice"
            component={TrainingChoice}
          />
          <Stack.Screen
            name="Training"
            component={Training}
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
