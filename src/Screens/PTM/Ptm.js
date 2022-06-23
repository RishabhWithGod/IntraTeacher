import React, { useState } from "react";
import { View, Text, Button, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Ptm = (props) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { props.navigation.navigate('CreateMeeting') }}>
        <View style={styles.arrow}>
          <Text style={styles.headerText}>Create Meeting</Text>
          <FontAwesome name="angle-right" size={25} color="#000000" />
        </View>
      </TouchableOpacity >
      <View style={styles.divline} />
      <TouchableOpacity onPress={() => { props.navigation.navigate('HistoryLecture') }}>
        <View style={styles.arrow}>
          <Text style={styles.headerText}>History</Text>
          <FontAwesome name="angle-right" size={25} color="#000000" />
        </View>
      </TouchableOpacity>
      <View style={styles.divline} />
      <TouchableOpacity onPress={() => { props.navigation.navigate('UpcomingPtm') }}>
        <View style={styles.arrow}>
          <Text style={styles.headerText}>Upcoming</Text>
          <FontAwesome name="angle-right" size={25} color="#000000" />
        </View>
      </TouchableOpacity>
      <View style={styles.divline} />
      {/* <TouchableOpacity onPress={() => { props.navigation.navigate('AttendancePtm') }}>
        <View style={styles.arrow}>
          <Text style={styles.headerText}>Attendance</Text>
          <FontAwesome name="angle-right" size={30} color="#000000" />
        </View>
      </TouchableOpacity>
      <View style={styles.divline} /> */}


    </View>

  )
}

export default Ptm
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  arrow: {

    paddingHorizontal: "6%",
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: "space-between",

  },
  headerText: {
    // flexDirection: 'row',
    // textAlign: 'center',
    fontSize: 15,
    color: '#000000',
    fontWeight: '500',
    fontFamily: 'Montserrat-Regular',
  },
  content: {
    alignSelf: "center",
    width: "80%",


    backgroundColor: "#D3D3D3",
    padding: 10,
  },

  divline: {
    alignSelf: "center",
    marginTop: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: "90%",
  }
});