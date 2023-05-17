import {View, Text, Image} from 'react-native';
import React from 'react';

const CategoriesCard = () => {
  return (
    <View>
      <Image
        source={{uri: 'https://links.papareact.com/wru'}}
        className="h-[100px] w-[100px] "
      />
    </View>
  );
};

export default CategoriesCard;
