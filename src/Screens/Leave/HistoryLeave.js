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

const HistoryLeave = props => {
  const leaves = [
    {
      studentname: 'Vikas Yadav',
      stream: 'FYBCOM',
      date: '11/11/21',
      days:'2',
      approveleave:'Rejected',
      reasonlabel:"Reason of Rejection",
      // rejectleave: 'Approved',
    },
    {
      studentname: 'Vikas Gupta',
      stream: 'TYBCOM',
      date: '15/11/21',
      days:'5',
      approveleave:'Approved',
      reasonlabel:'Approved',
    },
  ];

  //----------Search filter-------------
  const KEYS_TO_FILTERS = ['name', 'stream'];
  const [state, setState] = useState({searchTerm: ''});

  const filterleaves = leaves.filter(
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
      {filterleaves.map((leave, index) => (
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
              console.log('data=' + JSON.stringify(leaves[index]));
              props.navigation.navigate('HistoryLeaveDetail', {
                leaves: leaves[index],
              });
            }}>
            <View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 15,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                {leave.studentname}
              </Text>
             
            </View>
            <View>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 15,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                {leave.approveleave}
              </Text>
            
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default HistoryLeave;

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
