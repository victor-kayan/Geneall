import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ConceptModal from '../components/ConceptModal';
import DrawerRoutes from './drawer.routes'; 

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={ DrawerRoutes } />
      <Stack.Screen 
        name="ConceptModal" 
        component={ ConceptModal }
        options={{
          cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.4)' },
          animationEnabled: true,
          cardOverlayEnabled: true,

          // Custom modal animation
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
    </Stack.Navigator>
  );
}
