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
import {ScrollView} from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import StandardSelectBtn from './StandardSelectBtn';
import StreamDropDown from '../DropDown/StreamDropDown';
import SubjectDropDown from '../DropDown/SubjectDropDown';

const AttendancePtm = props => {
  DropDownPicker.setListMode('SCROLLVIEW');
  const [opens, setOpens] = useState(false);
  const [values, setValues] = useState(null);
  const [subjectitems, setSubjectItems] = useState([
    {label: 'Maths', value: 'A'},
    {label: 'English', value: 'B'},
    {label: 'Hindi', value: 'C'},
  ]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFFFFF'}}>
      <StreamDropDown />
      <View style={styles.container}>
        <SubjectDropDown />
        <View style={{marginTop: 55, marginBottom: 25}}></View>
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
              marginTop: '40%',
              marginBottom: 30,
              bottom: 0,
              borderRadius: 15,
              justifyContent: 'center',
            }}
            onPress={() => {
              props.navigation.navigate('TakeAttendance');
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 18,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Show
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AttendancePtm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  txtbox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 50,
    borderColor: '#D3D3D3',
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 5,
  },
  txtboxDesc: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 80,
    borderColor: '#D3D3D3',
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 5,
  },
  formtxt: {
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: -10,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
  },
  labeltxt: {
    color: '#000000',
    marginLeft: 15,
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
});
