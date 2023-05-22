import {useEffect, useState} from 'react';
import sanityClient from '../../sanity';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import {ChevronDownIcon} from 'react-native-heroicons/solid';
import Categories from '../../components/Categories';
import FeaturedRow from '../../components/FeaturedRow';

export function HomeScreen() {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=='featured'] {
      ...,
        restaurants[]->{
      ...,
      dishes[]->{
      ...,}
      }
      }`,
      )
      .then(data => {
        setFeatured(data);
      });
  }, []);

  return (
    <ScrollView className="pb-[5px] ">
      <View className="bg-white">
        <View className=" p-2 flex flex-row items-center">
          <View className="flex-row justify-start flex-1 items-center gap-x-[5px] ">
            <Image
              source={{uri: 'https://links.papareact.com/wru'}}
              className="h-7 w-7 rounded-full bg-gray-400 p-4 "
            />
            <View>
              <Text className="font bold text-gray-400 text-x5 ">
                Deliver Now !
              </Text>
              <View className="flex flex-row items-end ">
                <Text className="font-bold text-xl">Current location</Text>
                <ChevronDownIcon size={20} color="#00CCBB" />
              </View>
            </View>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>
        <View className="flex flex-row items-center space-x-2 pb-2 mx-1 px-2 ">
          <View className="bg-gray-300  flex flex-row items-center flex-1 px-3 rounded-full ">
            <MagnifyingGlassIcon size={20} color="gray" />
            <TextInput placeholder="Search here" keyboardType="default" />
          </View>

          <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
        </View>
      </View>

      <Categories />
      {featured.map(category => {
        return (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        );
      })}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
  },
});
