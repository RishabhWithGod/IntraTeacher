import React, { useState } from "react";
import { View, Text, Button, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FeesTransaction = (props) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { props.navigation.navigate('UserTrans') }}>
        <View style={styles.arrow}>
          <Text style={styles.headerText}>FeesTransaction & Update</Text>
          <FontAwesome name="angle-right" size={25} color="#000000" />
        </View>
      </TouchableOpacity >
      <View style={styles.divline} />
      <TouchableOpacity onPress={() => { props.navigation.navigate('HistoryTrans') }}>
        <View style={styles.arrow}>
          <Text style={styles.headerText}>History</Text>
          <FontAwesome name="angle-right" size={25} color="#000000" />
        </View>
      </TouchableOpacity>
      <View style={styles.divline} />
    </View>

  )
}

export default FeesTransaction
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
    fontSize: 20,
    color: '#000000',
    fontWeight: '500',
    fontSize: 15,
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