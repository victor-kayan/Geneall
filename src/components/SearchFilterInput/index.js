import React, { useState, useCallback } from "react";

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFocusEffect } from '@react-navigation/native';

import Colors from '../../../assets/colors';
import {
  FormContainer,
  Input
} from './styles';

export const INPUT_HEIGHT = 48;

export default function SearchFilterInput( props ) {
  const [ inputValue, setInputValue ] = useState('');
  const { filterInput, baseGlossary, resetState } = props;

  useFocusEffect(
    useCallback(() => {
      return () => {
        setInputValue('');
        resetState();
      }
    }, [])
  );

  function filterGlossaryData(term) {
    if (term === '') {
      resetState();
      return;
    }

    const searchText = term.trim().toLowerCase();

    let filteredGlossary = [];
    let numberOfFilteredConcepts = 0;

    for (section of baseGlossary) {
      const filteredDataInSection = section.data.filter(item => {
        return item.concept.trim().toLowerCase().match(searchText);
      });

      numberOfFilteredConcepts += filteredDataInSection.length;

      if (filteredDataInSection.length > 0) {
        const filteredSection = { 
          sectionTitle: section.sectionTitle, 
          data: filteredDataInSection 
        };
        
        filteredGlossary.push(filteredSection);
      }
    }

    filterInput({ filteredGlossary, numberOfFilteredConcepts });
  }

  return (
    <FormContainer>
      <Icon 
        name='search'
        size={20}
        color={Colors.PRIMARY_BLUE}
      />
      <Input 
        placeholder='Digite para pesquisar' 
        value={ inputValue }
        onChangeText={ term => {
          filterGlossaryData(term)
          setInputValue(term)
        }}
      />
    </FormContainer>
  );
}