import React, {useState, useEffect} from 'react'
import {StyleSheet, View, FlatList, Image, Dimensions} from 'react-native'

import {AddComponent} from "../components/AddComponent";
import {Todo} from "../components/Todo";
import {THEME} from "../theme";

export const MainScreen = ({todos, addTodo, removeTodo, openTodo}) => {
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2);
    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
            setDeviceWidth(width)
        };
        Dimensions.addEventListener('change', update);
        return () => {
            Dimensions.removeEventListener('change', update)
        }
    });
    let content = (
        <View style={{width: deviceWidth}}>
            <FlatList
                data={todos}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <Todo todo={item} removeTodo={removeTodo} openTodo={openTodo}/>}
            />
        </View>
    );
    if (todos.length === 0) {
        // content = <View style={styles.imageWrap}><Image style={styles.image} source={{uri:'https://i.pinimg.com/originals/84/b1/06/84b1065e798f61aa80b8670a4b6fbb4d.png'}}/></View>
        content = <View style={styles.imageWrap}><Image style={styles.image}
                                                        source={require('../../assets/no-items.png')}/></View>
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
