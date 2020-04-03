import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';

import AlphabeticalList from '../../../components/AlphabeticalList';
import Header from '../../../components/Header';
import { molecularGeneticsData } from '../../../../assets/glossaryData/MolecularGeneticsData';
import { Container } from './styles';

export default function MolecularGenetics() {
  const [ filteredData, setFilteredData ] = useState(molecularGeneticsData );

  function filterGlossaryData(term) {
    const searchText = term.trim().toLowerCase();

    let filteredGlossary = [];

    for (section of molecularGeneticsData) {
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
      <Header title='Genética Molecular' />
      <TextInput
        onChangeText={(term) => { filterGlossaryData(term) }}
        placeholder="Type a message to search"
      />

      { filteredData.length > 0
      ? 
        <AlphabeticalList data={ filteredData } />
      : 
        <Text>Oops, nenhum item corresponde a sua pesquisa :/</Text>
      }
    </Container>
  );
}

