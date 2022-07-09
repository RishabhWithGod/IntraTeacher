import React,{useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import SearchInput, { createFilter } from 'react-native-search-filter';

const HistoryAttendance = props => {

  const {subjects} = props.route.params;
  const datas = [
    {id: '1', name: 'Vikash Yadav', date: '1/1/21', present: 'Yes'},
    {id: '2', name: 'Vikash Gupta', date: '1/1/21', present: 'No'},
    {id: '3', name: 'Ayush Dubey', date: '1/1/21', present: 'Yes'},
  ];

    //----------Search filter-------------
    const KEYS_TO_FILTERS = ['name',];
    const [state, setState] = useState({searchTerm :''});
    
    const data = datas.filter(createFilter(state.searchTerm, KEYS_TO_FILTERS))
    const searchUpdated = (term) => {
        setState({ searchTerm: term })
    }
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.search}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: '100%',
            height: 50,
            borderColor: '#D3D3D3',
            paddingHorizontal: 2,
            borderWidth: 2,
            marginTop: 15,
            borderRadius: 10,
          }}>
            
          <TextInput
            placeholder="Search by Names."
            placeholderTextColor="#808080"
            onChangeText={term => {
              searchUpdated(term);
            }}
            style={{
              marginLeft: 0,
              backgroundColor: '#FFFFFF',
              width: '90%',
              height: 40,
              fontSize: 12,
              fontFamily: 'Montserrat-Regular',
            }}
          />
          <Feather name="search" size={29} color="#000000" />
        </View>
      </View>
      <View>
        <Text style={styles.subtxt}>{subjects.subname}</Text>
      </View>
      <View>
        <Text style={styles.txt}>
          Stream:
          <Text style={styles.datatxt}>{subjects.stream}</Text>
        </Text>
      </View>

      <View style={styles.rowcontainer}>
        <Text style={styles.rowTxt}>Date</Text>
        <Text style={styles.rowTxt}>Student Name</Text>
        <Text style={styles.rowTxt}>Present</Text>
      </View>
      {data.map((data, index) => (
        <View key={index}>
          <View style={styles.rowcontainer}>
            <Text style={styles.dataTxt}>{data.date}</Text>
            <Text style={styles.dataTxt}>{data.name}</Text>
            <Text style={styles.dataTxt}>{data.present}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default HistoryAttendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  rowcontainer: {
    alignItems: 'center',
    paddingHorizontal: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowTxt: {
    flexWrap: 'wrap',
    marginTop: 20,
    fontSize: 12,
    color: '#000000',
    fontWeight: '500',
    fontFamily: 'Montserrat-SemiBold',
  },
  txt: {
    marginTop: 20,
    paddingHorizontal: 20,
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
  subtxt: {
    marginTop: 25,
    fontSize: 13,
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: '6%',
  },
  datacontainer: {
    alignItems: 'center',
    paddingHorizontal: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataTxt: {
    flexWrap: 'wrap',
    marginTop: 20,
    fontSize: 12,
    color: '#000000',
    fontWeight: '500',
    fontFamily: 'Montserrat-Regular',
  },
});
