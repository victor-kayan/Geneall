import React, { memo } from 'react';
import { SectionList } from 'react-native';

import SectionListItem from '../SectionListItem';
import SectionHeader from '../SectionHeader';

function AlphabeticalList(props) {
  return (
    <>
      <SectionList
        sections={ props.data }
        keyExtractor={ item => item.concept }
        renderItem={ ({item}) =>  
          <SectionListItem item={item} /> 
        }
        renderSectionHeader={ ({section}) => 
          <SectionHeader section={section} /> 
        }
        stickySectionHeadersEnabled
        style={{ backgroundColor: '#FEFEFE', marginBottom: 30 }}
      />
    </>
  );
}

export default memo(AlphabeticalList);