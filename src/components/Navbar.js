import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {THEME} from "../theme";
import {AppTextBold} from "./ui/AppTextBold";

export const Navbar = props => {
    return (
        <View style={{...styles.nav, ...Platform.select({
                ios: styles.navbarIOS,
                android: styles.navbarAndroid,
            })}}>
            <AppTextBold style={styles.text}>{props.title}</AppTextBold>
        </View>
    )
};

const styles = StyleSheet.create({
    nav: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    navbarIOS: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1,
    },
    text: {
        color: Platform.OS === 'ios'? THEME.MAIN_COLOR: '#fff',
        fontSize: 20,
    }
});
