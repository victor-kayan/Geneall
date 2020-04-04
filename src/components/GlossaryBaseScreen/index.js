import React, { useState, useCallback } from 'react';
import { Text } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import AlphabeticalList from '../AlphabeticalList';
import Header from '../Header';
import { Container, Input } from './styles';

export default function MolecularGenetics(props) {
  const glossaryData = props.glossary;

  const [ filteredData, setFilteredData ] = useState(glossaryData);
  const [ inputValue, setInputValue ] = useState('');

  useFocusEffect(
    useCallback(() => {
      return () => {
        setFilteredData(glossaryData);
        setInputValue('');
      }
    }, [])
  );

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
      <Header title={ props.headerTitle } />
      <Input
        placeholder='Digite para pesquisar um conceito'
        value={ inputValue }
        onChangeText={ term => {
          filterGlossaryData(term)
          setInputValue(term)
        }}
      />

      { filteredData.length > 0
        ? <AlphabeticalList data={ filteredData } />
        : <Text>Oops, nenhum item corresponde a sua pesquisa :/</Text>
      }
    </Container>
  );
}