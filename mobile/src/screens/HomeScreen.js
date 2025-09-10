import { View, Text, StyleSheet } from "react-native";


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello World!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 50,
    },
    title: {
        fontSize: 50,
        color: 'blue',
    },
});

export default HomeScreen;