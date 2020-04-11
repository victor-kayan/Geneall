import React from 'react';

import GlossaryBaseScreen from '../../../components/GlossaryBaseScreen';
import molecularGeneticsData from '../../../../assets/data/glossaries/molecularGenetics';
import { Container } from './styles';

const screenData = {
  title: 'Genética Molecular',
  cover: require('../../../../assets/img/sideBarBackground.jpg'),
  glossary: molecularGeneticsData
};

export default function MolecularGenetics() {
  return (
    <Container>
      <GlossaryBaseScreen {...{ screenData }} />
    </Container>
  );
} 