import React from 'react';

import AppRoutes from './app.routes';
import IntroRoutes from './intro.routes';
import { useIntro } from '../contexts/intro';

export default function Routes() {
  const { hasUsername } = useIntro();

  return hasUsername 
    ? <AppRoutes /> 
    : <IntroRoutes />;
}