import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import Colors from '../../../assets/colors';
import { MIN_HEADER_HEIGHT } from "../../../assets/constants";
import { INPUT_HEIGHT } from "../SearchFilterInput";

export const AnimatedContainer = styled(Animated.View)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: ${INPUT_HEIGHT / 2 - MIN_HEADER_HEIGHT}px;
  left:0;
  right: 0;
  height: ${MIN_HEADER_HEIGHT}px;
  background: ${Colors.PRIMARY_BLUE};
  padding-top: ${getStatusBarHeight()}px;
`;

export const AnimatedTitle = styled(Animated.Text)`
  color: #FFF;
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
  font-family: Mollen Personal Use-Bold;
`;