import {StyleSheet, Text, View, TextInput, Image} from 'react-native';

export const UserMessages = () => {
    return (
        <View style={styles.messWrapper}>

            <View style={{backgroundColor: '#F7F7FC', borderRadius: 6, padding: 10, marginTop: 15}}>
                <View>
                    <Text style={styles.messText}>Поиск! Для материала хотим связаться с пенсионерами, у которых пенсии
                        больше 1 000 рублей и которые готовы рассказать о себе. Если это вы — пожалуйста, пишите
                        @zerkalo_editor
                    </Text>
                </View>
                <View>
                    <Text style={styles.messDatetimeText}>Today</Text>
                </View>
            </View>

            <View style={{backgroundColor: 'blue', borderRadius: 6, padding: 10, marginTop: 15, textAlign: 'right'}}>
                <View>
                    <Text style={{fontWeight: 400, fontSize: 14, lineHeight: 24, color: 'white'}}>
                        Первое сообщение, а уже спам ^^
                    </Text>
                </View>
                <View>
                    <Text style={styles.messDatetimeText}>Today</Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    messWrapper: {
        paddingLeft: 20,
        paddingRight: 20
    },
    messDatetimeText: {
        fontWeight: 400,
        fontSize: 10,
        lineHeight: 16,
        color: '#ADB5BD'
    }
});