import React from 'react';

import GlossaryBaseScreen from '../../../components/GlossaryBaseScreen';
import { molecularGeneticsData } from '../../../../assets/glossaryData/MolecularGeneticsData';
import { Container } from './styles';

export default function MolecularGenetics() {
  return (
    <Container>
      <GlossaryBaseScreen 
        headerTitle='Genética Molecular'
        glossary={ molecularGeneticsData }
      />
    </Container>
  );
}