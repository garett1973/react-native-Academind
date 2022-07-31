import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem({ goal, onRemoveGoal }) {
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#33ffff'}} onPress={onRemoveGoal.bind(this, goal.item.key)}>
                <Text style={styles.goalText}>{goal.item.text}</Text>
            </Pressable>
        </View>

    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        borderRadius: 6,
        marginTop: 14,
        backgroundColor: '#8f2bbb',
        color: '#fff',
    },
    goalText: {
        padding: 8,
        color: '#fff',
        fontSize: 16,
    }
});