import React, { memo } from 'react';
import { SectionList } from 'react-native';

import Animated from 'react-native-reanimated';

import SectionListItem from '../SectionListItem';
import SectionHeader from '../SectionHeader';
import Colors from '../../../assets/colors';
import { MIN_HEADER_HEIGHT } from "../../../assets/constants";

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

function AnimatedAlphabeticalList(props) {
  return (
    <AnimatedSectionList
      sections={ props.data }
      keyExtractor={ item => item.concept }
      renderItem={ ({item}) =>  
        <SectionListItem item={item} /> 
      }
      renderSectionHeader={ ({section}) => 
        <SectionHeader section={section} /> 
      }
      stickySectionHeadersEnabled
      style={{ 
        backgroundColor: Colors.WHITE, 
        marginBottom: MIN_HEADER_HEIGHT,
        paddingTop: 32
      }}
    />
  );
}

export default memo(AnimatedAlphabeticalList);