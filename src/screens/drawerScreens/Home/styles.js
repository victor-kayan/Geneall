import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';

import Colors from '../../../../assets/colors';
import { CARD_SIZE } from '../../../components/HomeOptionCard/styles';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../assets/constants';

const backgroundHeight = SCREEN_HEIGHT * 0.5;

function calculateBackgroundPadding() {
  return backgroundHeight * 0.1 + CARD_SIZE / 2;
}

function calculateCardsTopPosition() {
  return backgroundHeight - CARD_SIZE / 2;
}

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background: ${ Colors.WHITE };
`;

export const Background = styled(LinearGradient).attrs({
  colors: [Colors.PRIMARY_BLUE, Colors.SECONDARY_BLUE],
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 },
})`
  flex-shrink: 1;
  height: ${ backgroundHeight }px;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${ calculateBackgroundPadding() }px;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px 20px 0 20px;
`;

export const OpenDrawerButton = styled.TouchableOpacity``;

export const AppTitle = styled.Text`
  flex: 1;
  flex-direction: row;
  text-align: center;
  font-size: 40px;
  color: #FFF;
  font-family: Mollen Personal Use-Bold;
`;

export const Description = styled.Text`
  color: #FFF;
  font-size: 18px;
  text-align: center;
  font-family: Roboto-Light;
`;

export const GuideTextContainer = styled.View`
  width: 90%;
`;

export const GuideText = styled.Text`
  color: #FFF;
  font-family: Roboto-Light;
  margin: 3px 0;
  text-align: center;
`;

export const CardRow = styled.View`
  flex-direction: row;
`;

export const CardsContainer = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: ${ calculateCardsTopPosition() }px;
`;

export const Bottom = styled.View``;

export const styles = StyleSheet.create({
  bottomMargin: {
    marginBottom: SCREEN_WIDTH * 0.05
  }
});