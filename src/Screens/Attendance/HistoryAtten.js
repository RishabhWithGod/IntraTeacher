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
import StreamDropDown from '../DropDown/StreamDropDown';
import DateTimePicker from '@react-native-community/datetimepicker';

const HistoryAtten = props => {
  const {subjects} = props.route.params;

  // --------Date-time Picker----------
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    //For Date Picker
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setText(fDate);
    console.log(fDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

   // --------Date-time Picker----------
   const [dates, setDates] = useState(new Date(1598051730000));
   const [modes, setModes] = useState('date');
   const [shows, setShows] = useState(false);
   const [texts, setTexts] = useState('');
 
   const onChanges = (event, selectedDate) => {
     const currentDate = selectedDate || date;
     setShows(Platform.OS === 'ios');
     setDates(currentDate);
 
     //For Date Picker
     let tempDate = new Date(currentDate);
     let fDate =
       tempDate.getDate() +
       '/' +
       (tempDate.getMonth() + 1) +
       '/' +
       tempDate.getFullYear();
     setTexts(fDate);
     console.log(fDate);
   };
 
   const showModes = currentMode => {
     setShows(true);
     setModes(currentMode);
   };
 
   const showDatepickers = () => {
     showModes('date');
   };
 

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.subtxt}>{subjects.subname}</Text>
      </View>
      <View>
        <StreamDropDown />
      </View>
      <Text style={styles.labeltxt}>Choose Date</Text>
      <Text style={styles.formtxt}>From</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          width: '90%',
          height: 50,
          borderColor: '#C4C4C4',
          paddingHorizontal: 0,
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 5,
          alignSelf: 'center',
        }}>
        <TextInput
          placeholder="Choose Date"
          placeholderTextColor="#808080"
          style={{
            marginLeft: 0,
            backgroundColor: '#FFFFFF',
            borderColor: '#C4C4C4',
            width: '90%',
            height: 40,
            fontSize: 12,
            fontFamily: 'Montserrat-Regular',
          }}>
          {text}
        </TextInput>
        <MaterialCommunityIcons
          name="calendar-blank-outline"
          size={26}
          color="#434b56"
          onPress={showDatepicker}
        />

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <Text style={styles.formtxt}>To</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          width: '90%',
          height: 50,
          borderColor: '#C4C4C4',
          paddingHorizontal: 0,
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 5,
          alignSelf: 'center',
        }}>
        <TextInput
          placeholder="Choose Date"
          placeholderTextColor="#808080"
          style={{
            marginLeft: 0,
            backgroundColor: '#FFFFFF',
            borderColor: '#C4C4C4',
            width: '90%',
            height: 40,
            fontSize: 12,
            fontFamily: 'Montserrat-Regular',
          }}>
          {texts}
        </TextInput>
        <MaterialCommunityIcons
          name="calendar-blank-outline"
          size={26}
          color="#434b56"
          onPress={showDatepickers}
        />

        {shows && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dates}
            mode={modes}
            is24Hour={true}
            display="default"
            onChange={onChanges}
          />
        )}
      </View>
      <View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#000000',
                width: '80%',
                height: 50,
                borderColor: '#000000',
                alignSelf: 'center',
                borderWidth: 2,
                marginTop: 30,
                marginBottom: 30,
                borderRadius: 15,
                justifyContent: 'center',
              }}
              onPress={() => {
                console.log('data=' + JSON.stringify(subjects));
                props.navigation.navigate('HistoryAttendance', {
                  subjects: subjects,
                });
              }}
              >
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 16,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                Show
              </Text>
            </TouchableOpacity>
          </View>
    </ScrollView>
  );
};

export default HistoryAtten;

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
  subtxt: {
    marginTop: 25,
    fontSize: 13,
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: '6%',
  },
  formtxt: {
    marginTop: 20,
    paddingHorizontal: 20,
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  labeltxt: {
    color: '#000000',
    marginLeft: 15,
    marginTop: 20,
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
});
