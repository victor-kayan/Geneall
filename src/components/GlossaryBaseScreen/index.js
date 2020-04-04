import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';

import AlphabeticalList from '../AlphabeticalList';
import Header from '../Header';
import { Container } from './styles';

export default function MolecularGenetics(props) {
  const glossaryData = props.glossary;
  const [ filteredData, setFilteredData ] = useState(glossaryData);

  function filterGlossaryData(term) {
    if (term === '') {
      setFilteredData(glossaryData);
      return;
    }

    const searchText = term.trim().toLowerCase();

    let filteredGlossary = [];

    for (section of glossaryData) {
      const filteredDataInSection = section.data.filter(item => {
        return item.concept.trim().toLowerCase().match(searchText);
      });

      if (filteredDataInSection.length > 0) {
        const filteredSection = { 
          sectionTitle: section.sectionTitle, 
          data: filteredDataInSection 
        };
        
        filteredGlossary.push(filteredSection);
      }
    }

    setFilteredData(filteredGlossary);
  }

  return (
    <Container>
      <Header title={props.headerTitle} />
      <TextInput
        onChangeText={(term) => { filterGlossaryData(term) }}
        placeholder="Type a message to search"
      />

      { filteredData.length > 0
        ? <AlphabeticalList data={ filteredData } />
        : <Text>Oops, nenhum item corresponde a sua pesquisa :/</Text>
      }
    </Container>
  );
}