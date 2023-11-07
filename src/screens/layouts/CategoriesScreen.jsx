import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//component
import Category from 'features/category/component/Category';

const CategoriesScreen = () => {
  console.log('category');
  return (
    <View className="h-full bg-blue-100 ">
      <Category />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  contaner: {
    backgroundColor: 'blue',
  },
});
