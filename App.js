import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginIntro from "./src/screens/LoginIntro.js";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import ForgotPassword from "./src/screens/ForgotPassword";
import OnBoarding from "./src/screens/OnBoarding";
import Profile from "./src/screens/Profile";
import BottomTab from "./src/navigations/bottom_tab";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
        headerShown:false
      }}>
          {/* <Stack.Screen name="Profile" component={Profile}/> */}
        {/* <Stack.Screen name="Register" component={SignUp}/> */}
        <Stack.Screen options={{
         
        }} name="Bottom" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
