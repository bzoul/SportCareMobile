import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
            component={Logins}
          />
          <Stack.Screen
            name="Wkiosque"
            component={Wkiosque}
          />
          <Stack.Screen
            name="Dlviews"
            component={Dlviews}
          />
          <Stack.Screen
            name="Webviews"
            component={Webv}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default App;

