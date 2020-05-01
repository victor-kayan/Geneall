import React from 'react';

import GlossaryBaseScreen from '../../../components/GlossaryBaseScreen';
import molecularGeneticsData from '../../../../assets/data/glossaries/molecularGenetics';
import { glossaryHeaderCover } from '../../../../assets/img';
import { Container } from './styles';

const screenData = {
  title: 'Genética Molecular',
  cover: glossaryHeaderCover.molecularGenetics,
  glossary: molecularGeneticsData
};

export default function MolecularGenetics() {
  return (
    <Container>
      <GlossaryBaseScreen {...{ screenData }} />
    </Container>
  );
} 