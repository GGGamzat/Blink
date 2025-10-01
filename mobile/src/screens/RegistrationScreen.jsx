import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from "react-native";
import axios from "axios";

import CloseIcon from '../../assets/icons/close-icon.svg';


const RegistrationScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const API_URL = "http://192.168.0.194:8000/api";
    // const API_URL = "http://127.0.0.1:8000/api";

    const handleRegister = async () => {
        try {
            const response = await axios.post(`${API_URL}/register/`, {
                username,
                password,
            });
            setMessage("Регистрация успешна!");
        } catch (error) {
            setMessage("Ошибка: " + error.message);
        }
    };

    return (
        <>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 60 }}><CloseIcon /></TouchableOpacity>

            <View style={styles.container}>
                <Text style={styles.title}>Registration</Text>

                <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
                <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
                <Button title="Sign Up" onPress={handleRegister} />
                <Text style={styles.msg}>{message}</Text>
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
})

export default RegistrationScreen;