import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import SearchInput, {createFilter} from 'react-native-search-filter';

const SubmittedAss = props => {
  
  const subjects = [
    {
      id: '1',
      subname: 'English',
      time: '10:00AM',
      date: '10/10/21',
      lastdate: '20/10/21',
      day: 'Saturday',
      stream: 'FY',
      endtime: '11:00AM',
    },
    {
      id: '2',
      subname: 'Hindi',
      time: '12:00PM',
      date: '12/10/21',
      lastdate: '30/10/21',
      day: 'Monday',
      stream: 'SY',
      endtime: '1:00PM',
    },
  ];
  //----------Search filter-------------
  const KEYS_TO_FILTERS = ['name', 'stream'];
  const [state, setState] = useState({searchTerm: ''});

  const filtersubjects = subjects.filter(
    createFilter(state.searchTerm, KEYS_TO_FILTERS),
  );
  const searchUpdated = term => {
    setState({searchTerm: term});
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <View
          style={{
            flexDirection: 'row',
            alignbooks: 'center',
            backgroundColor: '#FFFFFF',
            width: '100%',
            height: 50,
            borderColor: '#D3D3D3',
            paddingHorizontal: 0,
            borderWidth: 2,
            marginTop: 15,
            borderRadius: 10,
          }}>
          <TextInput
            placeholder="Search by Names./Stream"
            placeholderTextColor="#808080"
            onChangeText={term => {
              searchUpdated(term);
            }}
            style={{
              marginLeft: 2,
              marginTop: 2,
              backgroundColor: '#FFFFFF',
              width: '90%',
              height: 40,
              fontSize: 12,
              fontFamily: 'Montserrat-Regular',
            }}
          />
          <Feather
            style={{marginTop: 6}}
            name="search"
            size={29}
            color="#000000"
          />
        </View>
      </View>
      {filtersubjects.map((sub, index) => (
        <View key={index}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#E5E5E5',
              width: '90%',
              height: 70,
              borderColor: '#E5E5E5',
              alignSelf: 'center',
              borderWidth: 2,
              marginTop: 20,
              borderRadius: 5,
              justifyContent: 'space-between',
            }}
            onPress={() => {
              console.log('data=' + JSON.stringify(subjects[index]));
              props.navigation.navigate('SubmittedDetailAss', {
                subjects: subjects[index],
              });
            }}>
            <View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 15,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                {sub.subname}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontFamily: 'Montserrat-Regular',
                }}>
                {sub.stream}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default SubmittedAss;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  search: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignbooks: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderWidth: 0,
    borderColor: '#E4E4E4',
  },
});
