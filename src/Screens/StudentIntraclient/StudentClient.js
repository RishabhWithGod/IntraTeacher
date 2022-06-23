import React, { useState } from "react";
import { View, Text, Button, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const StudentClient = (props) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { props.navigation.navigate('LeaveStudent') }}>
        <View style={styles.arrow}>
          <Text style={styles.headerText}>Leave</Text>
          <FontAwesome name="angle-right" size={30} color="#000000" />
        </View>
      </TouchableOpacity >
      <View style={styles.divline} />
      <TouchableOpacity onPress={() => { props.navigation.navigate('StudentLibrary') }}>
        <View style={styles.arrow}>
          <Text style={styles.headerText}>Library</Text>
          <FontAwesome name="angle-right" size={30} color="#000000" />
        </View>
      </TouchableOpacity>
       <View style={styles.divline} />

      <TouchableOpacity onPress={() => { props.navigation.navigate('PTMLecture') }}>
        <View style={styles.arrow}>
          <Text style={styles.headerText}>PTM/Lecture</Text>
          <FontAwesome name="angle-right" size={30} color="#000000" />
        </View>
      </TouchableOpacity>
      <View style={styles.divline} />
      <TouchableOpacity onPress={() => { props.navigation.navigate('StudentAttendance') }}>
        <View style={styles.arrow}>
          <Text style={styles.headerText}>Attendance</Text>
          <FontAwesome name="angle-right" size={30} color="#000000" />
        </View>
      </TouchableOpacity>
      <View style={styles.divline} />
      <TouchableOpacity onPress={() => { props.navigation.navigate('StudentYoutube') }}>
        <View style={styles.arrow}>
          <Text style={styles.headerText}>Youtube</Text>
          <FontAwesome name="angle-right" size={30} color="#000000" />
        </View>
      </TouchableOpacity>
      <View style={styles.divline} />
      <TouchableOpacity onPress={() => { props.navigation.navigate('StudentEvent') }}>
        <View style={styles.arrow}>
          <Text style={styles.headerText}>Event</Text>
          <FontAwesome name="angle-right" size={30} color="#000000" />
        </View>
      </TouchableOpacity>
      <View style={styles.divline} />
    </View>

  )
}

export default StudentClient
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 20,
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