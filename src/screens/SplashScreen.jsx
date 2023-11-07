import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 3000);
  }, [navigation]);

  return (
    <View>
      <Text>Splash123</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
