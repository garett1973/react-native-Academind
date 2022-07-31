import { StyleSheet, View, FlatList, Button } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {

  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function addGoalHandler(userInput) {
    setGoals(currentGoals => [...currentGoals,
      {text: userInput, key: Math.random().toString()} ]);
    closeAddGoalHandler();
  }

  function startAddGoalHandler() {
    setShowModal(true);
  }

  function closeAddGoalHandler() {
    setShowModal(false);
  }

  function removeGoalHandler(id) {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
  }

  return (
    <>
    <StatusBar style='dark' />
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#8f2bbb" onPress={startAddGoalHandler} />
        <GoalInput visible={showModal} onAddGoal={addGoalHandler} onCancel={closeAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={goal => {
          return (
            <GoalItem goal={goal} id={goal.item.key} onRemoveGoal={removeGoalHandler} />
          );
        }} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 100,
    paddingBottom: 50,
    backgroundColor: 'lightblue',
  },
  goalsContainer: {
    flex: 5,
  }
});
