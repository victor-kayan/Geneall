import React from 'react';

import { 
  Container,
  Content,
  Row,
  ImageWrapper,
  CoverImage,
  TextWrapper,
  Title,
  SubTitle,
  Author,
  GridList,
  Keyword,
  DescriptionTitle,
  DescriptionText
} from './styles';

export default function BookDetails({ route }) {
  const { bookData } = route.params;
  const { 
    title, 
    subtitle,
    author, 
    coverIllustration, 
    summary,
    // keywords
  } = bookData;

  const keywords = ['Biologia', 'Genética', 'Evolução', 'Replicação do DNA', 'Citogenética']

  return (
    <Container>
      <Content>
        <Row>
          <ImageWrapper>
            <CoverImage source={ coverIllustration } />
          </ImageWrapper>
          <TextWrapper>
            <Title>{title}</Title>
            { subtitle && <SubTitle>{subtitle}</SubTitle> }
            <Author>{author}</Author>
            <GridList
              numColumns={3}
              data={ keywords }
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <Keyword>{item}</Keyword> }
            />
          </TextWrapper>
        </Row>

        <DescriptionTitle>Descrição do livro</DescriptionTitle>
        <DescriptionText>{summary}</DescriptionText>
      </Content>
    </Container>
  );
}
