import React from 'react';

import GlossaryBaseScreen from '../../../components/GlossaryBaseScreen';
import cytogeneticsData from '../../../../assets/data/glossaries/cytogenetics';
import { glossaryHeaderCover } from '../../../../assets/img';
import { Container } from './styles';

const screenData = {
  title: 'Citogenética',
  cover: glossaryHeaderCover.cytogenetics,
  glossary: cytogeneticsData
};

export default function Cytogenetics() {
  return (
    <Container>
      <GlossaryBaseScreen {...{ screenData }} />
    </Container>
  );
}