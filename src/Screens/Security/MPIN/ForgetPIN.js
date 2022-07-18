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
import {Avatar, Surface} from 'react-native-paper';
import {COLORS} from '../../../theme/Colors';
import {container, paraGray} from '../../../theme/styles/Base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const ForgetPIN = props => {
  return (
    <View style={container.container}>
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={[paraGray.parahome]}>Forgot PIN?</Text>
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
            Enter the password associated with your account.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            marginBottom: 20,
            marginTop: 40,
          }}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 15,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: COLORS.lightactive,
            }}>
            <Text style={[paraGray.darkpara, {marginTop: 10}]}>Password</Text>
            <TextInput
              style={[
                paraGray.darkpara,
                {
                  // flex: 1,
                  borderBottomColor: COLORS.black,
                  borderBottomWidth: 1,
                  marginTop: -10,
                  marginBottom: 10,
                },
              ]}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                // alignItems: 'center',
                marginBottom: 10,
              }}>
              <Text style={[[paraGray.parahome]]}>Send</Text>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: COLORS.active,
                  borderRadius: 10,
                }}
                onPress={() => props.navigation.navigate('CreateMPIN')}>
                <AntDesign
                  size={35}
                  name="arrowright"
                  color={COLORS.bg}
                  style={{marginHorizontal: 20}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ForgetPIN;
