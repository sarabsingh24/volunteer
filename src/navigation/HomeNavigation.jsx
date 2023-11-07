import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Colors from 'utils/Colors';
import {useSelector} from 'react-redux';

//component

import HomeScreen from 'screens/layouts/HomeScreen';
import CategoriesScreen from 'screens/layouts/CategoriesScreen';
import MapScreen from 'screens/layouts/MapScreen';
import MenuScreen from 'screens/layouts/MenuScreens';

//icons
import Feather from 'react-native-vector-icons/Feather';
const Tab = createBottomTabNavigator();

const bottomTabs = [
  {name: 'Home', icon: 'home', component: HomeScreen},
  {name: 'CategoryScreen', icon: 'layers', component: CategoriesScreen},
  {name: 'MapScreen', icon: 'map-pin', component: MapScreen},
  {name: 'MenuScreen', icon: 'menu', component: MenuScreen},
];

const HomeNavigation = () => {
  const {IsAvailable} = useSelector(state => state.users);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: IsAvailable ? 10 : -80,
          margin: 18,
          borderRadius: 40,
        },
      }}
      activeColor={Colors.lightTheme.primary.main}
      inactiveColor={Colors.lightTheme.secondry.main}>
      {bottomTabs.map((tab, index) => (
        <Tab.Screen
          name={tab.name}
          key={index}
          component={tab.component}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Feather
                name={tab.icon}
                size={20}
                style={focused ? styles.iconActive : styles.iconInactive}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({
  iconActive: {
    color: Colors.lightTheme.primary.main,
  },
  iconInactive: {
    color: Colors.lightTheme.secondry.main,
  },
});
