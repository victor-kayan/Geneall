import React from "react";

import Animated from "react-native-reanimated";

import { MAX_HEADER_HEIGHT, HEADER_DELTA } from "../../../assets/constants";
import { 
  AnimatedContainer,
  CoverImage,
  AnimatedBackground
} from './styles';

const { interpolate, Extrapolate } = Animated;

export default function Cover({ screenData: { cover }, y }) {
  const scale = interpolate(y, {
    inputRange: [-MAX_HEADER_HEIGHT, 0],
    outputRange: [4, 1],
    extrapolateRight: Extrapolate.CLAMP,
  });

  const opacity = interpolate(y, {
    inputRange: [-64, 0, HEADER_DELTA],
    outputRange: [0, 0.2, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <AnimatedContainer style={{ transform: [{ scale }] }} > 
      <CoverImage 
        style={{ width: undefined, height: undefined }} 
        source={ cover } 
      />
      <AnimatedBackground style={{ opacity }} />
    </AnimatedContainer>
  );
};