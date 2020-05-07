import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {THEME} from "../theme";

export const Navbar = props => {
    return (
        <View style={styles.nav}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    nav: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
});
