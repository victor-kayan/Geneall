import styled from 'styled-components/native';

import Colors from '../../../assets/colors';

export const Container = styled.View`
  flex: 1;
  background: ${Colors.WHITE}
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: Colors.GRAY
})`
  color: ${Colors.BLACK};
`;