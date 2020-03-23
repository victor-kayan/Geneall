import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import { 
  Box,
  TitleHeader,
  Title,
  Divider,
  Definition,
} from './styles';

export default function SectionListItem(props) {
  // useEffect(() => {
  //   props.item.trustableSites.map(site => {
  //     console.log(site.url);
  //   })
  // }, [])

  return (
    <TouchableOpacity onPress={() => {}}>
      <Box>
        <TitleHeader>
          <Title>{ props.item.concept }</Title>
          <Divider />
        </TitleHeader>
        <Definition>{ props.item.definition }</Definition>
      </Box>
    </TouchableOpacity>
  );
}
