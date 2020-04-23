import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import SideBar from '../components/SideBar';
import BookDetails from '../screens/StackScreens/BookDetails';
import {
  AppInfo,
  BooksRecommendations,
  Cytogenetics,
  Home,
  MolecularGenetics,
  TransmissionGenetics,
} from '../screens/DrawerScreens';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function BooksStack() {
  return (
    <Stack.Navigator
      initialRouteName='BooksRecommendation'
      headerMode='screen'
    >
      <Stack.Screen
        name='BooksRecommendation' 
        component={BooksRecommendations} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name='BookDetails'
        component={BookDetails}
        options={{ 
          headerTitle: 'Informações sobre o livro', 
          headerTintColor: '#FFF',
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#0793C3',
            shadowOpacity: 0,
            shadowOffset: { height: 0 },
            shadowRadius: 0,
            elevation: 0
          },
      }}
      />
    </Stack.Navigator>
  );
}

export default function MainDrawer() {
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
        component={BooksStack} 
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
