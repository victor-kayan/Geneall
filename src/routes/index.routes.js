import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../../assets/colors';
import ConceptModal from '../components/ConceptModal';
import MainDrawer from './drawer.routes'; 

const RootStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={Colors.PRIMARY_BLUE} 
      />

      <RootStack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="Main"
          component={ MainDrawer }
        />
        <RootStack.Screen 
          name="ConceptModal" 
          component={ ConceptModal } 
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}