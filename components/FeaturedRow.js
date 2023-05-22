import {View, Text, ScrollView} from 'react-native';
import React,{useState,useEffect} from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/solid';
import RestarantCard from './RestarantCard';
import {useRef} from 'react';
import sanityClient from '../sanity';

const FeaturedRow = ({id, title, description}) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=='featured'  
        && _id==$id] {
      restaurants[]->{
      ...,
      dishes[]->,
      type->{
      name}
      }
       
      }`,{id},
      )
      .then(data => {
        console.log(data[0].restaurants)
        setRestaurants(data[0].restaurants)
      });
  }, []);

  const refScroll = useRef();
  const scrollToStartHandler = () => {
    console.log(refScroll);
  };
  return (
    <View className="px-4 mt-4 ">
      <View className="flex flex-row justify-between items-center">
        <Text className="font-bold text-lg ">{title}</Text>
        <ArrowRightIcon color="#00CCBB" onClick={scrollToStartHandler} />
      </View>
      <Text className="text-xs text-gray-500">{description}</Text>
      <ScrollView
        ref={refScroll}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginTop: 10}}
        pagingEnabled={false}>
          {restaurants.map((restaurant)=>{
            return  <RestarantCard
            key={restaurant._id}
            id={restaurant._id}
            imgURL={restaurant.image}
            title={restaurant.title}
            rating={restaurant.rating}
            genre={restaurant.type.name}
            address={restaurant.address}
            short_desc={restaurant.short_description}
            dishes={[]}
            long={restaurant.long}
            lang={restaurant.lat}
          />
          })}
       
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
