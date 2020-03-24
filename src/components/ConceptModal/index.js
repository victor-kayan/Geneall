import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  Box,
  Header,
  Title,
  CloseModalButton, 
  Description,
  Definition,
  SubDescription,
  Link,
  ListDot,
} from './styles';

export default function ConceptModal() {
  const navigation = useNavigation();

  return (
    <Container>
      <Box>
        <Header>
          <View style={{ width: 30 }} />
          <Title>Nome do conceito</Title>
          <CloseModalButton onPress={ () => navigation.goBack() }>
            <Icon 
              name='close'
              size={30}
              color='#FFF'
            />
          </CloseModalButton>
        </Header>
        
        <Description>Definição:</Description>
        <Definition>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eum voluptatem dicta et nesciunt, reprehenderit incidunt quas nihil commodi quam qui natus quaerat, ratione earum magni assumenda suscipit aliquam id!</Definition>

        <Description>Fontes confiáveis:</Description>
        <SubDescription>Clique nos links abaixo e aprenda muito mais sobre 'nome_do_conceito'</SubDescription>
        <Link><ListDot>• </ListDot>https://google.com</Link>
        <Link><ListDot>• </ListDot>https://google.com</Link>
        <Link><ListDot>• </ListDot>https://google.com</Link>
      </Box>
    </Container>
  );
}
