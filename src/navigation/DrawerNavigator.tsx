import { createDrawerNavigator } from '@react-navigation/drawer'; // Importa el navegador tipo Drawer
import React from 'react';
import HomeScreen from '../screens/HomeScreen'; // Pantalla principal
import DetailsScreen from '../screens/DetailsScreen'; // Pantalla de detalles
import 'react-native-gesture-handler';
import LoginScreen from '../screens/LoginScreen';
import RecuperarPasswordScreen from '../screens/RecuperarPasswordScreen';

// Crea una instancia del navegador tipo Drawer
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Login">
      {/* Define la navegación con el Drawer y establece la pantalla inicial como "Inicio" */}
      <Drawer.Screen name='Login' component={LoginScreen} />
      <Drawer.Screen name="RecuperarPassword"
        component={RecuperarPasswordScreen}
        options={{ title: 'Recuperar Contraseña' }}
      />
      {/* Agrega la pantalla de login al Drawer */}
      <Drawer.Screen name="Home" component={HomeScreen} />
      {/* Agrega la pantalla de inicio al Drawer */}

      <Drawer.Screen name="Detalles" component={DetailsScreen} />
      {/* Agrega la pantalla de detalles al Drawer */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation; // Exporta el componente para su uso en la aplicación
