import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AppIntroScreen from '../screens/switchScreens/AppIntro';

const IntroStack = createStackNavigator();

export default function IntroRoutes() {
  return (
    <IntroStack.Navigator screenOptions={{ headerShown: false }}>
      <IntroStack.Screen name='AppIntro' component={AppIntroScreen} />
    </IntroStack.Navigator>
  );
}