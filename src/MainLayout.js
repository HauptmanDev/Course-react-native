import React, {useState, useContext} from 'react'
import {View, StyleSheet, Alert} from "react-native";

import {Navbar} from "./components/Navbar";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {THEME} from "./theme";
import {TodoContext} from "./context/todo/todoContext";

export const MainLayout = () => {
    const {todos, addTodo, removeTodo, updateTodo} = useContext(TodoContext);
    const [todoId, setTodoId] = useState(null);
    // const [todos, setTodos] = useState([todoContext.todos]);

    // const addTodo = title => {
    //     setTodos(prev => [
    //         ...prev,
    //         {
    //             id: Date.now().toString(),
    //             title
    //         }
    //     ])
    // };
    // const removeTodo = id => {
    //     const todo = todos.find(el => el.id === id);
    //     Alert.alert(
    //         'Удаление элемента',
    //         `Хотите удалить ${todo.title}?`,
    //         [
    //             {text: 'Отмена'},
    //             {
    //                 text: 'Ok', onPress: () => {
    //                     setTodoId(null);
    //                     setTodos(prev => prev.filter(todo => todo.id !== id))
    //                 }
    //             },
    //         ],
    //         {cancelable: false}
    //     );
    // };
    // const updateTodo = (id, title) => {
    //     setTodos(prev =>
    //         prev.map(todo => {
    //             if (todo.id === id) {
    //                 todo.title = title
    //             }
    //             return todo
    //         })
    //     )
    // };

    let content = (
        <MainScreen
            todos={todos}
            addTodo={addTodo}
            removeTodo={removeTodo}
            openTodo={setTodoId}
        />
    );

    if (todoId) {
        const selectedTodo = todos.find(todo => todo.id === todoId);
        content =
            <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo} removeTodo={removeTodo} onSave={updateTodo}/>
    }
    return (
        <View>
            <Navbar title='Todo App'/>
            <View style={styles.container}>{content}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: THEME.PADDING_VERTICAL,
    }
});
