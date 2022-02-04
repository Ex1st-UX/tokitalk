import * as React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export const Register = () => {
    return (
        <View style={styles.container}>
            <View style={styles.formWrapper}>
                <TextInput
                    placeholder="Make your username"
                    style={styles.loginInput}
                />
                <TextInput
                    placeholder="Make your password"
                    style={styles.loginInput}
                />
                <TextInput
                    placeholder="Re-enter your password"
                    style={styles.loginInput}
                />
                <View style={styles.buttonsWrapper}>
                    <TouchableOpacity>
                        <Text style={styles.presentationButtonText}>I already have an accountt</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.startButtonWrapper} onPress={() => navigation.navigate('register')}>
                        <Text style={styles.startButtonText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center'
    },
    formWrapper: {
    },
    loginInput: {
        borderRadius: 5,
        backgroundColor: '#F7F7FC',
        padding: 8,
        width: '100%',
        marginBottom: 10
    },
    buttonsWrapper: {
        marginTop: 60
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