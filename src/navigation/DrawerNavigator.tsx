
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { Character } from '../types/character';


const Drawer = createDrawerNavigator<RootDrawerParamList>();
export type RootDrawerParamList = {
    Inicio: undefined; // No recibe parámetros
    Detalles: { character: Character }; // Recibe un objeto character
  };

const DrawerNavigator = () => {
  return (
    
    <Drawer.Navigator initialRouteName='Inicio'>
        <Drawer.Screen name='Inicio' component={HomeScreen}/>
        <Drawer.Screen name='Detalles' component={DetailsScreen}/>
    </Drawer.Navigator>
    
  )
}

export default DrawerNavigator
