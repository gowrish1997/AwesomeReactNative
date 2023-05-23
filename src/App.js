/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import {HomeScreen} from './Screens/Home';
import Restaurant from './Screens/Restaurant';
import { store } from '../store';
import { Provider } from 'react-redux'

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Homescreen" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    backgroundColor: 'yellow',
    fontSize: 40,
    marginTop: 10,
    padding: 20,
  },
});

export default App;
