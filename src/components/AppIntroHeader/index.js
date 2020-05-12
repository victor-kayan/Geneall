import React from 'react';

import Svg, { 
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

import Colors from '../../../assets/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../assets/constants';
import { Container } from './styles';

export default function AppIntroHeader() {
  function hPc(percentageValue) { // Get height (h) percentage (Pc)
    return SCREEN_HEIGHT * percentageValue/100;
  }

  function wPc(percentageValue) { // Get width (h) percentage (Pc)
    return SCREEN_WIDTH * percentageValue/100;
  }

  const controlPointHeight = hPc(10);

  return (

    <Container>
      {/* Wavy gradient background */}
      <Svg width={wPc(100) + 2} height={hPc(35) + controlPointHeight} viewBox={`0 0 ${wPc(100) + 2} ${hPc(35) + controlPointHeight}`}>
        <Defs>
          <LinearGradient id="gradient-fill" x1="0" y1="0" x2={wPc(0)} y2={hPc(35) + controlPointHeight} gradientUnits="userSpaceOnUse">
            <Stop offset="0" stopColor={Colors.PRIMARY_BLUE} />
            <Stop offset="1" stopColor={Colors.AQUA} />
          </LinearGradient>
        </Defs>
        <Path 
          d={`M-1,0 V${hPc(35)} C${wPc(50)},${hPc(35) + controlPointHeight} ${wPc(50)},${hPc(35) - controlPointHeight} ${wPc(100) + 1},${hPc(35)} V0 H0 Z`}
          fill='url(#gradient-fill)'
        />
      </Svg>
    </Container>
  );
}
