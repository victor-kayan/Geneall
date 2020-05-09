import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes/index.routes';
import { IntroProvider } from './contexts/intro';

function App() {
  return (
    <NavigationContainer>
      <IntroProvider>
        <Routes />
      </IntroProvider>
    </NavigationContainer>
  )
}

export default App;