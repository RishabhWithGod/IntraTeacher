import React, {useState} from 'react';
import {dataIndexAttribute} from 'react-horizontal-scrolling-menu/dist/types/constants';
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchInput, {createFilter} from 'react-native-search-filter';

const HistoryYtube = props => {
  const subjects = [
    {
      id: '1',
      subname: 'English',
      link: 'http://Youtube Link Here....',
      time: '10:20',
      uploadDate: '10/10/21',
      uploadDay: 'Saturday',
      stream: 'FY',
    },
    {
      id: '2',
      subname: 'Hindi',
      link: 'http://Youtube Link Here....',
      time: '12:00',
      uploadDate: '12/10/21',
      uploadDay: 'Monday',
      stream: 'SY',
    },
  ];

  //----------Search filter-------------
  const KEYS_TO_FILTERS = ['subname', 'uploadDay'];
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
            placeholder="Search by Names./Contact number"
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
      {filtersubjects.map((sub, index) => (
        <View key={index}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>{sub.uploadDate}</Text>
            <Text style={styles.label}>{sub.uploadDay}</Text>
          </View>
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
              props.navigation.navigate('');
            }}>
            <View>
              <Text
                style={{color: '#000000', fontFamily: 'Montserrat-SemiBold'}}>
                {sub.subname}
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 12,
                  fontFamily: 'Montserrat-Regular',
                }}>
                {sub.link}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 12,
                  fontFamily: 'Montserrat-Regular',
                }}>
                {sub.time}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default HistoryYtube;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  label: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 20,
    paddingHorizontal: 15,
  },
});
