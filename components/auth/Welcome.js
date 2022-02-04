import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Register} from './Register'

const Stack = createNativeStackNavigator();

export const Welcome = () => {

    const WelcomeView = ({navigation}) => {
        return (
            <View style={styles.bodyWrapper}>
                <View style={styles.topWrapper}>
                    <Image
                        source={require('./040201.png')}
                        style={styles.frontImage}
                    />
                </View>
                <View style={styles.bottomWrapper}>
                    <Text style={styles.frontText}>TokiTalk doesn't save your information: 100% privacy</Text>
                </View>
                <View style={styles.buttonsWrapper}>
                    <TouchableOpacity>
                        <Text style={styles.presentationButtonText}>How does it work?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.startButtonWrapper} onPress={() => navigation.navigate('register')}>
                        <Text style={styles.startButtonText}>Start secret messaging</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <Stack.Navigator
            screenOptions={{
                animationEnabled: true,
                animationTypeForReplace: 'pop',
                headerShown: false,
                headerTitleStyle: {display: 'none'}
            }}
        >
            <Stack.Screen name="welcome" component={WelcomeView}/>
            <Stack.Screen
                name="register"
                component={Register}
                options={{headerShown: true}}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    bodyWrapper: {
        padding: 60,
        backgroundColor: 'white',
        alignItems: 'center',
        flex: 1
    },
    topWrapper: {
        flex: 3
    },
    frontImage: {
        width: 250,
        height: 250,
    },
    bottomWrapper: {
        flex: 2
    },
    frontText: {
        fontWeight: '700',
        fontSize: 24,
        textAlign: 'center'
    },
    buttonsWrapper: {
        flex: 1,
    },
    startButtonWrapper: {
        backgroundColor: "blue",
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 60
    },
    startButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 600,
        alignSelf: "center",
    },
    presentationButtonText: {
        alignSelf: "center",
        fontSize: 14,
        fontWeight: 600,
        marginBottom: 10
    }
});

