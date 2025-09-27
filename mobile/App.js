import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import { useFonts } from "expo-font";

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    "MontserratLightItalic": require("./assets/fonts/Montserrat-LightItalic.ttf"),
    "MontserratRegular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "MontserratMedium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "MontserratBold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Authorization" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}