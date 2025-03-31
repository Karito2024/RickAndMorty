import React from 'react'
import { Character } from '../types/character';
import { Image, View } from 'react-native-reanimated/lib/typescript/Animated';
import { StyleSheet, Text } from 'react-native';

interface Props{
    character:Character;
}
const  CharacerCard=({character}:Props) =>{
  return (
    <View style={styles.card}>
        <Image source={{uri:character.image}} style={styles.image}></Image>
        <Text style={styles.name}>{character.name}</Text>
        <Text>{character.species}-{character.status}</Text>
    </View>
  );
};

const styles=StyleSheet.create({
    card:{
        marginBottom:10,
        padding:10,
        backgroundColor:`#eee`,
        borderRadius:10,
    },
    image:{
        width:`100%`,
        height:200,
        borderRadius:10
    },
    name:{
        fontSize:18,
        fontWeight:`bold`,
        marginTop:5,
    }
});