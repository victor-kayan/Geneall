import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import { 
  Header,
  OpenDrawerButton,
  PageTitle,
  RightMargin
} from './styles';

export default function DefaultHeader(props) {
  const navigation = useNavigation();

  return (
    <Header>
      <OpenDrawerButton onPress={() => { navigation.openDrawer() }}>
        <Icon
          name='menuunfold'
          size={30}
          color='#FFF'
        />
      </OpenDrawerButton>
      <PageTitle>{props.pageTitle}</PageTitle>
      <RightMargin />
    </Header>
  );
}
