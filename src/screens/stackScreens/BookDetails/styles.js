import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import Colors from '../../../../assets/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../assets/constants';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  }
})`
  flex: 1;
  background: ${Colors.WHITE};
`;

export const Content = styled.View`
  margin-top: 20px;
  width: 90%;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const ImageWrapper = styled.View`
  justify-content: center;
  margin-right: ${SCREEN_WIDTH * 0.03}px;
`;

export const CoverImage = styled.Image`
  height: ${SCREEN_HEIGHT * 0.25}px;
  aspect-ratio: ${ 1781/2560 }; /* Average aspect ratio of used images. Keeps the proportion */
  border-radius: 5px;
`;

export const TextWrapper = styled.View`
  flex: 1;
  flex-grow: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${Colors.BLACK};
  font-family: Roboto-Bold;
  font-size: 24px;
`;

export const SubTitle = styled.Text`
  font-family: Roboto-Regular;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
`;

export const Author = styled.Text`
  font-family: Roboto-Regular;
  font-size: 16px;
  margin: 8px 0;
  color: ${Colors.GRAY};
`;

export const GridList = styled(FlatList)``;

export const GridItem = styled.View`
  flex-grow: 1;
  margin: 3px 2.5px 3px 2.5px;
  border-color: #666;
  border-width: 0.7px;
  border-radius: 100px;
  /* padding: 3px; */
  height: 24px;
  align-items: center;
  justify-content: center;
`;

export const Keyword = styled.Text`
  color: #666;
  font-family: Roboto-Light;
  font-size: 12px;
`;

export const DescriptionTitle = styled(Title)`
  font-size: 20px;
  align-self: stretch;
  margin: 20px 0;
`;

export const DescriptionText = styled.Text`
  font-family: Roboto-Light;
  font-weight: 600;
  color: ${Colors.BLACK};
  line-height: 18px;
  margin-bottom: 30px;
`;
