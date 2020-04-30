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
import Colors from '../../../assets/colors';
{/* Authors credits:
  * Icons made by Vitaly Gorbachev (https://www.flaticon.com/authors/vitaly-gorbachev) 
  * and by Freepik (https://www.flaticon.com/authors/freepik)
  * from www.flaticon.com.
*/}
import {
  HomeSvg,
  MoleculeSvg,
  DnaSvg,
  MicroscopeSvg,
  BookSvg,
  InformationSvg
} from '../../../assets/svg';
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
      Icon: HomeSvg
    }, {
      id: 1,
      name: "Genética Molecular",
      route: "MolecularGenetics",
      Icon: MoleculeSvg
    }, {
      id: 2,
      name: "Genética da Transmissão",
      route: "TransmissionGenetic",
      Icon: DnaSvg
    }, {
      id: 3,
      name: "Citogenética",
      route: "Cytogenetic",
      Icon: MicroscopeSvg
    }, {
      id: 4,
      name: "Indicações de Livros",
      route: "Books",
      Icon: BookSvg
    }, 
    {
      id: 5,
      name: "Sobre o Aplicativo",
      route: "AboutThisApp",
      Icon: InformationSvg
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
                    <data.Icon width={30} height={30} />
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