import styled from 'styled-components/native';

import Colors from '../../../assets/colors';

export const FormContainer = styled.View`
  align-self: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: #FFF;
  border-radius: 25px;
  height: 48px;
  padding-left: 20px;
  padding-right: 32px;

  elevation: 3;
  
  shadow-color: #000;
  shadow-offset: { width:0; height:1 };
  shadowOpacity: 0.22;
  shadowRadius: 2.22px;
`;

export const Input = styled.TextInput`
  flex: 1;
  align-self: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: ${Colors.BLACK};
`;
