import styled from 'styled-components/native';
import { Content as NativeBaseContent } from 'native-base';

import Colors from '../../../assets/colors';
import { SCREEN_HEIGHT } from '../../../assets/constants';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled(NativeBaseContent)`
  flex: 1; 
  background-color: #FFF;
`;

export const DrawerCover = styled.ImageBackground`
  align-self: stretch;
  height: ${SCREEN_HEIGHT / 3.5}px;
  width: null;
  position: relative;
  margin-bottom: 10px;
`;

export const DarkImageCover = styled.View`
  flex: 1;
  justify-content: center;
  align-items:center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 50px;
  margin-bottom: 5px;
  font-family: 'Mollen Personal Use-Bold';
`;

export const Description = styled.Text`
  font-size: 16px;
  margin: 0 20px;
  color: #FFF;
  text-align: center;
  font-family: 'Mollen Personal Use-Bold';
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