import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Modal, ScrollView } from "react-native";

import CloseIcon from '../../assets/icons/close-icon.svg';
import { ActivityIndicator } from 'react-native-web';


const API_URL = 'http://127.0.0.1:8000';

const RegistrationScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        if (!username || !password || !confirmPassword) {
            Alert.alert("Error", "All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Error", "The passwords don't match");
            return;
        }

        if (password.length < 6) {
            Alert.alert("Error", "The password must contain at least 6 characters.");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(`${API_URL}/api/register`, {
                username: username,
                password: password,
                password2: confirmPassword
            });

            Alert.alert("Success", "Registration was successful!")

            setUsername('');
            setPassword('');
            setConfirmPassword('');

            navigation.navigate('Home');
        } catch (error) {
        console.error('Ошибка регистрации:', error.response?.data);
        
        let errorMessage = 'Произошла ошибка при регистрации';
        
        if (error.response?.data?.username) {
            errorMessage = `Имя пользователя: ${error.response.data.username[0]}`;
        } else if (error.response?.data?.password) {
            errorMessage = `Пароль: ${error.response.data.password[0]}`;
        }
        
        Alert.alert('Ошибка', errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 60 }}><CloseIcon /></TouchableOpacity>

            <View style={styles.container}>
                <Text style={styles.title}>Registration</Text>

                <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
                <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} />
                <TextInput style={styles.input} placeholder="Confirm password" value={confirmPassword} onChangeText={setConfirmPassword} />

                <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator color="#fff"/>
                    ) : (
                        <Text style={styles.buttonText}>Register</Text>
                    )}
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    button: {
        height: 50,
        backgroundColor: '#007bff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default RegistrationScreen;