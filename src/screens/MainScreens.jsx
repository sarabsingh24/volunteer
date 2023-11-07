import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
  useAnimatedStyle,
} from '@react-navigation/drawer';

//component
import CommonTabNavigation2 from 'navigation/CommonTabNavigation';
import HomeScreen from 'screens/layouts/HomeScreen';
import ProfileScreen from 'screens/side-screen/ProfileScreen';
import SideScreen from 'screens/side-screen/SideScreen';
import HomeNavigation from 'navigation/HomeNavigation';

const Drawer = createDrawerNavigator();

const MainScreens = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}
      drawerContent={props => <SideScreen {...props} />}>
      <Drawer.Screen name="HomeNavigation" component={HomeNavigation} />
    </Drawer.Navigator>
  );
};

export default MainScreens;

const styles = StyleSheet.create({});
