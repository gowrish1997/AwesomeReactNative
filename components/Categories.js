import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CategoriesCard from './CategoriesCard';
const Categories = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 10, marginTop: 10}}
      pagingEnabled={false}>
      <CategoriesCard />
      <CategoriesCard />
      <CategoriesCard />
      <CategoriesCard />
      <CategoriesCard />
    </ScrollView>
  );
};

export default Categories;
