import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../../../assets/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background: ${Colors.WHITE};
`;

export const PageDescription = styled.Text`
  font-family: Roboto-Light;
  font-size: 16px;
  margin: 20px;
`;

export const BoldText = styled(PageDescription)`
  font-family: Roboto-Regular;
`;

export const Gradient = styled(LinearGradient).attrs({
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
  colors: [ Colors.PRIMARY_BLUE, Colors.AQUA ]
})`
  border-radius: 100px;
  align-self: center;
  margin: 20px 0;
`;

export const Button = styled.TouchableOpacity`
  padding: 15px 20px;
  border-radius: 100px;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  text-align: center;
  font-family: Roboto-Bold;
  font-size: 16px;
`;
