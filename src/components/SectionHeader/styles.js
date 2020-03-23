import styled from 'styled-components/native';

import { LinearTextGradient } from "react-native-text-gradient";

import Colors from '../../../assets/colors';

export const Container = styled.View`
  flex-direction: row;
  padding: 10px 10px;
  background: #FEFEFE;
`;


export const Title = styled(LinearTextGradient).attrs({
  locations: [0, 1],
  colors: [Colors.AQUA, Colors.SECONDARY_BLUE],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  font-size: 20px;
  font-weight: bold;
`;