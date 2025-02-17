import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from '../utils/colors';

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetEnteredNumber() {
        setEnteredNumber('');
    }

    function confirmHandler() {
        const chosenNumber  = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be between 0 and 99'),
            [{ text: 'Ok', style: 'destructive', onPress: resetEnteredNumber}]
            return;
        }

        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad" 
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
                />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetEnteredNumber}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 16,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#3b021f ',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.2,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: Colors.defaultYellow,
        color: Colors.defaultYellow,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginVertical: 16,
    },
    buttonContainer: {
        flex: 1,
    }
});