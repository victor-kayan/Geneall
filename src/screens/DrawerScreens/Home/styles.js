import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../../../assets/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background: #FEFEFE;
`;

export const Background = styled(LinearGradient).attrs({
  colors: [Colors.PRIMARY_BLUE, Colors.SECONDARY_BLUE],
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 },
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 55%;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 20px 0 20px;
`;

export const OpenDrawerButton = styled.TouchableOpacity`
`;

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
  margin: 30px 10px;
`;

export const GuideText = styled.Text`
  color: #FFF;
  font-family: Roboto-Light;
  text-align: center;
  margin: 3px 50px;
`;

export const CardRow = styled.View`
  flex-direction: row;
`;

export const CardsContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Bottom = styled.View``;