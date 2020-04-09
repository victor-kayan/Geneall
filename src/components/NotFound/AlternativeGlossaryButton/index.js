import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { 
  Gradient,
  Button,
  Icon,
  GlossaryName,
} from './styles';

export default function AlternativeGlossaryButton({ buttonData } = props) {
  const navigation = useNavigation();

  return (
    <>
      { buttonData.map(glossary => 
        <Gradient key={ glossary.name }>
          <Button onPress={() => { navigation.navigate('Main', {screen: glossary.route}) }}>
            <Icon 
              name={ glossary.icon }
              size={120}
              color='#FFF'
            />
            <GlossaryName>{ glossary.name }</GlossaryName>
          </Button>
        </Gradient>
      )}
    </>
  );
}
