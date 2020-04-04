import React from 'react';

import GlossaryBaseScreen from '../../../components/GlossaryBaseScreen';
import { transmissionGeneticsData } from '../../../../assets/glossaryData/TransmissionGeneticsData';
import { Container } from './styles';

export default function MolecularGenetics() {
  return (
    <Container>
      <GlossaryBaseScreen 
        headerTitle='Genética da Transmissão'
        glossary={ transmissionGeneticsData }
      />
    </Container>
  );
}