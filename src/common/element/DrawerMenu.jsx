import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from 'screens/layouts/HomeScreen';

const Drawer = createDrawerNavigator();
const DrawerMenu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({});
