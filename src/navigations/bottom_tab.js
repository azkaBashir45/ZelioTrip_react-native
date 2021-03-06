import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnBoarding from "./../screens/OnBoarding";
import { images } from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"red" }}>
            <Text>Home!</Text>
        </View>
    );
}
function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:"yellow"}}>
            <Text>Settings!</Text>
        </View>
    );
}
const Tab = createBottomTabNavigator();
export default function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "black",
                headerShown:false,
                tabBarStyle: {
                    // marginTop: 10
                }
            }} >
            <Tab.Screen options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={22} />
                )
            }} name="Home" component={OnBoarding} />
            <Tab.Screen options={{
                tabBarIcon: () => (
                    <Icon name="fitness-sharp" color="red" size={22} />
                )
            }} name="Favourite" component={HomeScreen} />
            <Tab.Screen options={{
                tabBarIcon: () => (
                    <Icon name="people" color="red" size={22} />
                )
            }} name="Profile" component={SettingsScreen} />
        </Tab.Navigator>

    );
}