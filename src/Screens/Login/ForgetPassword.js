import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Avatar, Paragraph, Surface} from 'react-native-paper';
import {COLORS} from '../../theme/Colors';
import {container, paraGray} from '../../theme/styles/Base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const ForgetPassword = props => {
  return (
    <View style={container.container}>
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center',marginTop:10}}>
          <Text style={[paraGray.parahome]}>Forgot Password?</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginTop: 20,
            paddingHorizontal: 10,
          }}>
          <Text
            style={[
              paraGray.darkpara,
              {color: COLORS.lightblack, textAlign: 'center'},
            ]}>
            Select which contact details should we use to reset your PIN:
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            marginBottom: 20,
            marginTop: 40,
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              paddingHorizontal: 15,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: COLORS.lightactive,
            }}
            onPress={() => props.navigation.navigate('ForgetPasswordNO')}>
            <Text
              style={[
                paraGray.darkpara,
                {marginTop: 20, textAlign: 'center', color: COLORS.lightblack},
              ]}>
              Via SMS:
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginBottom: 20,
              }}>
              <MaterialCommunityIcons
                style={{marginTop: -20}}
                name="cellphone-lock"
                size={50}
                color={COLORS.active}
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: -50,
                }}>
                <Text style={[paraGray.darkpara]}>Number</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            marginBottom: 20,
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              paddingHorizontal: 15,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: COLORS.lightactive,
            }}
            onPress={() => props.navigation.navigate('ForgetPasswordMail')}>
            <Text
              style={[
                paraGray.darkpara,
                {marginTop: 20, textAlign: 'center', color: COLORS.lightblack},
              ]}>
              Via Mail:
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginBottom: 20,
              }}>
              <AntDesign
                style={{marginTop: -20}}
                name="mail"
                size={50}
                color={COLORS.active}
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: -50,
                }}>
                <Text style={[paraGray.darkpara]}>Email</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default ForgetPassword;
