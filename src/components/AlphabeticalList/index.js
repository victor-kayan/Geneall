import React from 'react';
import { View, SectionList } from 'react-native';

// import { Container } from './styles';
import SectionListItem from '../SectionListItem';
import SectionHeader from '../SectionHeader';

export default function AlphabeticalList(props) {
  return (
    <>
      <SectionList
        sections={ props.data }
        keyExtractor={ item => item.concept }
        renderItem={ ({item }) => <SectionListItem item={item} /> }
        renderSectionHeader={ ({section}) => <SectionHeader section={section} /> }
      >

      </SectionList>
    </>
  );
}
