import styled from 'styled-components/native';

import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../../../assets/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../assets/constants';

export const Container = styled.View `
  flex: 1;
`;

export const StyledSwiper = styled(Swiper).attrs({
  paginationStyle: {
    position: 'absolute',
    bottom: '3%',
    height: 14,
  },
  dotStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    marginBottom: 0,
    marginTop: 0,
    marginRight: 5,
    marginLeft: 5,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activeDotStyle: {
    backgroundColor: Colors.PRIMARY_BLUE,
    marginBottom: 0,
    marginTop: 0,
    width: 14,
    height: 14,
    borderRadius: 8
  },
  buttonWrapperStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: '3%',
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

export const Content = styled.View`
  flex: 1;
  width: 90%;
  align-self: center;
  margin-bottom: ${SCREEN_HEIGHT * 0.06 + 14}px;
  justify-content: center;
`;

export const ContentWithoutMargin = styled(Content)`
  margin: 0;
  justify-content: space-between;
  margin: ${SCREEN_HEIGHT * 0.03}px 0;
`;

export const Title = styled.Text`
  color: ${ Colors.BLACK };
  font-family: Roboto-Bold;
  font-size: 30px;
  margin-bottom: ${SCREEN_HEIGHT * 0.05}px;
`;

export const TitleWithoutMargin = styled(Title)`
  margin: 0;
`;

export const Description = styled.Text`
  color: ${Colors.BLACK};
  font-family: Roboto-Light;
  font-size: 18px;
  line-height: 26px;
`;

export const SmallerDescription = styled(Description)`
  font-size: 16px;
  line-height: 20px;
  margin-top: ${SCREEN_HEIGHT * 0.01}px;
`;

export const DescriptionWithMargin = styled(Description)`
  margin-top: 8px;
`;

export const Bold = styled.Text`
  font-family: Roboto-Regular;
`;

export const Italic = styled.Text`
  font-style: italic;
`;

export const FormContainer = styled.View``;

export const Label = styled(Title)`
  margin-bottom: 5px;
  font-size: 18px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: Colors.GRAY
})`
  height: 20px;
  padding: 0;
  color: ${ Colors.BLACK };
  font-size: 16px;
`;

export const ButtonBackground = styled.View`
  background: ${ Colors.PRIMARY_BLUE };
  align-self: stretch;
  border-radius: 100px;
`;

export const SubmitButton = styled.TouchableOpacity`
  padding: 10px 0;
  border-radius: 100px;
  width: 100%;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${ Colors.WHITE };
  font-family: Roboto-Bold;
  font-size: 16px;
`;
