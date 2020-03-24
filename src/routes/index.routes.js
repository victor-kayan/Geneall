import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './stack.routes';
import Colors from '../../assets/colors';

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={Colors.PRIMARY_BLUE} 
      />
      <RootStack />    
    </NavigationContainer>
  );
}