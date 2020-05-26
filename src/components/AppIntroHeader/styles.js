import styled from 'styled-components/native';

import Animated from 'react-native-reanimated';
import Svg from 'react-native-svg';

import { appIcon } from '../../../assets/img';
import { SCREEN_WIDTH } from '../../../assets/constants';

const AnimatedSvgComponent = Animated.createAnimatedComponent(Svg);

export const AnimatedSvg = styled(AnimatedSvgComponent)`
  position: absolute;
`;

export const AnimatedAppIconImage = styled(Animated.Image).attrs({
  source: appIcon
})`
  position: absolute;
  top: ${ SCREEN_WIDTH * 0.05 }px;
  left: ${ SCREEN_WIDTH * 0.05 }px;
`;

export const AnimatedIllustrationContainer = styled(Animated.View)`
  flex: 1;
  justify-content: flex-end; 
  align-items: flex-end; 
  margin-right: ${ SCREEN_WIDTH * 0.05 }px;
`;