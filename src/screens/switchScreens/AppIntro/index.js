import React from 'react';
import { View, Button } from 'react-native';

import { useIntro } from '../../../contexts/intro';

export default function AppIntro() {
  const { setStoragedUsername } = useIntro();
  
  function handleSetUsername() {
    setStoragedUsername('Victor Kayan');
  }

  return(
    <View style={{ flex: 1 }}>
      <Button title='Set name' onPress={ handleSetUsername } />
    </View>
  )  
}