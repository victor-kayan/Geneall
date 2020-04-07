import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import { HEADER_DELTA } from "../../../assets/constants";
import { OpenDrawerButton } from './styles';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);
const { interpolate, Extrapolate } = Animated;

export default function Button({ yValue } = props) {
  const navigation = useNavigation();

  const itensOpacity = interpolate(yValue, {
    inputRange: [HEADER_DELTA - 150, HEADER_DELTA - 8, HEADER_DELTA - 4],
    outputRange: [1, 0, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <>
      <OpenDrawerButton onPress={ () => navigation.openDrawer() }>
        <AnimatedIcon 
          name='menuunfold'
          size={30}
          color={'#FFF'}
          style={{ opacity: itensOpacity }}
        />
      </OpenDrawerButton>
    </>
  );
}
