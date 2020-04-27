import styled from 'styled-components/native';

import Colors from '../../../../assets/colors';
import { SCREEN_WIDTH } from '../../../../assets/constants';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Body = styled.ScrollView`
  width: 90%;
`;

export const Logo = styled.Image`
  width: ${ SCREEN_WIDTH * 0.5 }px;
  height: ${ (SCREEN_WIDTH * 0.5) / 1.641747573 }px; /* 1.641747573 is the aspect ratio of logo image*/
  align-self: center;
  margin: 30px 0 15px 0;
`;

export const Title = styled.Text`
  color: ${ Colors.BLACK };
  font-family: Roboto-Bold;
  font-size: 18px;
  margin: 15px 0 5px 0;
`;

export const Text = styled.Text`
  color: ${ Colors.BLACK };
  margin-left: 10px;
  font-size: 16px;
`;

export const Bottom = styled.View`
  width: 100%;
  padding: 0 20px;
  justify-content: space-between;
`;

export const Divider = styled.View`
  background: ${ Colors.GRAY };
  width: 100%;
  height: 1px;
`;

export const BottomTextContainer = styled.View`
  margin: 10px 0 5px 0;
`;

export const BottomText = styled.Text`
  color: ${ Colors.GRAY };
  text-align: center;
  margin-bottom: 5px;
`;

export const Italic = styled.Text`
  font-style: italic;
`;