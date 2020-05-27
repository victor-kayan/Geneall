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
  GridItem,
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
    keywords
  } = bookData;

  const gridColumns = 2;

  function createGridRows(data, columns) {
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - rows * columns;

    if (lastRowElements) {
      for (let i = lastRowElements; i < columns; i++) {
        data.push('empty');
      }
    }

    return data;
  }

  function renderKeywords(item) {
    if (item === 'empty') {
      return <GridItem style={{ borderWidth: 0 }} />
    }

    return (
      <GridItem>
        <Keyword>{item}</Keyword>
      </GridItem> 
    );
  }

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
              numColumns={gridColumns}
              data={createGridRows(keywords, gridColumns)}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => renderKeywords(item)}
            />
          </TextWrapper>
        </Row>

        <DescriptionTitle>Descrição do livro</DescriptionTitle>
        <DescriptionText>{summary}</DescriptionText>
      </Content>
    </Container>
  );
}
