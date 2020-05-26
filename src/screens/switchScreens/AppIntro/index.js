import React, { useState } from 'react';
import { View } from 'react-native';

import AppIntroHeader from '../../../components/AppIntroHeader';
import { useIntro } from '../../../contexts/intro';
import { AppIntroIllustrations } from '../../../../assets/svg';
import { 
  Container,
  StyledSwiper,
  Row,
  PrevButtonIcon,
  PrevButtonText,
  NextButtonIcon,
  NextButtonText,
  SlideContainer,
  Content,
  SpaceBetweenContent,
  Title,
  TitleWithoutMargin,
  Description,
  SmallerDescription,
  DescriptionWithMargin,
  Bold,
  Italic,
  FormContainer,
  Label,
  Input,
  SubmitButton,
  ButtonBackground,
  ButtonText,
} from './styles';

export default function AppIntro() {
  const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);
  const [ username, setUsername ] = useState(null);

  const { setStoragedUsername } = useIntro();
  
  function handleSubmitUsername() {
    if (!username) return;

    setStoragedUsername(username);
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
        showsButtons={ currentSlideIndex !== 3 }
        showsPagination={ currentSlideIndex !== 3 }
        prevButton={ renderPrevButton() }
        nextButton={ renderNextButton() }
        onIndexChanged={ index => setCurrentSlideIndex(index) }
      >
        {/* 1st slide */}
        <SlideContainer>
          <AppIntroHeader Illustration={AppIntroIllustrations.NatureOnScreenSvg} animated={true} />
          <Content>
            <Title>Bem vindo ao Geneall</Title>
            <Description>
              Uma ferramenta para o <Bold>ensino-aprendizagem</Bold> do conteúdo de <Bold>genética</Bold> e seus conceitos na <Bold>palma de sua mão</Bold>, de forma <Bold>descomplicada</Bold>!
            </Description>
          </Content>
        </SlideContainer>
        
        {/* 2nd slide */}
        <SlideContainer>
          <AppIntroHeader Illustration={AppIntroIllustrations.LearningSvg} />
          <Content>
            <Title>Facilite seus estudos</Title>
            <Description>
              Consulte <Bold>glossários completos</Bold>, mesmo <Bold>sem internet</Bold>.
            </Description>
            <DescriptionWithMargin>
              Acesse <Bold><Italic>links</Italic> confiáveis</Bold> para aprender mais ainda.
            </DescriptionWithMargin>
          </Content>
        </SlideContainer>

        {/* 3rd slide */}
        <SlideContainer>
          <AppIntroHeader Illustration={AppIntroIllustrations.ReadingBookSvg} animated={true} />
          <Content>
            <Title>Aprofunde-se nos conteúdos</Title>
            <Description>
              Confira uma lista de <Bold>recomendações de livros</Bold> especialmente selecionados.
            </Description>
          </Content>
        </SlideContainer>

        {/* 4th slide */}
        <SlideContainer>
          <AppIntroHeader Illustration={AppIntroIllustrations.DoneSvg} animated={true} />
          <SpaceBetweenContent>
            <View>
              <TitleWithoutMargin>Vamos lá!</TitleWithoutMargin>
              <SmallerDescription>Por favor, informe seu nome para continuarmos</SmallerDescription>
            </View>
            <FormContainer>
              <Label>NOME</Label>
              <Input 
                placeholder='Digite seu nome'
                value={username}
                autoFocus={false}
                maxLength={20}
                onChangeText={text => setUsername(text)}
              />
            </FormContainer>
            <ButtonBackground>
              <SubmitButton onPress={handleSubmitUsername}>
                <ButtonText>COMEÇAR A APRENDER</ButtonText>
              </SubmitButton>
            </ButtonBackground>
          </SpaceBetweenContent>
        </SlideContainer>
      </StyledSwiper>
    </Container>
  )  
}