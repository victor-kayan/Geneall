import React, { useRef, useState, memo } from 'react';

import { useNavigation } from '@react-navigation/native';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';

import BOOKS_DATA from '../../../assets/data/books';
import Colors from '../../../assets/colors';
import { SCREEN_WIDTH } from '../../../assets/constants';
import { Container, Button, styles } from './styles';

function screenWidthPercentageInPixels(percentage) {
  const value = (percentage * SCREEN_WIDTH) / 100;
  return Math.round(value);
}

const slideWidth = screenWidthPercentageInPixels(65);
const itemHorizontalMargin = screenWidthPercentageInPixels(2);
const itemWidth = slideWidth + itemHorizontalMargin * 2;

function BooksCarousel() {
  const navigation = useNavigation();
  const carouselElement = useRef(null);
  const [ currentActiveSlide, setCurrentActiveSlide ] = useState(0);

  function navigateToBookDetailsScreen(bookData) {
    navigation.navigate('Books', { 
      screen: 'BookDetails', 
      params: { bookData }
    });
  }

  function _renderItem({ item }, parallaxProps) {
    return (
      <Button 
        activeOpacity={ 1 } 
        onPress={() => { navigateToBookDetailsScreen(item) }}
      >
        <ParallaxImage
          source={ item.coverIllustration }
          containerStyle={ styles.imageContainer }
          style={ styles.image }
          parallaxFactor={ 0 }
          { ...parallaxProps }
        />
      </Button>
    )
  }

  return (
    <Container>
      <Carousel
        ref={ carouselElement }
        data={ BOOKS_DATA }
        renderItem={ _renderItem }
        sliderWidth={ SCREEN_WIDTH }
        itemWidth={ itemWidth }
        hasParallaxImages={ true }
        inactiveSlideScale={ 0.85 }
        inactiveSlideOpacity={ 0.6 }
        loop={ true }
        loopClonesPerSide={ 2 }
        containerCustomStyle={ styles.slider }
        contentContainerCustomStyle={ styles.sliderContentContainer }
        onSnapToItem={ index => setCurrentActiveSlide(index) }
      />
      <Pagination
        dotsLength={ BOOKS_DATA.length }
        activeDotIndex={ currentActiveSlide }
        containerStyle={ styles.paginationContainer }
        dotStyle={ styles.paginationDot }
        dotColor={ Colors.PRIMARY_GREEN }
        inactiveDotColor={ Colors.PRIMARY_GREEN }
        inactiveDotOpacity={ 0.4 }
        inactiveDotScale={ 0.6 }
        carouselRef={ carouselElement }
        tappableDots={ !!carouselElement }
      />
    </Container>
  );
}

export default memo(BooksCarousel);