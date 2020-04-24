import React, { useState, memo } from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import BOOKS_DATA from '../../../../assets/data/books';
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

function BooksRecommendations({ navigation }) {
  const [ activeBookData, setActiveBookData ] = useState(BOOKS_DATA[0]);

  function updateActiveSlideBookData(slideIndex) {
    setActiveBookData(BOOKS_DATA[slideIndex]);
  }

  function navigateToBookDetailsScreen() {
    navigation.navigate('Books', { 
      screen: 'BookDetails', 
      params: { bookData: activeBookData }
    });
  }

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
        
        <BooksCarousel onSlideChange={index => updateActiveSlideBookData(index)} />
        
        <Gradient>
          <Button onPress={() => { navigateToBookDetailsScreen() }}>
            <ButtonText>Descubra mais sobre este livro</ButtonText>
          </Button>
        </Gradient>
      </Content>
    </Container>
  );
}

export default memo(BooksRecommendations);