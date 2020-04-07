import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

import Colors from '../../../assets/colors';
import { MAX_HEADER_HEIGHT } from "../../../assets/constants";
import { INPUT_HEIGHT } from "../SearchFilterInput";

export const AnimatedContainer = styled(Animated.View)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${MAX_HEADER_HEIGHT + INPUT_HEIGHT * 2}px;
`;

export const CoverImage = styled.Image`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const AnimatedBackground = styled(Animated.View)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${Colors.PRIMARY_BLUE};
`;