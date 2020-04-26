import styled from 'styled-components/native';

import Colors from '../../../assets/colors';

export const Header = styled.View`
  flex-direction: row;
  background: ${Colors.PRIMARY_BLUE};
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const OpenDrawerButton = styled.TouchableOpacity``;

export const PageTitle = styled.Text`
  color: #FFF;
  font-size: 24px;
  font-family: Mollen Personal Use-Bold;
  text-align: center;
  flex: 1;
`;

export const RightMargin = styled.View`
  width: 30;
`;