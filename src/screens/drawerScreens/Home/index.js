import React, {useEffect} from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import HomeOptionCard from '../../../components/HomeOptionCard';
{/* Authors credits:
  * Icons made by surang (https://www.flaticon.com/authors/surang)
  * from www.flaticon.com.
*/}
import { 
  LaboratorySvg,
  DnaMoleculesSvg,
  CromosomeSvg,
  ScienceBooksSvg
} from '../../../../assets/svg';
import { 
  Container,
  Background,
  HeaderRow,
  OpenDrawerButton,
  AppTitle,
  Description,
  GuideTextContainer,
  GuideText,
  CardRow,
  CardsContainer,
  Bottom,
  styles
} from './styles';

import { useIntro } from '../../../contexts/intro';

export default function Home({ navigation }) {
  const { username } = useIntro();

  useEffect(() => {
    console.log(username);
  }, [])

  return (
    <Container>
      <Background>
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
        <GuideTextContainer>
          <GuideText>Selecione uma das opções abaixo para acessar o glossário referente a esse assunto.</GuideText>
          <GuideText>Ou, então, veja boas indicações de livros sobre os conteúdos.</GuideText>
        </GuideTextContainer>
      </Background>

      <CardsContainer>
        <CardRow style={ styles.bottomMargin }>
          <HomeOptionCard 
            title='Genética Molecular'
            route='MolecularGenetics'
            position='left'
            Icon={ DnaMoleculesSvg }
          />
          <HomeOptionCard 
            title='Genética da Transmissão'
            route='TransmissionGenetic'
            Icon={ CromosomeSvg }
            />
        </CardRow>
        <CardRow>
          <HomeOptionCard 
            title='Citogenética'
            route='Cytogenetic'
            position='left'
            Icon={ LaboratorySvg }
          />
          <HomeOptionCard 
            title='Indicações de Livros'
            route='Books'
            Icon={ ScienceBooksSvg }
          />
        </CardRow>
      </CardsContainer>

      <Bottom />
    </Container>
  );
}
