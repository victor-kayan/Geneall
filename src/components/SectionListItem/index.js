import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

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
  
  const navigation = useNavigation();
  
  function onOpenConcept() {
    navigation.navigate('ConceptModal');
  }

  return (
    <TouchableOpacity onPress={() => onOpenConcept() }>
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
