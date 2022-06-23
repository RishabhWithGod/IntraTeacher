import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const StudentBookAssigned = (props) => {

    const books = [
        { name: 'Vikas Yadav', stream: 'FYBCOM', date: '11/11/21', bookname: 'ABBCCD', rdate: '17/11/21' },
        // { name: 'Vikas Gupta', stream: 'TYBCOM', date: '15/11/21', bookname: 'XYZXYZ', rdate: '21/11/21' },
    ]

    return (
        <View animation="slideInRight" style={styles.container}>
            
            {books.map((book, index) => (
                 <View key={index}>
                <Text style={styles.txt}>
                    Student Info
                </Text>
                <Text style={styles.txt}>
                    Name:
                    <Text style={styles.datatxt}>{book.name}</Text>
                </Text>
                {/* <Text style={styles.txt}>
                   Std:{book.value}
                </Text> */}
                <Text style={styles.txt}>
                    Stream:
                    <Text style={styles.datatxt}>{book.stream}</Text>
                </Text>
                <Text style={styles.txt}>
                    BookAssigned:
                    <Text style={styles.datatxt}>{book.bookname}</Text>
                </Text>
                <Text style={styles.txt}>
                    Taken:
                    <Text style={styles.datatxt}>{book.date}</Text>
                </Text>
                <Text style={styles.txt}>
                    Return Date:
                    <Text style={styles.datatxt}>{book.rdate}</Text>
                </Text>
            </View>
 ))}
        </View>

    );
};

export default StudentBookAssigned;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    search: {
        height: 60,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        justifyContent: "space-between",
        borderWidth: 0,
        borderColor: "#E4E4E4",

    },

    txt: {
        marginTop: 20,
        paddingHorizontal: 20,
        color: "#000000",
        fontFamily: 'Montserrat-Regular',
    },
    txtbox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        width: "90%",
        height: 50,
        borderColor: "#D3D3D3",
        alignSelf: "center",
        borderWidth: 1,
        marginTop: 15,
        borderRadius: 5,
    },
    formtxt: {
        marginTop: 25,
        paddingHorizontal: 20,
        marginBottom: -10,
        color: "#000000"
    },
    datatxt: {
        fontWeight: 'bold',
        // fontSize: 18,
    },
});
