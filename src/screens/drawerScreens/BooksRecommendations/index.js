import React, { useState, memo } from 'react';

import BOOKS_DATA from '../../../../assets/data/books';
import BooksCarousel from '../../../components/BooksCarousel';
import DefaultHeader from '../../../components/DefaultHeader';
import { 
  Container,
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
      <DefaultHeader pageTitle='Indicações de livros' />
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