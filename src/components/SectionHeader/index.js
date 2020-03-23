import React from 'react';
import { View, Text } from 'react-native';
import { LinearTextGradient } from "react-native-text-gradient";

import { 
  Container,
  Title,
} from './styles';

export default function SectionHeader(props) {
  return (
    <Container>
      <Title>
        <Text> { props.section.sectionTitle } </Text>
      </Title>
    </Container>
  );
}
