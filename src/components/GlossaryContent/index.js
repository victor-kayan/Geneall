import React, { useState } from "react";
import { View } from "react-native";

import Animated from "react-native-reanimated";
import { onScrollEvent } from "react-native-redash";

import Header from "../Header";
import NotFound from '../NotFound';
import DrawerButton from '../DrawerButton';
import SearchFilterInput, { INPUT_HEIGHT } from "../SearchFilterInput";
import AnimatedAlphabeticalList from '../AnimatedAlphabeticalList';
import { MAX_HEADER_HEIGHT } from "../../../assets/constants";
import { 
  AnimatedScrollContainer,
  Cover,
  AnimatedGradientContainer,
  Gradient,
  TitleContainer,
  AnimatedTitle,
  BlankBottomMargin
} from './styles';

const { interpolate, Extrapolate } = Animated;

export default function GlossaryScreenContent({ screenData: { title, glossary }, y }) {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ filteredData, setFilteredData ] = useState(glossary);
  const [ numberOfFilteredConcepts, setNumberOfFilteredConcepts ] = useState(glossary.length);

  const height = interpolate(y, {
    inputRange: [-MAX_HEADER_HEIGHT, -INPUT_HEIGHT / 2],
    outputRange: [0, MAX_HEADER_HEIGHT + INPUT_HEIGHT],
    extrapolate: Extrapolate.CLAMP,
  });

  const opacity = interpolate(y, {
    inputRange: [-MAX_HEADER_HEIGHT / 2, 0, MAX_HEADER_HEIGHT / 2],
    outputRange: [0, 1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  function onFilterInput({filteredGlossary, numberOfFilteredConcepts}) {
    setFilteredData(filteredGlossary);
    setNumberOfFilteredConcepts(numberOfFilteredConcepts);
  }

  function onResetState() {
    setFilteredData(glossary);
    setNumberOfFilteredConcepts(glossary.length);
  }

  return (
    <>
      <DrawerButton yValue={ y } />

      <AnimatedScrollContainer
        onScroll={onScrollEvent({ y })}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
        stickyHeaderIndices={[1]}
      >
        <Cover>
          <AnimatedGradientContainer style={{ height }}>
            <Gradient />
          </AnimatedGradientContainer>
          <TitleContainer>
            <AnimatedTitle style={{ opacity }}>{title}</AnimatedTitle>
          </TitleContainer>
        </Cover>

        <View style={{ marginTop: -INPUT_HEIGHT }}>
          <Header {...{ y, title }} />
          <SearchFilterInput 
            baseGlossary={ glossary }
            filterInput={ result => onFilterInput(result) }
            passSearchTerm={ term => setSearchTerm(term) }
            resetState={ () => onResetState() }
          />
        </View>

        { filteredData && numberOfFilteredConcepts > 0
          ? <>
              <AnimatedAlphabeticalList data={ filteredData } />
              { numberOfFilteredConcepts === 2 && <BlankBottomMargin /> } 
            </>
          : <NotFound currentScreen={ title } searchTerm={ searchTerm } />
        }

      </AnimatedScrollContainer>
    </>
  );
};