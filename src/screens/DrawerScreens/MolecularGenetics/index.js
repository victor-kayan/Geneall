import React from 'react';

import AlphabeticalList from '../../../components/AlphabeticalList';
import { molecularGeneticsData } from '../../../../assets/glossaryData/MolecularGeneticsData';
import { Container } from './styles';

export default function MolecularGenetics() {
  return (
    <Container>
      <AlphabeticalList data={molecularGeneticsData} />
    </Container>
  );
}
