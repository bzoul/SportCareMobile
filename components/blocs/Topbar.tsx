/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LineChart } from 'react-native-chart-kit';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const Tab = createMaterialTopTabNavigator();

const chartData = {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 9, 10],
    datasets: [
        {
            data: [210, 300, 280, 410, 380, 420, 620, 800, 570, 590, 600, 400],
            color: (opacity = 1) => `rgba(62, 39, 35, ${opacity})`, // optional
            strokeWidth: 2, // optional
        },
    ],
    legend: ["RR(ms) / temps (s)"],// optional
};

const chartConfig = {
    backgroundGradientFrom: "#ECEFF1",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ECEFF1",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(62, 39, 35, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

function FCM() {
    return (
        <View style={{
            flex: 1,

            alignItems: 'center',
            backgroundColor: 'white',
        }}>
            <View style={{ top: heightScreen * 10 / 100 }}>
                <LineChart
                    data={chartData}
                    width={widthScreen * 94 / 100}
                    height={heightScreen * 23 / 100}
                    chartConfig={chartConfig}
                />
            </View>
            <View style={styles.scale}>
                <TouchableOpacity style={[styles.buttonScale, {backgroundColor : "#FCB170"}]}>
                    <Text>
                        Jour
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonScale}>
                    <Text>
                        Semaine
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonScale}>
                    <Text>
                        Mois
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function IMC() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'white',
        }}>
            <View style={{ top: heightScreen * 10 / 100 }}>
                <LineChart
                    data={chartData}
                    width={widthScreen * 94 / 100}
                    height={heightScreen * 23 / 100}
                    chartConfig={chartConfig}
                />
            </View>
            <View style={styles.scale}>
                <TouchableOpacity style={[styles.buttonScale, {backgroundColor : "#FCB170"}]}>
                    <Text>
                        Jour
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonScale}>
                    <Text>
                        Semaine
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonScale}>
                    <Text>
                        Mois
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function RMSSD() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'white',
        }}>
            <View style={{ top: heightScreen * 10 / 100 }}>
                <LineChart
                    data={chartData}
                    width={widthScreen * 94 / 100}
                    height={heightScreen * 23 / 100}
                    chartConfig={chartConfig}
                />
            </View>
            <View style={styles.scale}>
                <TouchableOpacity style={[styles.buttonScale, {backgroundColor : "#FCB170"}]}>
                    <Text>
                        Jour
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonScale}>
                    <Text>
                        Semaine
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonScale}>
                    <Text>
                        Mois
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="FCM"
            screenOptions={{
                tabBarActiveTintColor: "#0094ff",
                tabBarLabelStyle: { fontSize: 16 },
                tabBarStyle: { backgroundColor: 'white' },
            }}
        >
            <Tab.Screen
                name="IMC"
                component={IMC}
                options={{ tabBarLabel: 'IMC' }}
            />
            <Tab.Screen
                name="FCM"
                component={FCM}
                options={{ tabBarLabel: 'FCM' }}
            />
            <Tab.Screen
                name="RMSSD"
                component={RMSSD}
                options={{ tabBarLabel: 'RMSSD' }}
            />
        </Tab.Navigator>

    );
};

export default function TopBarNavigator() {
    return (
        <NavigationContainer
            independent
        >
            <MyTabs />
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    scale: {
        flexDirection: 'row',
        top: heightScreen * 20 / 100,
    },
    buttonScale: {
        paddingHorizontal: 5,
        borderWidth:1,
        borderRadius: 5,
    },
});