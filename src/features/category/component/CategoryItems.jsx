import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Colors from 'utils/Colors';

//icons
import Feather from 'react-native-vector-icons/Feather';

const CategoryItems = ({type, thumImage}) => {
  return (
    <View className=" w-44  px-8 py-6 items-center bg-white  rounded-xl  ">
      <Feather name={'box'} size={32} color={Colors.lightTheme.primary.main} />
      <Text className="pt-4 text-sm uppercase font-bold text-gray-500 tracking-wide">
        {type}
      </Text>
    </View>
  );
};

export default CategoryItems;

const styles = StyleSheet.create({});
