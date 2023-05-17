import React, {useEffect, useState} from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
const CameraCpmponent = () => {
  const [cameraPermission, setCameraPermission] = useState();
  console.log('camera', devices);

  useEffect(() => {
    (async () => {
      const cameraPermissionStatus = await Camera.requestCameraPermission();
      setCameraPermission(cameraPermissionStatus);
    })();
  }, []);
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;
  const renderDetectorContent = () => {
    console.log(cameraPermission);
    console.log(device);
    console.log(devices);
    if (devices && cameraPermission === 'authorized') {
      return <Camera  style={StyleSheet.absoluteFill} device={device} isActive={true} />;
    }
    return (
      <View>
        <Text>NO CAMERA</Text>
      </View>
    );
  };
  return (
    <View>
      <SafeAreaView>
        <View>
          <Text>React Native Image Detector</Text>
        </View>
      </SafeAreaView>

      <View>
        <Text>RRWelcome To React-Native-Vision-Camera Tutorial</Text>
      </View>

      {renderDetectorContent()}
    </View>
  );
};

export default CameraCpmponent;
