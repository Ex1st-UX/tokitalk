import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {ChatList} from "./ChatsList";

export const Contacts = () => {
    return (
        <View style={styles.container}>
            <View style={styles.chatsContainer}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 10}}>
                        <TextInput
                            style={styles.searchUsersInput}
                            placeholder="Search users"
                        />
                    </View>
                    <View style={{flex: 1, textAlign: 'right', justifyContent: 'center'}}>
                        <MaterialIcons name="add" size={22} color="black" />
                    </View>
                </View>
                <ChatList/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchUsersInput: {
        backgroundColor: '#F7F7FC',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        fontWeight: 400
    },
    chatsContainer: {
        padding: 24
    },
});
