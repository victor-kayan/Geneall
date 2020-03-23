import React, { useEffect } from 'react';
import { View } from 'react-native';

import { 
  Container,
  Title,
  Definition,
} from './styles';

export default function SectionListItem(props) {
  // useEffect(() => {
  //   props.item.trustableSites.map(site => {
  //     console.log(site.url);
  //   })
  // }, [])

  return (
    <Container>
      <Title>{ props.item.concept }</Title>
      <Definition>{ props.item.definition }</Definition>
    </Container>
  );
}
