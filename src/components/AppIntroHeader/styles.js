import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { appIcon } from '../../../assets/img';
import { SCREEN_WIDTH } from '../../../assets/constants';

export const Container = styled.View``;

export const AppIconImage = styled.Image.attrs({
  source: appIcon
})`
  position: absolute;
  top: ${ SCREEN_WIDTH * 0.05 }px;
  left: ${ SCREEN_WIDTH * 0.05 }px;
  width: ${ SCREEN_WIDTH * 0.15 }px;
  height: ${ SCREEN_WIDTH * 0.15 / 1.202849389 }px; /* 1.202849389 is the aspect ratio of logo image  */
`;

export const styles = StyleSheet.create({
  illustration: {
    position: 'absolute',
    right: SCREEN_WIDTH * 0.05,
    bottom: 0,
  }
});