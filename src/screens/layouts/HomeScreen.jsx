import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

//component
import Home from 'features/home/component/Home';

const HomeScreen = () => {
  console.log('home');
  return (
    <View className=" h-full bg-blue-100  ">
      <Home />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
