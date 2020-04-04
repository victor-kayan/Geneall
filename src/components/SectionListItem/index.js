import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { 
  Box,
  TitleHeader,
  Title,
  Divider,
  Definition,
} from './styles';

function SectionListItem(props) {
  const navigation = useNavigation();
  const { concept, definition, trustableSites } = props.item;

  function onOpenConcept() {
    navigation.navigate('ConceptModal', { 
      concept, definition, trustableSites,
    });
  }

  return (
    <TouchableOpacity onPress={() => onOpenConcept() }>
      <Box>
        <TitleHeader>
          <Title>{ concept }</Title>
          <Divider />
        </TitleHeader>
        <Definition>{ definition }</Definition>
      </Box>
    </TouchableOpacity>
  );
}

export default memo(SectionListItem);