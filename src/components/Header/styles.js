import styled from 'styled-components/native';

import Colors from '../../../assets/colors';

export const Container = styled.View`
  background: ${Colors.PRIMARY_BLUE};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 10px 20px 10px;
`;

export const OpenDrawerButton = styled.TouchableOpacity`
`;

export const Title = styled.Text`
  flex: 1;
  flex-direction: row;
  text-align: center;
  font-size: 30px;
  color: #FFF;
  font-family: Mollen Personal Use-Bold;
`;
