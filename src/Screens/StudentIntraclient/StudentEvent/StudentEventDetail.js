import React from 'react'
import { View, Text, Button, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';

const StudentEventDetail = (props) => {

    const { eventname,eventdescription } = props.route.params;

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.formtxt}>
                    Title :
                </Text>
                <Text style={styles.datatxt}>
                    {eventname}
                </Text>
            </View>
            <View>
                <Text style={styles.formtxt}>
                    Description :-
                </Text>
                <Text style={styles.datatxt}>
                   {eventdescription}
                </Text>
            </View>
            <View style={styles.txtbox}>
                <TextInput
                    placeholder="Type Your Message Here.."
                    placeholderTextColor="#808080"
                    style={{
                        marginLeft: 0,
                        backgroundColor: "#E5E5E5",
                        width: "90%",
                        
                        height: 40,
                        fontSize: 12,
                        fontFamily: 'Montserrat-Regular',
                    }}
                />
            </View>
            <View >
                        <TouchableOpacity style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#E5E5E5",
                            width: "90%",
                            height: 50,
                            borderColor: "#E5E5E5",
                            alignSelf: "center",
                            borderWidth: 2,
                            marginTop: "15%",
                            marginBottom: 30,
                            bottom: 0,
                            borderRadius: 5,
                            justifyContent: 'center',

                        }}
                            onPress={() => { props.navigation.navigate('') }}
                        >
                            <Text style={{
                                color: '#000000',
                                fontSize: 18,
                                fontFamily: 'Montserrat-SemiBold',

                            }}>Participate</Text>

                        </TouchableOpacity>

                    </View>
        </View>
    )
}

export default StudentEventDetail
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },



    txtbox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E5E5E5",
        width: "90%",
        height: 50,
        borderColor: "#E5E5E5",
        alignSelf: "center",
        borderWidth: 0,
        marginTop: 25,
        borderRadius: 5,

    },
    formtxt: {
        marginTop: 25,
        paddingHorizontal: 20,
        // marginBottom: -10,
        color: "#000000",
        fontFamily: 'Montserrat-SemiBold',
    },
    datatxt: {
        marginTop: 9,
        paddingHorizontal: 20,
        // marginBottom: -10,
        color: "#000000",
        fontFamily: 'Montserrat-Regular',
    },
});
