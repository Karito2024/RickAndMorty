import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const RecuperarPasswordScreen = ({ navigation }: any) => {
    const [correo, setCorreo] = useState('');

    const manejarRecuperacion = () => {
        if (!correo || !correo.includes('@')) {
            Alert.alert('Error', 'Por favor, introduce un correo electrónico válido');
            return;
        }

        // Simular envío de correo
        Alert.alert(
            'Recuperación Enviada',
            `Hemos enviado un correo a ${correo} con instrucciones para recuperar tu contraseña.`
        );

        // Regresar al login (opcional)
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recuperar Contraseña</Text>

            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                keyboardType="email-address"
                value={correo}
                onChangeText={setCorreo}
            />

            <Button title="Enviar Instrucciones" onPress={manejarRecuperacion} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
});

export default RecuperarPasswordScreen;
