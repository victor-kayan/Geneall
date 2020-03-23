import React from 'react';
import { Text } from 'react-native';

import { 
  Container,
  Title,
} from './styles';

export default function SectionHeader(props) {
  return (
    <Container>
      <Title>
        <Text> { props.section.sectionTitle }</Text>
      </Title>
    </Container>
  );
}
