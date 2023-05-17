import {useEffect} from 'react';
import {View, Text, Alert, BackHandler, Button} from 'react-native';

const Dummy = ({navigation, route}) => {
  useEffect(() => {
    console.log('inside userefft');
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  handleBackButton = () => {
    navigation.goBack(); // Go back to the previous screen
    return true; // Prevent default back button behavior
  };
  return (
    <View>
      <Button title="press here" onPress={handleBackButton}></Button>
    </View>
  );
};

export default Dummy;
