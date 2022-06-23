import React from 'react';
import {dataIndexAttribute} from 'react-horizontal-scrolling-menu/dist/types/constants';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const SubmittedDetailAss = props => {
  const {subjects} = props.route.params;

  const students = [
    {id: '1', name: 'Vikash Yadav', totaltime: '1hr',submitteddate:'18/10/21'},
    {id: '2', name: 'Vikash Gupta', totaltime: '45min',submitteddate:'19/10/21'},
    {id: '3', name: 'Ayush Dubey', totaltime: '50min',submitteddate:'16/10/21'},
  ];

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.subtxt}>{subjects.subname}</Text>
      </View>
      <View>
        <Text style={styles.txt}>
          Stream:
          <Text style={styles.datatxt}>{subjects.stream}</Text>
        </Text>
        <Text style={styles.txt}>
          Issue Date:
          <Text style={styles.datatxt}>{subjects.date}</Text>
        </Text>
        <Text style={styles.txt}>
          Last Date of Submission:
          <Text style={styles.datatxt}>{subjects.lastdate}</Text>
        </Text>
      </View>
      <View style={styles.divline} />
      <View style={styles.stlabel}>
        <Text style={styles.stlabeltext}>STUDENT NAME</Text>
        <Text style={styles.stlabeltext}>SUBMITTED DATE</Text>
      </View>
      {students.map((student, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={styles.sttext}>{student.name}</Text>
          <Text style={styles.sttext}>{student.submitteddate}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default SubmittedDetailAss;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subtxt: {
    marginTop: 25,
    fontSize: 13,
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: '6%',
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

  txt: {
    marginTop: 20,
    paddingHorizontal: 20,
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
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
  formtxt: {
    marginTop: 25,
    paddingHorizontal: 20,
    marginBottom: -10,
    color: '#000000',
  },
  datatxt: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
  stlabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  stlabeltext: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000',
    paddingHorizontal: 10,
  },
  sttext: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#000000',
    paddingHorizontal: 15,
  },
  divline: {
    alignSelf: "center",
    marginTop: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: "100%",
  }
});
