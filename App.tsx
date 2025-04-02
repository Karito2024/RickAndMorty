import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './src/screens/HomeScreen';
// import DetailsScreen from './src/screens/DetailsScreen';
import 'react-native-gesture-handler';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigation from './src/navigation/DrawerNavigator';
// const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation/>
      {/* <Menu.Navigator initialRouteName="Inicio">
        <Menu.Screen name="Inicio" component={HomeScreen} />
        <Menu.Screen name="Detalles" component={DetailsScreen} />
      </Menu.Navigator> */}
    </NavigationContainer>
  );
};

export default App;