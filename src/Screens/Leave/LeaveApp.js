import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { ScrollView } from 'react-native-gesture-handler';

const LeaveApp = (props) => {

    return (
        <ScrollView  showsVerticalScrollIndicator={false} style={styles.container}>
            <View>

                <View style={styles.categoryContainer}>
                    <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => { props.navigation.navigate('') }}
                    >
                        <View style={styles.categoryIcon}>
                            <AntDesign name="chrome" size={30} color="#000000" />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Leave</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => { props.navigation.navigate('HistoryLeave') }}
                    >
                        <View style={styles.categoryIcon}>
                            <Fontisto name="checkbox-active" size={30} color="#000000" />
                        </View>
                        <Text style={styles.categoryBtnTxt}>History</Text>
                       
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default LeaveApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
   
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#C4C4C447' /* '#FF6347' */,
        borderRadius: 90,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        fontSize: 13,
        color: '#000000',
        fontFamily: 'Montserrat-SemiBold',
    },
});

