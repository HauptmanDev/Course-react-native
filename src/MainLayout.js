import React, {useState, useContext} from 'react'
import {View, StyleSheet, Alert} from "react-native";

import {Navbar} from "./components/Navbar";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {THEME} from "./theme";
import {ScreenContext} from "./context/screen/screenContext";

export const MainLayout = () => {
    const {todoId} = useContext(ScreenContext);
    const content = todoId ? <TodoScreen/> : <MainScreen/>;
    return (
        <View style={styles.wrapper}>
            <Navbar title='Todo App'/>
            <View style={styles.container}>{content}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: THEME.PADDING_VERTICAL,
    },
    wrapper: {
        flex: 1,

    }
});
