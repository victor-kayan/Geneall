import React from "react";
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  CardItem,
  Left,
} from "native-base";

import { useIntro } from '../../contexts/intro';
import { sidebarCover } from '../../../assets/img';
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
  TextWrapper,
  Title,
  Username,
  RouteName,
  Separator
} from './styles';

export default function Sidebar() {
  const navigation = useNavigation();

  const { username } = useIntro();

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
        <DrawerCover source={sidebarCover}> 
          <DarkImageCover>
            <TextWrapper>
              {username ? (
                <>
                  <Title>Olá,</Title>
                  <Username>{`${username}!`}</Username>
                </>
              ) : (
                <Title>Olá!</Title>
              )}
            </TextWrapper>
          </DarkImageCover>
        </DrawerCover>

        <View>
          {routesData && Object.keys(routesData).length &&
            routesData.map(data => (
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
                
                {(data.route === 'Home' || data.route === 'Cytogenetic') && 
                  <Separator />
                }
              </View>
            ))
          }
        </View>
      </Content>
    </Container>
  );
}