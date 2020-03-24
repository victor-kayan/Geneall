import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  OpenDrawerButton,
  Row,
  Title
} from './styles';

export default function Header(props) {
  const navigation = useNavigation();

  return (
    <Container>
      <Row>
        <OpenDrawerButton onPress={ () => navigation.openDrawer() }>
          <Icon 
            name='menuunfold'
            size={30}
            color='#FFF'
          />
        </OpenDrawerButton>
        <Title>{ props.title }</Title>
        <View style={{ width: 30 }} />
      </Row>
    </Container>
  );
}
  