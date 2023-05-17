import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {ChevronDownIcon} from 'react-native-heroicons/solid';
import {
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import Categories from '../../components/Categories';
import FeaturedRow from '../../components/FeaturedRow';

export function HomeScreen({navigation, route}) {
  useEffect(() => {
    createChannelHandler();
  }, []);

  const [name, setName] = useState('');
  const textChangeHandler = async value => {
    console.log(value);
    setName(value);
    await AsyncStorage.setItem('name', name);
  };
  const createChannelHandler = () => {
    PushNotification?.createChannel({
      channelId: 'test-channel',
      channelName: 'Test channel',
    });
  };
  return (
    <SafeAreaView className="pb-[5px] ">
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

      <Categories></Categories>
      <FeaturedRow
        id="124"
        title="Featured"
        description="Paid placements for out parteners"
      />
      <FeaturedRow
        id="456"
        title="Tasty discounts"
        description="Paid placements for out parteners"
      />
      <FeaturedRow
        id="789"
        title="Offers near you"
        description="Why not supports your local restuarant tonight"
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
  },
});
