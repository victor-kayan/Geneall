import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  Box,
  Title,
} from './styles';

export default function HomeOptionCard(props) {
  const navigation = useNavigation();

  return (
    <Container>
      <Box onPress={ () => navigation.navigate(props.route) } >
        <Image 
          source={ props.icon }
          style={{ width: 70, height: 70 }} 
        />
        <Title>{ props.title }</Title>
      </Box>
    </Container>
  );
}
