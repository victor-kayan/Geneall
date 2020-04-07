import React from 'react';

import GlossaryBaseScreen from '../../../components/GlossaryBaseScreen';
import transmissionGeneticsData from '../../../../assets/glossaryData/TransmissionGeneticsData';
import { Container } from './styles';

const screenData = {
  title: 'Genética da Transmissão',
  cover: require('../../../../assets/img/sideBarBackground.jpg'),
  glossary: transmissionGeneticsData
};

export default function TransmissionGenetics() {
  return (
    <Container>
      <GlossaryBaseScreen {...{ screenData }} />
    </Container>
  );
}