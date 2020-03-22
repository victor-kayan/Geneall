import React from 'react';
import { View } from 'react-native';

import { 
  Container,
  Title,
} from './styles';

export default function SectionHeader(props) {
  return (
    <Container>
      <Title>{ props.section.sectionTitle }</Title>
    </Container>
  );
}
