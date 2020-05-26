import styled from 'styled-components/native';
import { Content as NativeBaseContent } from 'native-base';

import Colors from '../../../assets/colors';

import { SCREEN_HEIGHT } from '../../../assets/constants';

export const Content = styled(NativeBaseContent)`
  flex: 1; 
  background-color: ${Colors.WHITE};
`;

export const DrawerCover = styled.ImageBackground`
  align-self: stretch;
  height: ${SCREEN_HEIGHT / 4}px;
  width: null;
  position: relative;
  margin-bottom: 10px;
`;

export const DarkImageCover = styled.View`
  flex: 1;
  justify-content: center;
  align-items:center;
  background-color: rgba(14, 32, 71, 0.5);
`;

export const TextWrapper = styled.View`
  flex-shrink: 1;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  height: 90%;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 36px;
  font-family: 'Mollen Personal Use-Bold';
`;

export const Username = styled(Title)`
  font-size: 26px;
  font-family: 'Roboto-Regular';
`;

export const RouteName = styled.Text`
  font-size: 16px;
  margin-left: 20px;
  color: #666;
`;

export const Separator = styled.View`
  background-color: #CCC;
  height: 1px;
  width: 76%;
  margin: 10px 0;
  align-self: flex-end;
`;