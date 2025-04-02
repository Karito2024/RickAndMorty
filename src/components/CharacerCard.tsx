import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Character } from '../types/character';

// Componente que representa una tarjeta de personaje
const CharacterCard = ({ character, navigation }: { character: Character, navigation: any }) => {
  
  // Maneja la navegación a la pantalla de detalles cuando se presiona la tarjeta
  const handlePress = () => {
    navigation.navigate('Detalles', { character }); // Navega a "Detalles" pasando el personaje como parámetro
  };

  return (
    <TouchableOpacity onPress={handlePress}> {/* Hace que la tarjeta sea presionable */}
      <View style={styles.card}> {/* Contenedor con estilos de tarjeta */}
        
        {/* Imagen del personaje obtenida desde su URL */}
        <Image source={{ uri: character.image }} style={styles.image} />

        {/* Nombre del personaje con estilo destacado */}
        <Text style={styles.name}>{character.name}</Text>

        {/* Muestra la especie y el estado del personaje */}
        <Text>{character.species} - {character.status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterCard;

// Estilos para el componente
const styles = StyleSheet.create({
  card: {
    marginBottom: 10, // Espaciado inferior entre tarjetas
    padding: 10, // Espaciado interno
    backgroundColor: 'white', // Fondo blanco
    borderRadius: 10, // Bordes redondeados
  },
  image: {
    width: '100%', // Imagen ocupa todo el ancho del contenedor
    height: 200, // Altura fija de 200px
    borderRadius: 10, // Bordes redondeados
  },
  name: {
    fontSize: 18, // Tamaño de fuente grande para el nombre
    fontWeight: 'bold', // Texto en negrita
    marginTop: 5, // Espaciado superior
  },
});
