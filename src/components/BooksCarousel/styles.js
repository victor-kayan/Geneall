import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import BOOKS_DATA from '../../../assets/data/books';
import { SCREEN_WIDTH } from '../../../assets/constants';

const dotWidth = 8;

function calculatePaginationDotsMargin() {
  const dotsLength = BOOKS_DATA.length;
  const remainingPixelsInWidth = (SCREEN_WIDTH * 0.5) - (dotWidth * dotsLength);
  const marginHorizontal = (remainingPixelsInWidth / dotsLength) / 4;
  
  return Math.round(marginHorizontal);
}

export const Container = styled.View`
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  border-radius: 10px;
`;

export const styles = StyleSheet.create({
  slider: {
    flex: 1,
    overflow: 'visible',
  },
  slide: {
    flex: 1
  },
  sliderContentContainer: {
    paddingVertical: 10
  },
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: 10,
    aspectRatio: 1781/2560 // Keep correct image proportion
  },
  paginationContainer: {
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: calculatePaginationDotsMargin()
  }
})