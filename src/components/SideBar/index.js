import React from "react";
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  CardItem,
  Left,
} from "native-base";

import Images from '../../../assets/images';
import Colors from '../../../assets/colors'
import {
  Content,
  DrawerCover,
  DarkImageCover,
  Title,
  Description,
  RouteName,
  Separator
} from './styles';

export default function SideBar() {
  const navigation = useNavigation();

  const routesData = [
    {
      id: 0,
      name: "Início",
      route: "Home",
      icon: "home"
    }, {
      id: 1,
      name: "Genética Molecular",
      route: "MolecularGenetics",
      icon: "molecule"
    }, {
      id: 2,
      name: "Genética da Transmissão",
      route: "TransmissionGenetic",
      icon: "transition"
    }, {
      id: 3,
      name: "Citogenética",
      route: "Cytogenetic",
      icon: "microscope"
    }, {
      id: 4,
      name: "Indicações de Livros",
      route: "Books",
      icon: "library-books"
    }, {
      id: 5,
      name: "Sobre o Aplicativo",
      route: "AboutThisApp",
      icon: "information-outline"
    },
  ];

  return (
    <Container>
      <Content bounces={false}>
        <DrawerCover source={Images.sideBar.drawerCover}> 
          <DarkImageCover> 
            <Title>Geneall</Title>
            <Description>Aprenda genética</Description>
          </DarkImageCover>
        </DrawerCover>

        <View>
          { routesData && Object.keys(routesData).length
            ? routesData.map(data => (
              <View key={data.id} >
                <CardItem
                  button
                  noBorder
                  onPress={() => navigation.navigate(data.route)}
                >
                  <Left>
                    <Icon name={data.icon} size={30} color={Colors.PRIMARY_BLUE} />
                    <RouteName>{data.name}</RouteName>
                  </Left>
                </CardItem>
                
                { data.route === 'Home' || data.route === 'Cytogenetic' ? 
                  <Separator />
                : null }
              </View>
              ))
            : null }
        </View>
      </Content>
    </Container>
  );
}