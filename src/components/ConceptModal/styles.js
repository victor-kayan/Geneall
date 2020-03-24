import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../../assets/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.View`
  background: ${Colors.WHITE};
  width: 90%;
  border-radius: 10px;
  padding: 10px 10px 20px 10px;
`;

export const Header = styled.View`
  background: ${Colors.PRIMARY_GREEN};
  margin: -10px -10px 5px -10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #FFF;
  font-family: Mollen Personal Use-Bold;
`;

export const CloseModalButton = styled.TouchableOpacity``;

export const Description = styled.Text`
  color: ${Colors.PRIMARY_GREEN};
  margin: 10px 5px 0px 0;
  font-weight: bold;
  font-size: 20px;
`;

export const Definition = styled.Text`
  color: ${Colors.BLACK};
  font-size: 16px;
  margin-bottom: 5px;
`;

export const SubDescription = styled.Text`
  color: ${Colors.GRAY};
  font-size: 12px;
  margin-bottom: 5px;
`;

export const Link = styled.Text`
  color: ${Colors.SECONDARY_BLUE};
  font-size: 16px;
  margin: 2px 0;
`;

export const ListDot = styled.Text`
  color: ${Colors.BLACK};
`;