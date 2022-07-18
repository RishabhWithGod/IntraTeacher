import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Avatar, Switch} from 'react-native-paper';
import {InnerHeader} from '../../Components/InnerHeader';
import {COLORS} from '../../theme/Colors';
import {btnStyles, container, paraGray} from '../../theme/styles/Base';
import DateTimePicker from '@react-native-community/datetimepicker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Url from '../../Api/Url';

const Security = props => {
  const dispatch = useDispatch();
  const {userinfo, userid, username, userimage} = useSelector(
    state => state.userReducer,
  );
  useEffect(() => {
    ToggleCheck();
  }, []);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const ToggleCheck = async () => {
    const Toggle = await AsyncStorage.getItem('toggle');
    if (Toggle == null) {
      setIsSwitchOn(false);
    } else {
      setIsSwitchOn(true);
    }
  };
  const onToggleSwitch = async () =>
    setIsSwitchOn(
      !isSwitchOn,
      isSwitchOn != false
        ? (!isSwitchOn, await AsyncStorage.removeItem('toggle'))
        : (setIsSwitchOn(true),
          // AsyncStorage.setItem('toggle', 'true'),
          props.navigation.navigate('CreateMPIN')),
    );

  return (
    <View style={container.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 15}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 10,
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Avatar.Image
              size={50}
              source={{uri: Url.profile_IMG + userimage}}
            />
            <Text
              style={[
                paraGray.darkpara,
                {
                  fontFamily: 'Poppins-SemiBold',
                  marginLeft: 10,
                  alignSelf: 'center',
                  fontSize: 14,
                },
              ]}>
              {username}
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'rgba(0, 0, 0, 0.1)',
            borderBottomWidth: 1,
            marginBottom: 20,
          }}
        />
        <Text style={[paraGray.darkpara, {color: '#ADADAD'}]}>
          Security Settings
        </Text>

        <TouchableOpacity
          onPress={() => {
            isSwitchOn != false
              ? props.navigation.navigate('ChangeMPIN')
              : (setIsSwitchOn(true), props.navigation.navigate('CreateMPIN'));
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
            }}>
            <Text style={[paraGray.darkpara, {fontSize: 13}]}>MPIN</Text>
            <Switch
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
              color={COLORS.darkblue}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Security;
