import styled from 'styled-components/native';

import Colors from '../../../assets/colors';
import { 
  MAX_HEADER_HEIGHT, 
  SCREEN_HEIGHT, 
  SCREEN_WIDTH 
} from '../../../assets/constants';

export const Container = styled.View`
  flex: 1;
  background: ${Colors.WHITE};
  padding: 30px ${SCREEN_WIDTH * 0.1}px;
`;

export const ImageContainer = styled.View`
  justify-content: center;
`;

export const FailImage = styled.Image`
  height: ${SCREEN_HEIGHT * 0.12}px;
  width: ${SCREEN_HEIGHT * 0.12}px;
  margin-right: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const TextWrapper = styled.View`
  flex-shrink: 1;
  align-items: center;
  justify-content: center;
`;

export const TitleMessage = styled.Text`
  color: ${Colors.BLACK};
  font-size: 20px;
  font-weight: bold;
  /* text-align: center; */
`;

export const MainTitle = styled(TitleMessage)`
  margin-bottom: 10px;
  font-size: 36px;
`;

export const SearchTerm = styled(TitleMessage)`
  text-decoration-line: underline;
`;

export const RecommendationsContainer = styled.View`
  margin: 20px 0;
`;

export const RecommendationText = styled.Text`
  color: ${Colors.BLACK};
  margin: 2px 0;
`;

export const SubTitleMessage = styled.Text`
  color: ${Colors.BLACK};
  font-weight: bold;
  font-size: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 10px 0 ${MAX_HEADER_HEIGHT}px 0;
`;