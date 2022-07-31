import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';
import React, { useState } from 'react';

function GoalInput( props ) {

    const [userInput, setUserInput] = useState('');

    function goalInputHandler(enteredText) {
        setUserInput(enteredText);
        }

    function addGoalHandler() {
        props.onAddGoal(userInput);
        setUserInput('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
            <Image source={require('../assets/goal.png')} style={styles.inputImage} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your course goal'
                    onChangeText={goalInputHandler}
                    value={userInput}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                    <Button 
                    color={'limegreen'} 
                    title='Add Goal'
                    onPress={addGoalHandler}
                    />
                    </View>
                    <View style={styles.button}>
                    <Button
                    color={'tomato'}
                    title='Cancel'
                    onPress={props.onCancel}
                    />
                    </View>
                </View>
            </View>
        </Modal>

    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: 'lightblue',
    },
    textInput: {
        width: '100%',
        borderColor: '#8f2bbb',
        borderWidth: 2,
        padding: 6,
        paddingStart: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '75%',
    },
    button: {
        width: '40%',
        marginHorizontal: 8,
    },
    inputImage: {
        width: 100,
        height: 100,
        marginBottom: 24,
    }
    });