import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {UserMessages} from "./UserMessages";
import { FontAwesome } from '@expo/vector-icons';

export const ChatDetail = () => {
    return (
        <View style={styles.container}>
            <View style={styles.messContainer}>
                <UserMessages/>
            </View>
            <View style={styles.userpanelContainer}>
                <View style={styles.userpanelWrapper}>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder={'Write your message'}
                            style={styles.inputMess}
                        />
                    </View>
                    <View style={styles.sendWrapper}>
                        <FontAwesome name="send" size={22} color="blue" />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    messContainer: {
        flex: 10,
    },
    userpanelContainer: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#EDEDED'
    },
    userpanelWrapper: {
        padding: 10,
        flexDirection: 'row',
    },
    inputMess: {
        borderRadius: 5,
        backgroundColor: '#F7F7FC',
        padding: 8,
        width: '100%',
        marginBottom: 10
    },
    inputWrapper: {
        flex: 10
    },
    sendWrapper: {
        flex: 1,
        padding: 5,
        textAlign: 'right'
    }
});