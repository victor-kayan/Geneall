import React from 'react';

import GlossaryBaseScreen from '../../../components/GlossaryBaseScreen';
import cytogeneticsData from '../../../../assets/glossaryData/CytogeneticsData';
import { Container } from './styles';

const screenData = {
  title: 'Citogenética',
  cover: require('../../../../assets/img/sideBarBackground.jpg'),
  glossary: cytogeneticsData
};

export default function Cytogenetics() {
  return (
    <Container>
      <GlossaryBaseScreen {...{ screenData }} />
    </Container>
  );
}