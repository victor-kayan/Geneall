import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default function Home({ navigation }) {
  function navigateToBooks() {
    navigation.navigate('Books')
  }

  return (
    <View>
      <Text>Home</Text>
      <Button title="Navigate to books" onPress={navigateToBooks} />
    </View>
  );
}
