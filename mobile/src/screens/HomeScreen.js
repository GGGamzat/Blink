import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, ScrollView } from "react-native";

// import profile from '../../assets/profile.png';
import Profile from '../../assets/icons/profile.svg';
import MenuIcon from '../../assets/icons/menu-icon.svg';
import CloseIcon from '../../assets/icons/close-icon.svg';


const HomeScreen = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        //<SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.logo}>Blink</Text>

                <TouchableOpacity onPress={() => setMenuOpen(true)} style={[styles.menu_btn, menuOpen && styles.active]}>
                    <MenuIcon />
                </TouchableOpacity>

                <Modal visible={menuOpen} transparent={true} animationType='slide' onRequestClose={() => setMenuOpen(false)}>
                    <View style={styles.menu_block}>
                        <View style={styles.menu_block__container}>
                            <Text style={styles.menu__title}>Меню</Text>
                            <TouchableOpacity onPress={() => setMenuOpen(false)} style={styles.closeBtn}>
                                <CloseIcon />
                            </TouchableOpacity>
                            <ScrollView>
                                <View style={styles.verticalContainer}>
                                    <Text>Главная</Text>
                                    <Text>Новости</Text>
                                    <Text>Контакты</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>

            </View>
        //</SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    logo: {
        fontFamily: "MontserratBold",
        fontSize: 25,
    },
    menu_btn: {
    },
    active: {
    // стили для активного состояния
    backgroundColor: '#e0e0e0',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default HomeScreen;


            // <button onClick={() => setProfileOpen(prev => !prev)} className={`interaction-btn short-btn profile-btn ${profileOpen && 'active'}`}>
            //   <img src="/img/icons/profile.svg" alt="" />
            // </button>

            // {profileOpen && (
            //   <div className="offer-auth">
            //     <div className="offer-auth__upper">
            //       <h3>Войдите в аккаунт</h3>
            //       <button className="close-btn" onClick={() => setProfileOpen(false)}><img src="/img/icons/close-icon.svg" alt="" /></button>
            //     </div>
            //   </div>
            // )}