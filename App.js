import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

export default function App() {
    const [todoId, setTodoId] = useState(null);
    const [todos, setTodos] = useState([]);

    const addTodo = title => {
        setTodos(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                title
            }
        ])
    };
    const removeTodo = id => {
        const todo = todos.find(el => el.id === id);
        Alert.alert(
            'Удаление элемента',
            `Хотите удалить ${todo.title}?`,
            [
                {text: 'Отмена'},
                {
                    text: 'Ok', onPress: () => {
                        setTodoId(null);
                        setTodos(prev => prev.filter(todo => todo.id !== id))
                    }
                },
            ],
            {cancelable: false}
        );

    };
    const updateTodo = (id, title) => {
        setTodos(prev =>
            prev.map(todo => {
                if (todo.id === id) {
                    todo.title = title
                }
                return todo
            })
        )
    };

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
        content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo} removeTodo={removeTodo} onSave={updateTodo}/>
    }
    return (
        <View>
            <Navbar title='Todo App!' />
            <View style={styles.container}>{content}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }
})

