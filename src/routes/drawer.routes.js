import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../../assets/colors';
import Sidebar from '../components/Sidebar';
import BookDetails from '../screens/stackScreens/BookDetails';
import {
  AboutThisApp,
  BooksRecommendations,
  Cytogenetics,
  Home,
  MolecularGenetics,
  TransmissionGenetics,
} from '../screens/drawerScreens';

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
            backgroundColor: Colors.PRIMARY_BLUE,
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

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      drawerContent={ props => <Sidebar {...props} /> }
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
        name="AboutThisApp" 
        component={AboutThisApp} 
        options={{ drawerLabel: "Sobre o Aplicativo" }} 
      />
    </Drawer.Navigator>
  );
}
