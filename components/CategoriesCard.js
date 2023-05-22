import {View, Text, Image} from 'react-native';
import React from 'react';
import {urlFor} from '../sanity';

const CategoriesCard = props => {
  return (
    <View>
      <Image
        source={{uri: urlFor(props.imgUrl).url()}}
        className="h-[100px] w-[100px] mr-[10px] rounded-lg "
      />
      <Text className="absolute bottom-[10px] left-[10px] text-[#ffffff] font-[600] "  >{props.name}</Text>
    </View>
  );
};

export default CategoriesCard;
