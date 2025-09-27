import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Button, Modal, ScrollView } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CloseIcon from '../../assets/icons/close-icon.svg';


const ProfileScreen = ({ navigation }) => {
    const [msg, setMsg] = useState("");

    const API_URL = "http://192.168.0.194:8000/api";
    // const API_URL = "http://127.0.0.1:8000/api";

    const getProfile = async () => {
        try {
            const token = await AsyncStorage.getItem("access");
            const response = await axios.get(`${API_URL}/profile/`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setMsg("👤 Пользователь: " + response.data.username);
        } catch (error) {
            setMsg("❌ Нет доступа");
        }
    };

    const logout = async () => {
        await AsyncStorage.removeItem("access");
        navigation.replace("Authorization");
    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 60 }}><CloseIcon /></TouchableOpacity>

            <View style={styles.container}>
                <Text style={styles.msg}>{msg}</Text>
                <Button title="Обновить профиль" onPress={getProfile} />
                <Button title="Выйти" onPress={logout} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
})

export default ProfileScreen;