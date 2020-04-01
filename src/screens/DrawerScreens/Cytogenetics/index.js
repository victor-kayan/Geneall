import React from 'react';

import AlphabeticalList from '../../../components/AlphabeticalList';
import Header from '../../../components/Header';
import { cytogeneticsData } from '../../../../assets/glossaryData/CytogeneticsData';
import { Container } from './styles';

export default function MolecularGenetics() {
  return (
    <Container>
      <Header title='Genética Molecular' />
      <AlphabeticalList data={cytogeneticsData} />
    </Container>
  );
}