import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';

//reducer
import {getUserAsync, updateUserAsync} from '../usersSlice';
import {useSelector, useDispatch} from 'react-redux';
import Colors from 'utils/Colors';

//icons
import Feather from 'react-native-vector-icons/Feather';
import face from 'assets/p11.jpeg';

const accessList = [
  {
    text: 'Now you are available to help.',
  },
  {
    text: 'Your current location is updated.',
  },
  {
    text: 'People around you can ask for help.',
  },
];

const Home = () => {
  const [initialStatus, setInitialStatus] = useState(0);
  const {user, IsAvailable, IsMessage} = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAsync(1)); //pasing static id 1
  }, [dispatch]);

  let start = IsAvailable ? 0 : 100;
  let end = IsAvailable ? 100 : 0;

  const leftAnim = useRef(new Animated.Value(start)).current;

  const animate = () => {
    Animated.timing(leftAnim, {
      toValue: end,
      duration: 600,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();

    dispatch(updateUserAsync({...user, available: !IsAvailable}));
  };

  const opacity = !IsAvailable ? 'opacity-30' : null;

  console.log('IsAvailable', IsAvailable);

  return (
    <View className=" flex h-full items-center justify-center  backdrop-blur-md bg-white/30 ">
      <View>
        <TouchableOpacity onPress={() => animate()}>
          <Image
            source={face}
            className={`h-48 w-24 rounded-full opacity-10 border-4   `}
          />

          <Animated.Image
            source={face}
            className={`h-24 w-24 rounded-full  absolute border-4  ${opacity} `}
            style={{
              borderColor: Colors.lightTheme.primary.lightest,
              transform: [{translateY: leftAnim}],
            }}
          />
        </TouchableOpacity>
      </View>
      <Text className="text-xl font-semibold text-gray-600">Liz Hurley3</Text>
      <View className="flex flex-row items-center justify-center mt-1 mb-4  ">
        <Feather name="map-pin" size={18} style={styles.pointerIcon} />
        <Text className=" text-sm font-semibold text-gray-500  mx-1">
          Delhi, India
        </Text>
      </View>
      <View className="w-80 items-center  ">
        <Text className="text-gray-600 text-center mb-4">
          Hi, how are you feeling today, are you in mood to be volinteer to help
          someone in need? please switch “ON” your App.
        </Text>

        <View
          className={`items-center gap-2 mt-2 text-gray-0  ${
            IsAvailable ? 'opacity-100' : 'opacity-0'
          }`}>
          <Feather name="check-circle" size={62} style={styles.active} />

          {accessList.map((item, ind) => {
            return (
              <Text key={ind} className="text-gray-500">
                - {item.text}
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
