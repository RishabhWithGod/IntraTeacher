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

const SubmittedDetailTest = props => {
  const {subjects} = props.route.params;

  const students = [
    {id: '1', name: 'Vikash Yadav', totaltime: '1hr'},
    {id: '2', name: 'Vikash Gupta', totaltime: '45min'},
    {id: '3', name: 'Ayush Dubey', totaltime: '50min'},
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
          Date:
          <Text style={styles.datatxt}>{subjects.date}</Text>
        </Text>
        <Text style={styles.txt}>
          Day:
          <Text style={styles.datatxt}>{subjects.day}</Text>
        </Text>
        <Text style={styles.txt}>
          Starting Time:
          <Text style={styles.datatxt}>{subjects.time}</Text>
        </Text>
        <Text style={styles.txt}>
          Ending Time:
          <Text style={styles.datatxt}>{subjects.endtime}</Text>
        </Text>
      </View>
      <View style={styles.divline} />
      <View style={styles.stlabel}>
        <Text style={styles.stlabeltext}>SUBMITTED STUDENT NAME</Text>
        <Text style={styles.stlabeltext}>TOTAL TIME</Text>
      </View>
      {students.map((student, index) => (
        <TouchableOpacity
          onPress={() => {
            console.log('data=' + JSON.stringify(subjects), students[index]);
            props.navigation.navigate('TestResultMcqs', {
              subjects: subjects,
              students: students[index],
            });
          }}>
          <View
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.sttext}>{student.name}</Text>
            <Text style={styles.sttext}>{student.totaltime}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default SubmittedDetailTest;

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
    marginTop: 10,
  },
  divline: {
    alignSelf: 'center',
    marginTop: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: '100%',
  },
});
