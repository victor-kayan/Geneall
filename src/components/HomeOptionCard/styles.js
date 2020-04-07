import styled from 'styled-components/native';

import Colors from '../../../assets/colors';

export const Container = styled.View``;

// TODO: Ajustar a altura e largura da Box em % e não em px.

export const Box = styled.TouchableOpacity`
  width: 150px;
  height: 150px;  
  background: #FFF;
  padding: 10px;
  margin: 25px 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  };
  shadowOpacity: 0.25;
  shadowRadius: 3.84px;

  elevation: 5;
`;

export const Title = styled.Text`
  text-align: center;
  margin: 10px 10px;
  font-family: Roboto-Bold;
  font-size: 18px;
  color: ${Colors.BLACK};
`;