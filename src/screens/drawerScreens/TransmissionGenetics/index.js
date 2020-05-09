import React from 'react';

import GlossaryBaseScreen from '../../../components/GlossaryBaseScreen';
import transmissionGeneticsData from '../../../../assets/data/glossaries/transmissionGenetics';
import { glossaryHeaderCover } from '../../../../assets/img';
import { Container } from './styles';

const screenData = {
  title: 'Genética da Transmissão',
  cover: glossaryHeaderCover.transmissionGenetics,
  glossary: transmissionGeneticsData
};

export default function TransmissionGenetics() {
  return (
    <Container>
      <GlossaryBaseScreen {...{ screenData }} />
    </Container>
  );
}