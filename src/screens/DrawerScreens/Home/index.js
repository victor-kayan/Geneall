import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import HomeOptionCard from '../../../components/HomeOptionCard';
import { 
  Container,
  Background,
  HeaderRow,
  OpenDrawerButton,
  AppTitle,
  Description,
  GuideText,
  CardRow,
  CardsContainer,
  Bottom,
} from './styles';

export default function Home({ navigation }) {
  return (
    <Container>
      <Background />
      
      <View style={{ height: '20%' }}>
        <HeaderRow>
          <OpenDrawerButton onPress={ () => navigation.openDrawer() }>
            <Icon 
              name='menuunfold'
              size={30}
              color='#FFF'
            />
          </OpenDrawerButton>
          <AppTitle>Geneall</AppTitle>
          <View style={{ width: 30 }} />
        </HeaderRow>
        <Description>Uma nova maneira de aprender genética</Description>
        <GuideText>Selecione uma das opções abaixo para acessar o glossário referente a esse assunto.</GuideText>
        <GuideText>Ou, então, veja boas indicações de livros sobre os conteúdos.</GuideText>
      </View>

      <CardsContainer>
        <CardRow>
          <HomeOptionCard 
            title='Citogenética'
            icon={require('../../../../assets/img/cell-icon.png')}
            route='Cytogenetic'
          />
          <HomeOptionCard 
            title='Genética Molecular'
            icon={require('../../../../assets/img/molecule-icon.png')}
            route='MolecularGenetics'
          />
        </CardRow>
        <CardRow>
          <HomeOptionCard 
            title='Genética da Transmissão'
            icon={require('../../../../assets//img/dna-icon.png')}
            route='TransmissionGenetic'
          />
          <HomeOptionCard 
            title='Indicações de Livros'
            icon={require('../../../../assets/img/book-icon.png')}
            route='Books'
          />
        </CardRow>
      </CardsContainer>

      <Bottom />
    </Container>
  );
}
