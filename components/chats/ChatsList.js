import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const ChatList = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.chatsListWrapper}>
            <View style={styles.chatItem}>
                <View style={styles.chatImageWrapper}>
                    <Image source={require('./avatar.png')} style={styles.chatAvatar}/>
                </View>
                <View style={styles.chatContentWrapper}>
                    <View>
                        <Text style={styles.chatUsername}>Vadim Manyutin</Text>
                    </View>
                    <View>
                        <Text style={styles.chatLastMsg} onPress={() => navigation.navigate('chatDetail')}>How u feel today?</Text>
                    </View>
                </View>
                <View style={styles.chatActivityWrapper}>
                    <View>
                        <Text style={styles.chatLastMsg}>Today</Text>
                    </View>
                    <View style={styles.chatLastMsgWrapper}>
                        <View style={styles.chatCountLastMsg}>
                            <Text>1</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    chatsListWrapper: {
        marginTop: 10
    },
    chatItem: {
        flexDirection: 'row',
        marginTop: 16,
    },
    chatAvatar: {
        width: 48,
        height: 48,
        borderRadius: 16,
    },
    chatImageWrapper: {
        flex: 2,
        marginRight: 8
    },
    chatContentWrapper: {
        flex: 10
    },
    chatActivityWrapper: {
        flex: 2,
        textAlign: 'right',
    },
    chatUsername: {
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 24,
        marginBottom: 2
    },
    chatLastMsg: {
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 20,
        color: '#ADB5BD'
    },
    chatCountLastMsg: {
        backgroundColor: '#D2D5F9',
        borderRadius: 12,
        width: 20,
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    chatLastMsgWrapper: {
        position: 'absolute',
        bottom: 3,
        alignSelf: 'flex-end'
    }
});