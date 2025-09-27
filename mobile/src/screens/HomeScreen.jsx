import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, ScrollView } from "react-native";

import Profile from '../../assets/icons/profile.svg';
import MenuIcon from '../../assets/icons/menu-icon.svg';
import CloseIcon from '../../assets/icons/close-icon.svg';


const HomeScreen = ({ navigation }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <View>
                <View style={styles.header}>
                    <Text style={styles.logo}>Blink</Text>

                    <TouchableOpacity onPress={() => setMenuOpen(true)} style={[styles.menu_btn, menuOpen && styles.active]}>
                        <MenuIcon style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>

                    <Modal style={styles.modalWindow} visible={menuOpen} transparent={true} animationType='slide' onRequestClose={() => setMenuOpen(false)}>
                        <View style={styles.menu_block}>
                            <View style={styles.menu_block__container}>
                                <View style={styles.menu_block__upper}>
                                    <Text style={styles.menu__title}>Menu</Text>
                                    <TouchableOpacity onPress={() => setMenuOpen(false)} style={styles.close_btn}>
                                        <CloseIcon />
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={styles.menu__list}>
                                        <Text style={styles.menu__item}>Home</Text>
                                        <Text style={styles.menu__item}>News</Text>
                                        <Text style={styles.menu__item}>Contacts</Text>
                                    </View>
                                </ScrollView>
                                <View style={styles.auth_btns}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Authorization')} style={styles.auth_btn}>
                                        <Text style={styles.auth_btn__text}>Sign In</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={styles.auth_btn}>
                                        <Text style={styles.auth_btn__text}>Sign Up</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.profile_btn}>
                                    <Text style={styles.auth_btn__text}>Profile</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 55,
        paddingHorizontal: 12,
        backgroundColor: '#00CC2D',
    },
    logo: {
        fontFamily: "MontserratBold",
        fontSize: 25,
    },
    menu_btn: {
        height: 40,
        padding: 10,
        backgroundColor: '#F5F5F7',
        borderRadius: 12,
    },
    modalWindow: {
    },
    menu_block: {
        padding: 30,
        position: 'absolute',
        right: 0,
        backgroundColor: '#757D79',
    },
    menu_block__container: {
        rowGap: 20,
    },
    menu_block__upper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menu__title: {
        fontFamily: 'MontserratBold',
        fontSize: 20,
    },
    menu__list: {
        flex: 1,
        alignItems: 'center',
        rowGap: 10,
    },
    menu__item: {
        fontFamily: 'MontserratMedium',
        fontSize: 18,
    },
    close_btn: {
        padding: 5,
        backgroundColor: '#E0E0E0',
        borderRadius: 12,
    },
    active: {
        // стили для активного состояния
        backgroundColor: '#e0e0e0',
    },
    auth_btns: {
        // flex: 1,
        flexDirection: 'row',
        columnGap: 10,
    },
    auth_btn: {
        padding: 10,
        backgroundColor: '#00B430',
        borderRadius: 10,
    },
    profile_btn: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#0045AD',
        borderRadius: 10,
    },
    auth_btn__text: {
        fontFamily: 'MontserratMedium',
        fontSize: 18,
    },
});

export default HomeScreen;