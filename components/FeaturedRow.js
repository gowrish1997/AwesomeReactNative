import {View, Text} from 'react-native';
import React from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/solid';

const FeaturedRow = ({id, title, description}) => {
  return (
    <View className="px-4 mt-4 ">
      <View className="flex flex-row justify-between items-center">
        <Text className="font-bold text-lg ">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500">{description}</Text>
    </View>
  );
};

export default FeaturedRow;
