import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import sanityClient from '../sanity';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    sanityClient.fetch(`*[_type=='category']`).then(data => {
      setCategories(data);
    });
  }, []);
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 10,
        marginTop: 10,
      }}
      pagingEnabled={false}>
      {categories.map(category => {
        return (
          <CategoriesCard
            key={category._id}
            id={category._id}
            name={category.name}
            imgUrl={category.image}
          />
        );
      })}
    </ScrollView>
  );
};

export default Categories;
