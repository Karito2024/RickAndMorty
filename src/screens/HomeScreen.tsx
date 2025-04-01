import React, { useEffect, useState } from 'react'
import { Character } from '../types/character';
import api from '../api/api';
import { ScrollView, Text } from 'react-native';
import global from '../styles/global';
import CharacerCard from '../components/CharacerCard';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const [character, setCharacters] = useState<Character[]>([]);
    const navigation = useNavigation(); // Hook de navegación aquí
    //Cargar los personajes desde la Api
    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await api.get(`/character`);
            setCharacters(response.data.results);
        };
        fetchCharacters();
    }, []);
    return (
        <ScrollView style={global.container}>
            <Text style={global.tittle}>Personajes de Rick and Morty</Text>
            {/*.map recorre cada personaje del arreglo character y renderiza un CharacterCard*/}
            {character.map((char) =>(
                 <CharacerCard
                 key={char.id}
                 character={char}
                 onPress={() => navigation.navigate("Detalles", { character: char })}
             />
            ))}
        </ScrollView>
  
)}
export default HomeScreen
