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
import {DataTable, Avatar} from 'react-native-paper';

const EventDetailHistory = props => {
  const {events} = props.route.params;

  const students = [
    {id: '1', name: 'Vikash Yadav', totaltime: '1hr', stream: 'FY',eventname:'kabbadi',contact:'9824025887'},
    {id: '2', name: 'Vikash Gupta', totaltime: '45min', stream: 'SY',eventname:'Cricket',contact:'9824245744'},
    {id: '3', name: 'Ayush Dubey', totaltime: '50min', stream: 'TY',eventname:'VolleyBall',contact:'9815486544'},
  ];

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.subtxt}>{events.eventname}</Text>
      </View>
      <View>
        <Text style={styles.txt}>
          Date:
          <Text style={styles.datatxt}>{events.date}</Text>
        </Text>
        <Text style={styles.txt}>
          Day:
          <Text style={styles.datatxt}>{events.day}</Text>
        </Text>
      </View>
      <View style={styles.divline} />
      <DataTable>
        <DataTable.Header
          style={{marginTop: 10, borderBottomWidth: 0, marginBottom: -10}}>
          <DataTable.Title>
            <Text style={styles.tabletxt}>Events</Text>
          </DataTable.Title>
          <DataTable.Title style={{flex: 1.3}}>
            <Text style={styles.tabletxt}>Students</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={styles.tabletxt}>Stream</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={styles.tabletxt}>Contact No</Text>
          </DataTable.Title>
        </DataTable.Header>
      </DataTable>
      {students.map((student, index) => (
        <DataTable key={index}>
          <DataTable.Row style={{borderBottomWidth: 0}}>
            <DataTable.Cell style={{flex: 1.2}}>
              <Text style={{fontSize: 12, fontFamily: 'Montserrat-Regular'}}>
                {student.eventname}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell style={{flex: 1.8,padding:0}}>
              <Text style={{fontSize: 12, fontFamily: 'Montserrat-Regular'}}>
                {student.name}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell >
              <Text style={{fontSize: 12, fontFamily: 'Montserrat-Regular'}}>
                {student.stream}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell  style={{flex: 1.2,}}>
              <Text style={{fontSize: 12, fontFamily: 'Montserrat-Regular'}}>
                {student.contact}
              </Text>
            </DataTable.Cell>
          </DataTable.Row>
         
        </DataTable>
      ))}
    </ScrollView>
  );
};

export default EventDetailHistory;

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
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    // fontSize: 18,
  },
  stlabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 10,
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
    alignSelf: 'center',
    marginTop: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: '100%',
  },
  tabletxt: {
    // fontWeight: 'bold',
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
});
