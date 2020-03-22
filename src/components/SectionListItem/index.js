import React from 'react';
import { View } from 'react-native';

import { 
  Container,
  Title,
  Definition,
} from './styles';

export default function SectionListItem(props) {
  return (
    <Container>
      <Title>{ props.item.concept }</Title>
      <Definition>{ props.item.definition }</Definition>
    </Container>
  );
}
