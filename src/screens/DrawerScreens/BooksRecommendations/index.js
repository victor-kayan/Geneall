import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import BooksCarousel from '../../../components/BooksCarousel';
import { 
  Container,
  Header,
  OpenDrawerButton,
  PageTitle,
  Content,
  PageDescription,
  BoldText,
  Gradient,
  Button,
  ButtonText,
} from './styles';

export default function Books({ navigation }) {
  return (
    <Container>
      <Header>
        <OpenDrawerButton onPress={() => { navigation.openDrawer() }}>
          <Icon
            name='menuunfold'
            size={30}
            color='#FFF'
          />
        </OpenDrawerButton>
        <PageTitle>Indicações de livros</PageTitle>
        <View style={{ width: 30 }} />
      </Header>

      <Content>
        <PageDescription>Confira uma <BoldText>seleção especial</BoldText> de ótimos livros sobre genética para <BoldText>se aprofundar nos conteúdos</BoldText>.</PageDescription>
        
        <BooksCarousel />
        
        <Gradient>
          <Button onPress={() => { navigation.navigate('Books', { screen: 'BookDetails' }) }}>
            <ButtonText>Descubra mais sobre este livro</ButtonText>
          </Button>
        </Gradient>
      </Content>
    </Container>
  );
}
