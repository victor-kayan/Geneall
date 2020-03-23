import React from 'react';

import AlphabeticalList from '../../../components/AlphabeticalList';
import Header from '../../../components/Header';
import { molecularGeneticsData } from '../../../../assets/glossaryData/MolecularGeneticsData';
import { Container } from './styles';

export default function MolecularGenetics() {
  return (
    <Container>
      <Header title='Genética Molecular' />
      <AlphabeticalList data={molecularGeneticsData} />
    </Container>
  );
}
