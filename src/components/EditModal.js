import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Button, Modal, Alert} from 'react-native'
import {THEME} from "../theme";

export const EditModal = ({visible, onCancel, value, onSave}) => {
    const [title, setTitle] = useState(value);
    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Не меньше трех символов')
        } else {
            onSave(title);
        }
    };
    return (
        <Modal visible={visible} animationType='fade' transparent={false}>
            <View style={styles.wrap}>
                <TextInput
                    placeholder='Введите название'
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLength={60}
                />
                <View style={styles.button}>
                    <Button title='Сохранить' onPress={saveHandler} color={THEME.GREY_COLOR}/>
                    <Button title='Отменить' onPress={onCancel} color={THEME.DANGER_COLOR}/>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    button: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});
