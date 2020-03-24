import React from 'react';
import { Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

export default function ConceptModal() {
  const navigation = useNavigation();

  return (
    <Container>
      <Text>This is the Modal</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </Container>
  );
}
