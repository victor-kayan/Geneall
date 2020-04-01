import React from 'react';

import AlphabeticalList from '../../../components/AlphabeticalList';
import Header from '../../../components/Header';
import { transmissionGeneticsData } from '../../../../assets/glossaryData/TransmissionGeneticsData';
import { Container } from './styles';

export default function MolecularGenetics() {
  return (
    <Container>
      <Header title='Genética da Transmissão' />
      <AlphabeticalList data={ transmissionGeneticsData } />
    </Container>
  );
}
