import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes/index.routes';
import Colors from '../assets/colors';
import { IntroProvider } from './contexts/intro';

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.PRIMARY_BLUE} barStyle='light-content' />
      <IntroProvider>
        <Routes />
      </IntroProvider>
    </NavigationContainer>
  )
}

export default App;