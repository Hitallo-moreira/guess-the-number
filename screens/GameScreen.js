import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/Title';
function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent´s Guess</Title>
            <Text style={styles.title}>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
});

export default GameScreen;