import React from 'react';

import AppRoutes from './app.routes';
import IntroRoutes from './intro.routes';
import { useIntro } from '../contexts/intro';
import { SplashScreen } from '../screens/switchScreens';

export default function Routes() {
  const { loading, hasUsername } = useIntro();

  if (loading) {
    return <SplashScreen />;
  }

  return hasUsername ? <AppRoutes /> : <IntroRoutes />;
}