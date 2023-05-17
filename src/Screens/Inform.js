import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button, Text, View,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import {useEffect, useState} from 'react';

import PushNotification from 'react-native-push-notification';

const createNotificationHandler = name => {
  PushNotification.localNotification({
    channelId: 'test-channel',
    title: `you clicked ${name} `,
    message: `this is important message from ${name}`,
  });
};

const Tab = createBottomTabNavigator();
function Instagram({route}) {
  return (
    <View>
      <TouchableOpacity onPress={() => createNotificationHandler('instagram')}>
        <Text>Iam instagram page</Text>
      </TouchableOpacity>
    </View>
  );
}

function Facebook({route}) {
  return (
    <View>
      <TouchableOpacity onPress={() => createNotificationHandler('facebook')}>
        <Text>Iam facebook page</Text>
      </TouchableOpacity>
    </View>
  );
}
function Twitter({route}) {
  return (
    <View>
      <TouchableOpacity onPress={() => createNotificationHandler('twitter')}>
        <Text>Iam Twitter page</Text>
      </TouchableOpacity>
    </View>
  );
}
export function ScreenA({navigation, route}) {
  console.log('scrren a');
  const [name, setName] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('name')
      .then(value => {
        setName(value);
      })
      .catch(error => {
        console.log(error.message);
      });
    return () => {
      console.log('clear');
    };
  }, []);
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Text>hi {name}</Text>
      <Button
        title="Update the title"
        onPress={() =>
          navigation.setOptions({title: 'another name for screen A'})
        }
      />
      <Button
        title="got to screen b"
        onPress={() => {
          navigation.navigate('screen_b', {
            itemId: 'Iam screen a',
            otherParam: 'do something is screen A',
          });
        }}
      />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({size, font, color}) => {
            let name = '';
            if (route.name == 'Instagram') {
              name = 'instagram';
            } else if (route.name == 'Twitter') {
              name = 'twitter';
            } else {
              name = 'facebook';
            }
            return <FontAwesome5 name={name} color={color} size={size} />;
          },
          tabBarBadge: 2,
        })}>
        <Tab.Screen
          name="Instagram"
          component={Instagram}
          options={{
            headerShown: false,
            title: 'Instagram',
            tabBarActiveBackgroundColor: 'pink',
          }}
        />
        <Tab.Screen
          name="Facebook"
          component={Facebook}
          options={{
            headerShown: false,
            title: 'Facebook',
            tabBarActiveBackgroundColor: 'blue',
          }}
        />
        <Tab.Screen
          name="Twitter"
          component={Twitter}
          options={{
            headerShown: false,
            title: 'Twitter',
            tabBarActiveBackgroundColor: 'blue',
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
