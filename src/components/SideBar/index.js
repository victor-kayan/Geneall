import React, { Component } from "react";
import { ImageBackground, Platform, Dimensions, StyleSheet } from "react-native";

import {
  Content,
  Text,
  CardItem,
  Container,
  Left,
  View,
} from "native-base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Images from '../../../assets/images';
import Colors from '../../../assets/colors'

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
    route: "AppInfo",
    icon: "information-outline"
  },
];

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <ImageBackground source={Images.sideBar.drawerCover} style={styles.drawerCover}> 
            <View style={styles.darkImageCover}> 
              <Text style={styles.title}>Geneall</Text>
              <Text style={styles.description}>Aprenda genética</Text>
            </View>
          </ImageBackground>

          <View>
            { routesData && Object.keys(routesData).length
              ? routesData.map(data => (
                <View key={data.id} >
                  <CardItem
                    button
                    noBorder
                    onPress={() => this.props.navigation.navigate(data.route)}
                  >
                    <Left>
                      <Icon name={data.icon} size={30} color={Colors.PRIMARY_BLUE} />
                      <Text style={styles.text}>{data.name}</Text>
                    </Left>
                  </CardItem>
                  
                  { data.route === 'Home' || data.route === 'Cytogenetic' ? 
                    <View style={styles.separator}/>
                  : null }
                </View>
                ))
              : null }
          </View>
        </Content>
      </Container>
    );
  }
}

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  drawerCover: {
    alignSelf: "stretch",
    height: deviceHeight / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10,
  },
  darkImageCover: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  title: {
    color: '#FFF',
    fontSize: 50,
    marginBottom: 5,
    fontFamily: 'Mollen Personal Use-Bold',
  },
  description: {
    fontSize: 16,
    marginHorizontal: 20,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Mollen Personal Use-Bold',
  },
  drawerImage: {
    position: "absolute",
    left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
    top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
    width: 210,
    height: 75,
    resizeMode: "cover"
  },
  text: {
    fontSize: 16,
    marginLeft: 20,
    color: '#333'
  },
  textDivider: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 12,
    marginLeft: 20
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  },
  separator: {
    backgroundColor: "#CCC",
    height: 1,
    width: '76%',
    marginVertical: 10,
    alignSelf: "flex-end"
  }
});
