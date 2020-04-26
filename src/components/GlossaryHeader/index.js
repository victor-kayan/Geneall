import React from "react";

import Animated from "react-native-reanimated";

import { HEADER_DELTA } from "../../../assets/constants";
import {
  AnimatedContainer,
  AnimatedTitle
} from './styles'

const { interpolate, Extrapolate } = Animated;

export default function Header({ title, y }) {
  const containerOpacity = interpolate(y, {
    inputRange: [HEADER_DELTA - 16, HEADER_DELTA],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  const itensOpacity = interpolate(y, {
    inputRange: [HEADER_DELTA - 8, HEADER_DELTA - 4],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <AnimatedContainer style={{ opacity: containerOpacity }}>
      <AnimatedTitle style={{ opacity: itensOpacity }}>
        {title.toUpperCase()}
      </AnimatedTitle>
    </AnimatedContainer>
  );
};