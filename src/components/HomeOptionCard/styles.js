import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import Colors from '../../../assets/colors';
import { SCREEN_WIDTH } from '../../../assets/constants';

export const CARD_SIZE = (SCREEN_WIDTH - SCREEN_WIDTH * 0.25) / 2;

export const Container = styled.View`
  width: ${ CARD_SIZE }px;
  height: ${ CARD_SIZE }px;  
  background: #FFF;

  shadow-color: #000;
  shadow-offset: {
    width: 0px;
    height: 2px;
  };
  shadowOpacity: 0.25;
  shadowRadius: 3.84px;

  elevation: 5;
  border-radius: 10px;
`;

export const Box = styled.TouchableOpacity`
  padding: 8%;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const TextContainer = styled.View`
  height: 45%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${Colors.BLACK};
  font-size: 18px;
  font-family: Roboto-Bold;
  text-align: center;
`;

export const styles = StyleSheet.create({
  rightMargin: {
    marginRight: SCREEN_WIDTH * 0.05,
  }
});