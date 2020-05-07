import React from 'react'
import {StyleSheet, View, FlatList, Image} from 'react-native'
import {AddComponent} from "../components/AddComponent";
import {Todo} from "../components/Todo";

export const MainScreen = ({todos, addTodo, removeTodo, openTodo}) => {
    let content = (
        <FlatList
            data={todos}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Todo todo={item} removeTodo={removeTodo} openTodo={openTodo}/>}
        />
    );
    if (todos.length === 0) {
        // content = <View style={styles.imageWrap}><Image style={styles.image} source={{uri:'https://i.pinimg.com/originals/84/b1/06/84b1065e798f61aa80b8670a4b6fbb4d.png'}}/></View>
        content = <View style={styles.imageWrap}><Image style={styles.image} source={require('../../assets/no-items.png')}/></View>
    }
    return (
        <View>
            <AddComponent onSubmit={addTodo}/>
            {content}
        </View>
    )
};

const styles = StyleSheet.create({
    imageWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    }
});
