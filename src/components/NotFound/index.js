import React from 'react';

import AlternativeGlossaryButton from './AlternativeGlossaryButton';
import failImage from '../../../assets/img/fail.png'
import { 
  Container,
  ImageContainer,
  FailImage,
  Row,
  TextWrapper,
  TitleMessage,
  SearchTerm,
  RecommendationsContainer,
  RecommendationText,
  SubTitleMessage,
  ButtonsContainer,
} from './styles';

export default function NotFound(props) {
  const recommendationsArray = [
    'Certifique-se que digitou corretamente.',
    'Use menos palavras-chaves.',
    'Verifique se está pesquisando no conteúdo correto.'
  ]

  const glossariesButtonsCombinations = {
    molecularGenetics: [
      { name: 'Genética da\nTransmissão', route: 'TransmissionGenetic', icon: 'transition' },
      { name: 'Citogenética', route: 'Cytogenetic', icon: 'microscope' }
    ],
    transmissionGenetics: [
      { name: 'Genética\nMolecular', route: 'MolecularGenetics', icon: 'molecule' },
      { name: 'Citogenética', route: 'Cytogenetic', icon: 'microscope' }
    ],
    cytogenetics: [
      { name: 'Genética\nMolecular', route: 'MolecularGenetics', icon: 'molecule' },
      { name: 'Genética da\nTransmissão', route: 'TransmissionGenetic', icon: 'transition' }
    ]
  }

  return (
    <Container>
      <Row>
        <ImageContainer>
          <FailImage source={ failImage } />
        </ImageContainer>
        <TextWrapper>
          <TitleMessage>{`Oops...\nNenhum resultado encontrado para `}
            <SearchTerm>{ props.searchTerm }</SearchTerm>
          </TitleMessage>
        </TextWrapper>
      </Row>
      
      <RecommendationsContainer>
        { recommendationsArray.map(text =>
          <RecommendationText key={ text }>• { text }</RecommendationText>
        )}
      </RecommendationsContainer>

      <SubTitleMessage>Tente pesquisar nos outros glossários</SubTitleMessage>
      <ButtonsContainer>
        { props.currentScreen === 'Genética Molecular' 
          && <AlternativeGlossaryButton 
              buttonData={glossariesButtonsCombinations.molecularGenetics} />
        }
        { props.currentScreen === 'Genética da Transmissão'
          && <AlternativeGlossaryButton 
              buttonData={glossariesButtonsCombinations.transmissionGenetics} />
        }
        { props.currentScreen === 'Citogenética' 
          && <AlternativeGlossaryButton 
              buttonData={glossariesButtonsCombinations.cytogenetics} />
        }
      </ButtonsContainer>
    </Container>
  );
}
