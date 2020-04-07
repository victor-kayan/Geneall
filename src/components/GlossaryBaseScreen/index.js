import React from 'react';

import Animated from "react-native-reanimated";

import HeaderCover from "../HeaderCover";
import GlossaryContent from "../GlossaryContent";
import { Container } from './styles';

export default function GlossaryBaseScreen({ screenData }) {
  const y = new Animated.Value(0);

  return (
    <Container>
      <HeaderCover {...{ y, screenData }} />
      <GlossaryContent {...{ y, screenData }} />
    </Container>
  );
}