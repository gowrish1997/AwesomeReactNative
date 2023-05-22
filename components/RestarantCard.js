import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StarIcon} from 'react-native-heroicons/solid';
import {MapPinIcon} from 'react-native-heroicons/outline';
import React from 'react';
import {urlFor} from '../sanity';

const RestarantCard = props => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow w-64 ">
      <Image
        source={{uri: urlFor(props.imgURL).url()}}
        className="h-36 w-full rounded-lg"
      />
      <View className="box-border px-3 pb-4">
        <Text className="font-bold text-lg pt-2 ">{props.title}</Text>
        <View className="flex flex-row justify-start items-center  ">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-green-500 ">{props.rating}</Text>
          <Text className="text-xs text-gray-500 ml-[10px] ">
            {props.genre}
          </Text>
        </View>
        <View className="flex flex-row justify-start items-center gap-x-[5px] ">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500 whitespace-break-spaces ">
            Near by {props.address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestarantCard;
