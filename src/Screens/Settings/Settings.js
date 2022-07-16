import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../theme/Colors';
import {container, paraGray} from '../../theme/styles/Base';

const Settings = props => {
  return (
    <View style={[container.container]}>
      <ScrollView>
        <Text
          style={[
            paraGray.darkpara,
            {color: COLORS.section, marginTop: 20, paddingHorizontal: 15},
          ]}>
          Account Settings
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('TeachersProfile');
          }}>
          <View style={styles.arrow}>
            <Text style={styles.headerText}>Profile</Text>
            <FontAwesome name="angle-right" size={25} color="#000000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        //   onPress={() => {
        //     props.navigation.navigate('');
        //   }}
        >
          <View style={styles.arrow}>
            <Text style={styles.headerText}>My Classroom Books</Text>
            <FontAwesome name="angle-right" size={25} color="#000000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('ChangePassword');
          }}>
          <View style={styles.arrow}>
            <Text style={styles.headerText}>Change password</Text>
            <FontAwesome name="angle-right" size={25} color="#000000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        //   onPress={() => {
        //     props.navigation.navigate('');
        //   }}
        >
          <View style={styles.arrow}>
            <Text style={styles.headerText}>About</Text>
            <FontAwesome name="angle-right" size={25} color="#000000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Security');
          }}>
          <View style={styles.arrow}>
            <Text style={styles.headerText}>Security</Text>
            <FontAwesome name="angle-right" size={25} color="#000000" />
          </View>
        </TouchableOpacity>
        <View style={styles.divline} />
        <Text
          style={[
            paraGray.darkpara,
            {color: COLORS.section, marginTop: 20, paddingHorizontal: 15},
          ]}>
          More
        </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://intraedu.in/about');
          }}>
          <View style={styles.arrow}>
            <Text style={styles.headerText}>About us</Text>
            <FontAwesome name="angle-right" size={25} color="#000000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://intraedu.in/privacyandpolicy');
          }}>
          <View style={styles.arrow}>
            <Text style={styles.headerText}>Privacy policy</Text>
            <FontAwesome name="angle-right" size={25} color="#000000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://intraedu.in/termsandservice');
          }}>
          <View style={styles.arrow}>
            <Text style={styles.headerText}>Terms and conditions</Text>
            <FontAwesome name="angle-right" size={25} color="#000000" />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Settings;
const styles = StyleSheet.create({
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
    marginTop: 20,
    borderBottomColor: COLORS.section,
    borderBottomWidth: 1,
    width: '95%',
  },
});
