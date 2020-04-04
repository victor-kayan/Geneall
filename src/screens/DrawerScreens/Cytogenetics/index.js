import React from 'react';

import GlossaryBaseScreen from '../../../components/GlossaryBaseScreen';
import { cytogeneticsData } from '../../../../assets/glossaryData/CytogeneticsData';
import { Container } from './styles';

export default function MolecularGenetics() {
  return (
    <Container>
      <GlossaryBaseScreen 
        headerTitle='Citogenética'
        glossary={ cytogeneticsData }
      />
    </Container>
  );
}