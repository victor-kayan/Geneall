import styled from 'styled-components/native';
import ModalBox from 'react-native-modalbox';

import Colors from '../../../assets/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Modal = styled(ModalBox)`
  max-height: 90%;
  height: auto;
  width: 95%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const IconContainer = styled.View`
  background: rgba(0, 0, 0, 0);
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.View`
  background: ${Colors.WHITE};
  width: 90%;
  border-radius: 10px;
  padding: 10px 15px 25px 15px;
`;

export const Header = styled.View`
  background: ${Colors.PRIMARY_GREEN};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Content = styled.View`
  background: #FFF;
  padding: 0 15px 30px 15px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #FFF;
  font-family: Mollen Personal Use-Bold;
  max-width: 100%;
  width: auto;
  text-align: center;
`;

export const Row = styled.View`
  margin: 15px 0px 5px 0;
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.Text`
  color: ${Colors.PRIMARY_GREEN};
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
`;

export const Definition = styled.Text`
  color: ${Colors.BLACK};
  font-size: 16px;
  margin-bottom: 5px;
  text-align: justify;
`;

export const LinksContainer = styled.View``;

export const Link = styled.Text`
  color: ${Colors.SECONDARY_BLUE};
  font-size: 16px;
  margin: 2px 0;
`;

export const ListDot = styled.Text`
  color: ${Colors.BLACK};
`;
