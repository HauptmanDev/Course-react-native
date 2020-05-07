import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export const Todo = ({todo, removeTodo, openTodo}) => {
    return (
        <TouchableOpacity
            onLongPress={() => removeTodo(todo.id)}
            onPress={() => openTodo(todo.id)}
        >
            <View style={styles.todoBlock}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    todoBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 5,
    }
});
