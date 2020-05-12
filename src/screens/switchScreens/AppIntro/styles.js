import styled from 'styled-components/native';

import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../../../assets/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../assets/constants';

export const Container = styled.View `
  flex: 1;
`;

export const StyledSwiper = styled(Swiper).attrs({
  paginationStyle: {
    position: 'absolute',
    bottom: SCREEN_HEIGHT * 0.03 + 5,
  },
  dotStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    marginBottom: 0,
    marginTop: 0,
    marginRight: 5,
    marginLeft: 5,
    width: 10,
    height: 10,
    borderRadius: 5
  },
  activeDotStyle: {
    backgroundColor: Colors.PRIMARY_BLUE,
    marginBottom: 0,
    marginTop: 0,
    width: 16,
    height: 16,
    borderRadius: 8
  },
  buttonWrapperStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    bottom: 10,
    left: 0,
    right: 0,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    paddingBottom: SCREEN_HEIGHT * 0.03,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  }
})``;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 5px 0;
`;

export const PrevButtonText = styled.Text`
  color: ${ Colors.BLACK };
  font-family: Roboto-Light;
  margin-left: ${SCREEN_WIDTH * 0.02}px;
`;

export const NextButtonText = styled(PrevButtonText)`
  margin: 0 ${SCREEN_WIDTH * 0.02}px 0 0;
`;

export const PrevButtonIcon = styled(Icon).attrs({
  name: 'arrow-left', 
  size: 16,
  color: Colors.BLACK
})``;

export const NextButtonIcon = styled(PrevButtonIcon).attrs({
  name: 'arrow-right', 
})``;

export const SlideContainer = styled.View `
  flex: 1;
  background-color: ${ Colors.WHITE };
  padding: 0;
  margin: 0;
`;