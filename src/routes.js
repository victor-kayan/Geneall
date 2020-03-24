import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../assets/colors';
import SideBar from './components/SideBar';
import ConceptModal from './components/ConceptModal';
import {
  AppInfo,
  Books,
  Cytogenetics,
  Home,
  MolecularGenetics,
  TransmissionGenetics,
} from './screens/DrawerScreens';

const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainDrawerScreen() {
  return (
    <Drawer.Navigator 
        initialRouteName="Home"
        drawerContent={ props => <SideBar {...props} /> }
      >
        <Drawer.Screen 
          name="Home" 
          component={Home} 
          options={{ drawerLabel: "Início" }} 
        />
        <Drawer.Screen 
          name="MolecularGenetics" 
          component={MolecularGenetics} 
          options={{ drawerLabel: "Genética Molecular" }} 
        />
        <Drawer.Screen 
          name="TransmissionGenetic" 
          component={TransmissionGenetics} 
          options={{ drawerLabel: "Genética da Transmissão" }} 
        />
        <Drawer.Screen 
          name="Cytogenetic" 
          component={Cytogenetics} 
          options={{ drawerLabel: "Citogenética" }} 
        />
        <Drawer.Screen 
          name="Books" 
          component={Books} 
          options={{ drawerLabel: "Indicações de Livros" }} 
        />
        <Drawer.Screen 
          name="AppInfo" 
          component={AppInfo} 
          options={{ drawerLabel: "Sobre o Aplicativo" }} 
        />
      </Drawer.Navigator>
  );
}

function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainDrawerScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="ConceptModal" component={ConceptModal} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={Colors.PRIMARY_BLUE} 
      />

      <RootStackScreen />

    </NavigationContainer>
  );
}