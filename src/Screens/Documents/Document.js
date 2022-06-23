import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SearchInput, {createFilter} from 'react-native-search-filter';

const Document = () => {
  const datas = [
    {id: '1', name: 'ABC'},
    {id: '2', name: 'XYZ'},
  ];
  //----------Search filter-------------
  const KEYS_TO_FILTERS = ['name'];
  const [state, setState] = useState({searchTerm: ''});

  const filterDatas = datas.filter(
    createFilter(state.searchTerm, KEYS_TO_FILTERS),
  );
  const searchUpdated = term => {
    setState({searchTerm: term});
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.search}>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#FFFFFF",
                        width: "100%",
                        height: 50,
                        borderColor: "#D3D3D3",
                        paddingHorizontal: 2,
                        borderWidth: 2,
                        marginTop: 15,
                        borderRadius: 10,
                    }}>

                    <TextInput
                        placeholder="Search by Names./Contact number"
                        placeholderTextColor="#808080"
                        onChangeText={(term) => { searchUpdated(term) }}
                        style={{
                            marginLeft: 0,
                            backgroundColor: "#FFFFFF",
                            width: "90%",
                            height: 40,
                            fontSize: 12,
                            fontFamily: 'Montserrat-Regular'
                        }}
                    />
                    <Feather name="search" size={29} color="#000000" />
                </View>
            </View> */}
      {filterDatas.map((data, index) => (
        <TouchableOpacity key={index} onPress={{}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#C4C4C440',
              width: '90%',
              height: 80,
              borderRadius: 13,
              alignSelf: 'center',
              marginTop: 30,
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <View>
              {/* <Text style={{ color: '#000000', fontFamily: 'Montserrat-Regular', }}>gii</Text> */}
              <Text style={styles.label}> {data.name}</Text>
            </View>

            <FontAwesome name="angle-right" size={25} color="#000000" />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Document;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  label: {
    flexDirection: 'row',
    color: 'black', // <-- The magic
    textAlign: 'center', // <-- The magic
    fontSize: 15,
    paddingHorizontal: '5%',
    fontFamily: 'Montserrat-SemiBold',
  },
  search: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderWidth: 0,
    borderColor: '#E4E4E4',
  },
});
