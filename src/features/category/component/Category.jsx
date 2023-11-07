import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

//reducer
import {useSelector, useDispatch} from 'react-redux';
import {fetchCategoryAsync} from 'features/category/categorySlice';

//components
import CategoryItems from './CategoryItems';

const Category = () => {
  const {categories, message} = useSelector(state => state.category);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchCategoryAsync());
  }, [dispatch]);

  return (
    <View className="flex p-2 gap-3 h-full flex-row flex-wrap justify-around ">
      {categories.map((item, ind) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.page)}
          key={ind}>
          <CategoryItems type={item.type} thumImage={item.thumImage} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
