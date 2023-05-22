import {ScrollView, Text, Image, View, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {urlFor} from '../../sanity';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from 'react-native-heroicons/outline';
import {StarIcon} from 'react-native-heroicons/solid';
import {MapPinIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';

const Restaurant = () => {
  const navigation = useNavigation();

  const {
    params: {
      id,
      imgURL,
      title,
      rating,
      genre,
      address,
      short_desc,
      dishes,
      long,
      lang,
    },
  } = useRoute();
  return (
    <ScrollView>
      <Image
        source={{uri: urlFor(imgURL).url()}}
        className="w-full h-56 p-4 bg-gray-300 "
      />
      <TouchableOpacity
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full "
        onPress={() => {
          navigation.goBack();
        }}>
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>

      <View className="bg-white">
        <View className="px-4 pt-4 ">
          <Text className="text-3xl font-bold ">{title}</Text>
          <View className="flex flex-row justify-start items-start gap-x-[5px] ">
            <View className="flex flex-row justify-start items-center gap-x-[5px] ">
              <StarIcon color="green" size={22} opacity={0.5} />
              <Text className="text-green-500 ">{rating}</Text>
              <Text className="text-xs text-gray-500 ml-[10px] ">{genre}</Text>
            </View>
            <View className="flex flex-row justify-start items-start gap-x-[5px] ">
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className=" overflow-hidden whitespace-nowrap text-ellipsis text-xs text-gray-500 ">
                Near by {address}
              </Text>
            </View>
          </View>
          <Text className="mt-2 pb-4 text-gray-500 text-[14px]">
            {short_desc}
          </Text>
        </View>
        <TouchableOpacity className="flex flex-row justify-start items-center space-x-[5px] p-4 border-y-[1px] border-gray-300   ">
          <QuestionMarkCircleIcon color="gray" size={20} opacity={0.6} />
          <Text className="pl-2 flex-1 text-md font-bold ">
            {' '}
            Have a food allergy
          </Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Restaurant;
