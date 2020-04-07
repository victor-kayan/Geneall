import styled from 'styled-components/native';

import Colors from '../../../assets/colors';

export const Box = styled.View`
  margin: 10px 20px;
  background: #FFF;
  padding: 10px;
  border-radius: 10px;

  shadow-color: #000;
  shadow-offset: { width: 0; height: 2 };
  shadowOpacity: 0.25;
  shadowRadius: 3.84px;

  elevation: 5;
`;

export const TitleHeader = styled.View``;

export const Title = styled.Text`
  color: ${Colors.PRIMARY_BLUE};
  font-size: 24px;
  font-weight: bold;
`;

export const Divider = styled.View`
  background: ${Colors.PRIMARY_GREEN};
  height: 1px;
  width: 100%;
  margin: 10px 0 15px 0;
`;

export const Definition = styled.Text.attrs({
  numberOfLines: 2,
  ellipsizeMode: 'tail',
})`
  color: #666;
  font-size: 14px;
`;