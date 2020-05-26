import React, { useState, useEffect, useRef } from 'react';
import { Keyboard, Platform } from 'react-native';

import Animated, { Easing } from 'react-native-reanimated';
import { 
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

import Colors from '../../../assets/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../assets/constants';
import { 
  AnimatedSvg,
  AnimatedAppIconImage,
  AnimatedIllustrationContainer,
} from './styles';

export default function AppIntroHeader({ Illustration, animated } = props) {
  const [ keyboardShow, setKeyboardShow ] = useState(false);
 
  const mainPercent = useRef(new Animated.Value(1));
  const svgTopPosition = useRef(new Animated.Value(0));

  const keyboardListener = Platform.OS === 'ios'
    ? { show: 'keyboardWillShow', hide: 'keyboardWillHide' }
    : { show: 'keyboardDidShow', hide: 'keyboardDidHide' };

  useEffect(() => {
    if (animated) {
      Keyboard.addListener(keyboardListener.show, () => setKeyboardShow(true));
      Keyboard.addListener(keyboardListener.hide, () => setKeyboardShow(false));
      
      return () => {
        Keyboard.removeAllListeners(keyboardListener.show, () => setKeyboardShow(true));
        Keyboard.removeAllListeners(keyboardListener.hide, () => setKeyboardShow(false));
      };
    }
  }, []);
  
  const { timing, interpolate, multiply } = Animated;
  const animationConfig = { duration: 200, easing: Easing.inOut(Easing.ease) };

  const reduceMainPercentAnimation = timing(mainPercent.current, {
    ...animationConfig,
    toValue: 0.6
  });
  const increaseMainPercentAnimation = timing(mainPercent.current, {
    ...animationConfig,
    toValue: 1
  });

  const reduceHeaderHeightAnimation = timing(svgTopPosition.current, {
    ...animationConfig,
    toValue: 1,
  });
  const increaseHeaderHeightAnimation = timing(svgTopPosition.current, {
    ...animationConfig,
    toValue: 0,
  });

  const translateSvgTopPosition = interpolate(svgTopPosition.current, {
    inputRange: [0, 1],
    outputRange: [0, SCREEN_HEIGHT * -0.2]
  });
  const translateMainPercent = interpolate(mainPercent.current, {
    inputRange: [0, 1],
    outputRange: [0.4, 1]
  });
  const translateMarginBottom = interpolate(mainPercent.current, {
    inputRange: [0, 1],
    outputRange: [SCREEN_HEIGHT * 0.1, 0]
  });

  useEffect(() => {
    if (animated) {
      if (keyboardShow) {
        reduceHeaderHeightAnimation.start();
        reduceMainPercentAnimation.start();
      } else {
        increaseHeaderHeightAnimation.start();
        increaseMainPercentAnimation.start();
      }
    }
  }, [keyboardShow]);
  
  function hPc(percentageValue) { // Get height (h) percentage (Pc) in pixels
    return SCREEN_HEIGHT * percentageValue/100;
  }
  
  function wPc(percentageValue) { // Get width (h) percentage (Pc) in pixels
    return SCREEN_WIDTH * percentageValue/100;
  }
  
  const controlPointHeight = hPc(10);
  
  return(
    <Animated.View style={{ flex: translateMainPercent }} >
      {/* Wavy gradient background */}
      <AnimatedSvg 
        width={wPc(100) + 2} 
        height={hPc(35) + controlPointHeight} 
        viewBox={`0 0 ${wPc(100) + 2} ${hPc(35) + controlPointHeight}`} 
        style={{ top: translateSvgTopPosition }} 
      >
        <Defs>
          <LinearGradient id="gradient-fill" x1="0" y1="0" x2={wPc(0)} y2={hPc(35) + controlPointHeight} gradientUnits="userSpaceOnUse">
            <Stop offset="0" stopColor={Colors.PRIMARY_BLUE} />
            <Stop offset="1" stopColor={Colors.AQUA} />
          </LinearGradient>
        </Defs>
        <Path 
          d={`M-1,0 V${hPc(35) - 1} C${wPc(50)},${hPc(35) + controlPointHeight} ${wPc(50)},${hPc(35) - controlPointHeight} ${wPc(100) + 1},${hPc(35)} V0 H0 Z`}
          fill='url(#gradient-fill)'
        />
      </AnimatedSvg>

      <AnimatedAppIconImage
        style={{
          width: multiply((SCREEN_WIDTH * 0.15), translateMainPercent),
          height: multiply((SCREEN_WIDTH * 0.15 / 1.202849389), translateMainPercent)
        }}
      />
      <AnimatedIllustrationContainer style={{ marginBottom: translateMarginBottom }}>
        <Illustration width='65%' height='65%' />
      </AnimatedIllustrationContainer>
    </Animated.View>
  );
}