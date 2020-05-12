import React from 'react';
import { Text, Button } from 'react-native';

import AppIntroHeader from '../../../components/AppIntroHeader';

import { useIntro } from '../../../contexts/intro';
import { 
  Container,
  StyledSwiper,
  Row,
  PrevButtonIcon,
  PrevButtonText,
  NextButtonIcon,
  NextButtonText,
  SlideContainer
} from './styles';

export default function AppIntro() {
  const { setStoragedUsername } = useIntro();
  
  function handleSetUsername() {
    setStoragedUsername('Victor Kayan');
  }

  function renderPrevButton() {
    return (
      <Row>
        <PrevButtonIcon /> 
        <PrevButtonText>Anterior</PrevButtonText>
      </Row>
    );
  }

  function renderNextButton() {
    return (
      <Row>
        <NextButtonText>Próximo</NextButtonText>
        <NextButtonIcon />
      </Row>
    );
  }

  return(
    <Container>
      <StyledSwiper
        loop={false}
        loadMinimal={true}
        showsButtons={true}
        prevButton={ renderPrevButton() }
        nextButton={ renderNextButton() }
      >
        {/* Slide 1 */}
        <SlideContainer>
          <AppIntroHeader />
          <Text>Welcome...</Text>
        </SlideContainer>
        
        {/* Slide 2 */}
        <SlideContainer>
          <AppIntroHeader />
          <Text>Informations...</Text>
        </SlideContainer>

        {/* Slide 3 */}
        <SlideContainer>
          <AppIntroHeader />
          <Text>Get started...</Text>
          <Button title='Set name' onPress={ handleSetUsername } />
        </SlideContainer>
      </StyledSwiper>
    </Container>
  )  
}