import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

import Video from 'react-native-video';

const CameraRecording = () => {
  const camera = useRef(null);

  const [cameraPermission, setCameraPermission] = useState();
  const [videoPath, setVideoPath] = useState('');

  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicroPhonePermission = await Camera.requestMicrophonePermission();
    setCameraPermission(newCameraPermission);
  };

  useEffect(() => {
    checkPermission();
  }, []);

  const device = useCameraDevice('back');

  const startRecordingHandeler = async () => {
    try {
      camera.current.startRecording({
        flash: 'on',
        onRecordingFinished: video => setVideoPath(video.path),
        onRecordingError: error => console.log(error),
      });
    } catch (e) {
      console.log(e);
    }
  };

  const stopRecordingHandeler = async () => {
    try {
      await camera.current.stopRecording();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Text>i am sarab singh ji</Text>
      <Camera ref={camera} device={device} isActive video />
      <View>
        <TouchableOpacity onPress={startRecordingHandeler}>
          <Text>Record Video</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={stopRecordingHandeler}>
          <Text>Stop recording</Text>
        </TouchableOpacity>
      </View>
      {videoPath && <Video source={{uri: videoPath}} />}
    </View>
  );
};

export default CameraRecording;
