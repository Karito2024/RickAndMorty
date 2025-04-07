import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }: any) => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const manejarLogin = () => {
        if (!usuario || !password) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }
        if (usuario === 'admin' && password === '1234') {
            navigation.navigate('Home', { user: usuario });
        } else {
            Alert.alert('Error', 'Credenciales incorrectas');
        }
    };

    const manejarRecuperarPassword = () => {
        if (!usuario) {
            Alert.alert('Atención', 'Por favor, escribe tu nombre de usuario para recuperar tu contraseña.');
            return;
        }
        // Simulación de recuperación
        Alert.alert(
            'Recuperación de Contraseña',
            `Se ha enviado un correo de recuperación para el usuario "${usuario}".`
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>

            <TextInput
                style={styles.imput}
                placeholder="Usuario"
                value={usuario}
                onChangeText={(text) => setUsuario(text)}
            />
            <TextInput
                style={styles.imput}
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />

            <Button title="Ingresar" onPress={manejarLogin} />

            <TouchableOpacity onPress={() => navigation.navigate('RecuperarPassword')} style={styles.link}>
                <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    imput: {
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: '#ccc',
    },
    link: {
        marginTop: 10,
        alignItems: 'center',
    },
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginTop: 10,
    },
});

export default LoginScreen;
