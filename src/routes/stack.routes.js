import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ConceptModal from '../components/ConceptModal';
import MainDrawer from './drawer.routes'; 

const RootStack = createStackNavigator();

export default function routes() {
  return (
    <RootStack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        name="Main"
        component={ MainDrawer }
      />
      <RootStack.Screen 
        name="ConceptModal" 
        component={ ConceptModal }
        options={{
          cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.4)' },
          animationEnabled: true,
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange:[0, 0.25, 0.7, 1]
                })
              }, 
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                  extrapolate: 'clamp'
                })
              }
            };
          }
        }}
      />
    </RootStack.Navigator>
  );
}
