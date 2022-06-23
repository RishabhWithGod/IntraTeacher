import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';

const StudentAttendanceShow = props => {
  const user = ['', '10/10/21', ''];
  const {subname} = props.route.params;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subtxt}>{subname}</Text>
      </View>
      <View style={styles.rowcontainer}>
        <Text style={styles.rowTxt}>Present</Text>
        <Text style={styles.rowTxt}>Date</Text>
        <Text style={styles.rowTxt}>Absent</Text>
      </View>
      <View style={styles.dataview}>
        {user.map(user => (
          <View>
            <Text style={styles.datatxt}>{user}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default StudentAttendanceShow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
    alignSelf: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  dataview: {
    paddingHorizontal: '6%',
    marginTop: 10,
    fontSize: 20,
    color: '#000000',
    fontWeight: '500',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  datatxt: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
  },
  subtxt: {
    marginTop: 25,
    fontSize: 15,
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: '6%',
  },
});
