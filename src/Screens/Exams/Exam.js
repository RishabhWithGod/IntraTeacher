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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
const Exam = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Entypo name="box" size={25} color="#000000" />
        <Text
          style={{
            fontSize: 16,
            color: '#000000',
            fontWeight: '500',
            paddingHorizontal: '4%',
            fontFamily: 'Montserrat-SemiBold',
          }}>
          Exam Management
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('CreateTest');
        }}>
        <View style={styles.arrow}>
          <Text style={styles.headerText}>Create New Test</Text>
          <FontAwesome name="angle-right" size={25} color="#000000" />
        </View>
      </TouchableOpacity>

      <View style={styles.divline} />

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('ManageTest');
        }}>
        <View style={styles.arrow}>
          <Text style={styles.headerText}>Manage Test</Text>
          <FontAwesome name="angle-right" size={25} color="#000000" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Exam;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: '6%',
    marginTop: 20,
    flexDirection: 'row',
    // justifyContent: "space-between",
  },
  arrow: {
    paddingHorizontal: '6%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '500',
    fontFamily: 'Montserrat-Regular',
  },
  content: {
    alignSelf: 'center',
    width: '80%',

    backgroundColor: '#D3D3D3',
    padding: 10,
  },

  divline: {
    alignSelf: 'center',
    marginTop: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: '100%',
  },
});
