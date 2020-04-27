import React from 'react';

import images from '../../../../assets/images';

import DefaultHeader from '../../../components/DefaultHeader';
import { 
  Container,
  Content,
  Logo,
  Body,
  Title,
  Text,
  Bottom,
  Divider,
  BottomTextContainer,
  BottomText,
  Italic
 } from './styles';

export default function AboutThisApp() {
  return (
    <Container>
      <DefaultHeader pageTitle='Sobre este aplicativo' />

      <Content>
        <Body>
          <Logo source={ images.logo } />

          <Title>Seleção de conteúdo</Title>
          <Text>•  Sadrak Lyon Dantas Pontes</Text>
          <Text>•  Victor Kayan de Assis Lima</Text>

          <Title>Revisão e orientação</Title>
          <Text>•  Professor Me. Biólogo Leonardo Emmanuel</Text>

          <Title>Desenvolvedores</Title>
          <Text>•  Victor Kayan de Assis Lima</Text>
          <Text>•  Sadrak Lyon Dantas Pontes</Text>
        </Body>

        <Bottom>
          <Divider />
          <BottomTextContainer>
            <BottomText>Instituto Federal de Educação Ciência e Tecnologia do Rio Grande do Norte</BottomText>
            <BottomText><Italic>Campus</Italic> Pau dos Ferros</BottomText>
          </BottomTextContainer>
        </Bottom>
      </Content>
    </Container>
  );
}
