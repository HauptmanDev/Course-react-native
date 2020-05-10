import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Keyboard, Alert} from 'react-native';
import {THEME} from "../theme";
import {AntDesign} from '@expo/vector-icons'

export const AddComponent = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
            Keyboard.dismiss();
        } else {
            Alert.alert('Не может быть пустым')
        }
    };
    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                       value={value}
                       placeholder='Введите название дела'
                       onChangeText={text => setValue(text)}
                       autoCorrect={false}
                       autoCapitalize='none'
            />
            <AntDesign.Button name='pluscircleo' onPress={pressHandler}>Добавить</AntDesign.Button>
        </View>
    )
};

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '60%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
        padding: 10,
    }
});
