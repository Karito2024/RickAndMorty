import React from 'react';
import { Image, Pressable, View, Text, StyleSheet } from 'react-native';
import { Character } from '../types/character';

interface Props {
    character: Character;
    onPress: () => void;
} 

const CharacerCard = ({ character, onPress }: Props) => {
    return (
        <Pressable onPress={onPress}> 
            <View style={styles.card}>
                <Image source={{ uri: character.image }} style={styles.image} />
                <Text style={styles.name}>{character.name}</Text>
                <Text>{character.species} - {character.status}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },
});

export default CharacerCard;