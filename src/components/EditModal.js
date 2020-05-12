import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Modal, Alert} from 'react-native'

import {THEME} from "../theme";
import {AppButton} from "./ui/AppButton";
import {AntDesign} from "@expo/vector-icons";

export const EditModal = ({visible, onCancel, value, onSave}) => {
    const [title, setTitle] = useState(value);
    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Недопустимая длина', 'Не менее трех символов')
        } else {
            onSave(title);
        }
    };
    const cancelHandler = ()=> {
        setTitle(value);
        onCancel()
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
                    <AppButton onPress={cancelHandler} color={THEME.DANGER_COLOR}>
                        Отменить
                    </AppButton>
                    <AppButton onPress={saveHandler} color={THEME.GREY_COLOR}>
                        Сохранить
                    </AppButton>

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
