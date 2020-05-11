import React, {useState} from 'react';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'

import {MainLayout} from "./src/MainLayout";
import {TodoState} from "./src/context/todo/TodoState";

async function loadApplication() {
    await Font.loadAsync({
        'roboto-regular': require('../../projects/react-native-demo/assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('../../projects/react-native-demo/assets/fonts/Roboto-Bold.ttf')
    })
}

export default function App() {

    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return <AppLoading startAsync={loadApplication} onError={err => console.log(err)}
                           onFinish={() => setIsReady(true)}/>
    }

    return <TodoState><MainLayout/></TodoState>;
};

