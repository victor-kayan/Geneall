import styled from 'styled-components/native';
import Animated from "react-native-reanimated";
import LinearGradient from "react-native-linear-gradient";

import Colors from '../../../assets/colors';
import { INPUT_HEIGHT } from "../SearchFilterInput";
import { MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT } from "../../../assets/constants";

export const AnimatedScrollContainer = styled(Animated.ScrollView)`
  flex: 1;
  padding-top: ${MIN_HEADER_HEIGHT - INPUT_HEIGHT / 2}px;
`;

export const Cover = styled.View`
  height: ${MAX_HEADER_HEIGHT - INPUT_HEIGHT}px;
`;

export const AnimatedGradientContainer = styled(Animated.View)`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: center;
`;

export const Gradient = styled(LinearGradient).attrs({
  start: { x: 0, y:0.3},
  end: { x:0, y:1 },
  colors: [ "transparent", "rgba(255, 255, 255, 0.2)", Colors.WHITE ]
})`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const TitleContainer = styled.View`
  position: absolute;
  top: -30px;
  bottom: 0;
  right: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

export const AnimatedTitle = styled(Animated.Text)`
  color: #FFF;
  text-align: center;
  font-size: 48px;
  margin-top: -20px;
  font-family: Mollen Personal Use-Bold;
`;

export const BlankBottomMargin = styled.View`
  height: ${MAX_HEADER_HEIGHT - 64}px;
`;