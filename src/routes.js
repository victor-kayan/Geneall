import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SideBar from './components/SideBar';
import {
  AppInfo,
  Books,
  Cytogenetics,
  Home,
  MolecularGenetics,
  TransmissionGenetics,
} from './screens/DrawerScreens';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
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
    </NavigationContainer>
  );
}