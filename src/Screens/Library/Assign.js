import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import {Avatar,} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import SearchInput, { createFilter } from 'react-native-search-filter';

const Assign = (props) => {

    const datas = [
        { id: '1', name: 'Vikas Yadav', stream: 'FYBCOM' },
        { id: '2', name: 'Vikas Gupta', stream: 'TYBCOM' },
    ]

    //----------Search filter-------------
    const KEYS_TO_FILTERS = ['name', 'stream'];
    const [state, setState] = useState({searchTerm :''});
    
    const filterDatas = datas.filter(createFilter(state.searchTerm, KEYS_TO_FILTERS))
    const searchUpdated = (term) => {
        setState({ searchTerm: term })
    }

    return (
        <View style={styles.container}>
            <View style={styles.search}>

                <View
                    style={{
                        flexDirection: "row",
                        alignbooks: "center",
                        backgroundColor: "#FFFFFF",
                        width: "100%",
                        height: 50,
                        borderColor: "#D3D3D3",
                        paddingHorizontal: 0,
                        borderWidth: 2,
                        marginTop: 15,
                        borderRadius: 10,

                    }}>

                    <TextInput
                        placeholder="Search by Names./Contact number"
                        placeholderTextColor="#808080"
                        onChangeText={(term) => { searchUpdated(term) }} 
                        style={{
                            marginLeft: 2,
                            marginTop: 2,
                            backgroundColor: "#FFFFFF",
                            width: "90%",
                            height: 40,
                            fontSize: 12,
                            fontFamily: 'Montserrat-Regular',
                        }}
                    />
                    <Feather style={{ marginTop: 6, }} name="search" size={29} color="#000000" />
                </View>
            </View>
            {filterDatas.map((data, index) => (
                <View>
                    
                    <TouchableOpacity key={index} style={{
                        flexDirection: "row",
                        alignbooks: "center",
                        // backgroundColor: "#D3D3D3",
                        width: "90%",
                        height: 50,
                        // borderColor: "#D3D3D3",
                        alignSelf: "center",
                        // borderWidth: 2,
                        marginTop: 30,
                        borderRadius: 5,
                        justifyContent: 'space-between',


                    }}
                        onPress={() => { props.navigation.navigate('BookDetail', { name: data.name, stream: data.stream }) }}
                    >
                        <Avatar.Image
                                source={{}}
                                size={30}
                                style={{backgroundColor:"#000000"}}
                             />
                        <Text style={{
                            color: '#000000',
                            fontSize: 16,
                            fontFamily: 'Montserrat-Regular',

                        }}>{data.name}</Text>
                        <Text style={{
                            color: '#000000',
                            fontSize: 16,
                            fontFamily: 'Montserrat-Regular',

                        }}>{data.stream}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>

    );
};

export default Assign;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    search: {
        height: 60,
        width: "100%",
        flexDirection: "row",
        alignbooks: "center",
        paddingHorizontal: 15,
        justifyContent: "space-between",
        borderWidth: 0,
        borderColor: "#E4E4E4",

    },
});
