import React, { useContext } from 'react';
import { View, Button } from 'react-native';

import { AppIntroContext } from '../../../routes/index.routes';
// import { Container } from './styles';

export default function AppIntro() {
  const { setUsername } = useContext(AppIntroContext);

  return(
    <View style={{ flex: 1 }}>
      <Button title='Set name' onPress={() => setUsername('Victor Kayan')} />
    </View>
  )  
}