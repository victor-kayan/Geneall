import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../../../assets/colors';

export const Gradient = styled(LinearGradient).attrs({
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
  colors: [ Colors.PRIMARY_BLUE, Colors.AQUA ]
})`
  border-radius: 10px;
  width: 45%;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 20px 0;
`;

export const Icon = styled(VectorIcon)`
  position: absolute;
  top: -50%;
  bottom: -20%;
  left: -20%;
  right: -20%;
  opacity: 0.15;
`;

export const GlossaryName = styled.Text`
  color: #FFF;
  text-align: right;
  font-size: 16px;
  font-weight: bold;
`;
