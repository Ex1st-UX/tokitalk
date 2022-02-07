import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image,} from 'react-native';

export const Register = ({navigation}) => {
    const [isActionState, setActionState] = useState('register');
    const placeholder = isActionState == 'register' ? 'Make' : 'Enter';
    const submitButton = isActionState == 'register' ? 'Register' : 'Sign in'
    const changeActionButton = isActionState == 'register' ? 'I already have an account' : 'I havent got an account';

    const onChangeAction = () => {
        if (isActionState == 'register') {
            setActionState('login');
        } else {
            setActionState('register');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.topWrapper}>
                <Image source={require('./avatar-logo.png')} style={{width: 100, height: 100}}/>
            </View>
            <View style={styles.formWrapper}>
                <TextInput
                    placeholder={placeholder + " your username"}
                    style={styles.loginInput}
                />
                <TextInput
                    placeholder={placeholder + " your password"}
                    style={styles.loginInput}
                />
                {
                    isActionState == 'register' ?
                        <TextInput
                            placeholder="Re-enter your password"
                            style={styles.loginInput}
                        />
                        :
                        <Text></Text>
                }
                <View style={styles.buttonsWrapper}>
                    <TouchableOpacity>
                        <Text style={styles.presentationButtonText} onPress={onChangeAction}>{changeActionButton}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.startButtonWrapper} onPress={() => navigation.navigate('contacts')}>
                        <Text style={styles.startButtonText}>{submitButton}</Text>
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
    formWrapper: {},
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
    },
    topWrapper: {
        alignItems: 'center',
        marginBottom: 40
    }
});