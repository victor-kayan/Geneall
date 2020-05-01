import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  Box,
  TextContainer,
  Title,
  styles
} from './styles';

export default function HomeOptionCard(props) {
  const navigation = useNavigation();
  const { Icon, title, route, position } = props;

  return (
    <Container style={ position === 'left' && styles.rightMargin }>
      <Box onPress={ () => navigation.navigate('Main', {screen: route}) } >
        <Icon width='55%' height='55%' />
        <TextContainer>
          <Title>{title}</Title>
        </TextContainer>
      </Box>
    </Container>
  );
}
