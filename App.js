import * as React from 'react';
import {View, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Welcome} from './components/auth/Welcome';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Welcome/>
        </NavigationContainer>
    );
}

export default App;