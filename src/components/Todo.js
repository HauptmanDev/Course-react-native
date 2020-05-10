import React from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import {AppText} from "./ui/AppText";

export const Todo = ({todo, removeTodo, openTodo}) => {
    return (
        <TouchableOpacity
            onLongPress={() => removeTodo(todo.id)}
            onPress={() => openTodo(todo.id)}
        >
            <View style={styles.todoBlock}>
                <AppText>{todo.title}</AppText>
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
    },
});
