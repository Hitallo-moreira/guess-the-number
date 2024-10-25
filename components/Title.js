import { Text, StyleSheet } from "react-native";
import Colors from '../utils/colors';

export default function Title({children}) {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.defaultYellow,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.defaultYellow,
        padding: 12
    }
});