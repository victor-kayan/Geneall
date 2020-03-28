import React from 'react';
import { Image } from 'react-native';

import Hypher from 'hypher';
import portuguese from 'hyphenation.pt';
import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  Box,
  Title,
} from './styles';

export default function HomeOptionCard(props) {
  const navigation = useNavigation();

  const hypher = new Hypher(portuguese);

  return (
    <Container>
      <Box onPress={ () => navigation.navigate('Main', {screen: props.route}) } >
        <Image 
          source={ props.icon }
          style={{ width: 70, height: 70 }} 
        />
        <Title>{hypher.hyphenateText(props.title)}</Title>
      </Box>
    </Container>
  );
}
