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
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchInput, {createFilter} from 'react-native-search-filter';

const HistoryEvent = props => {
  const events = [
    {
      id: '1',
      eventname: 'SportsDay',
      time: '10:00AM',
      date: '10/10/21',
      day: 'Saturday',
      stream: 'FY',
      endtime: '11:00AM',
    },
    {
      id: '2',
      eventname: 'Volleyball',
      time: '12:00PM',
      date: '12/10/21',
      day: 'Monday',
      stream: 'SY',
      endtime: '1:00PM',
    },
  ];

  //----------Search filter-------------
  const KEYS_TO_FILTERS = ['subname', 'date', 'day'];
  const [state, setState] = useState({searchTerm: ''});

  const filterevents = events.filter(
    createFilter(state.searchTerm, KEYS_TO_FILTERS),
  );
  const searchUpdated = term => {
    setState({searchTerm: term});
  };

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
      {filterevents.map((event, index) => (
        <View key={index}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>{event.date}</Text>
            <Text style={styles.label}>{event.day}</Text>
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
              console.log('data=' + JSON.stringify(events[index]));
              props.navigation.navigate('EventDetailHistory', {events: events[index]});
            }}>
            <View>
              <Text
                style={{color: '#000000',fontSize:13, fontFamily: 'Montserrat-SemiBold'}}>
                {event.eventname}
              </Text>
            </View>
            <View>
              {/* <Text
                style={{
                  color: '#000000',
                  fontSize: 12,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                {event.stream}
              </Text> */}
              <Text
                style={{
                  color: '#000000',
                  fontSize: 11,
                  fontFamily: 'Montserrat-Regular',
                }}>
                {event.time}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default HistoryEvent;

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
    fontSize:12,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 20,
    paddingHorizontal: 15,
  },
});
