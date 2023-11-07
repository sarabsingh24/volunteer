import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//component
import BottomTab from './BottomTab';
import SplashScreen from 'screens/SplashScreen';
import MainScreens from 'screens/MainScreens';
import ProfileScreen from 'screens/side-screen/ProfileScreen';

const Stack = createNativeStackNavigator();

const ScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Main" component={MainScreens} />
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}

      {/* <Stack.Screen name="BottomTab" component={BottomTab} /> */}
    </Stack.Navigator>
  );
};

export default ScreenNavigation;
