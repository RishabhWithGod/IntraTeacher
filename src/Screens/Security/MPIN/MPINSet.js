import React, {useState} from 'react';
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
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Avatar, Paragraph, Switch} from 'react-native-paper';
import {COLORS} from '../../../theme/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {btnStyles, container, paraGray} from '../../../theme/styles/Base';
import {Neomorph} from 'react-native-neomorph-shadows';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';

const MPINSet = props => {
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const Logout = async () => {
    setLoading(true);
    try {
      const user_Id = await AsyncStorage.getItem('user_id');
      const user_name = await AsyncStorage.getItem('user_name');
      const user_image = await AsyncStorage.getItem('user_image');
      await AsyncStorage.removeItem('user_id');
      await AsyncStorage.removeItem('user_name');
      await AsyncStorage.removeItem('user_image');
      // await AsyncStorage.removeItem('user_email');
      // await AsyncStorage.removeItem('user_image');
      setLoading(false);
      props.navigation.navigate('SignIn');
    } catch (error) {
      console.log('catch' + error);
      setLoading(false);
    }
  };
  return (
    <View style={container.container}>
      {loading == true && <Spinner visible={load} />}
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          justifyContent: 'center',
          marginTop: -20,
        }}>
        <View>
          <View style={{alignItems: 'center', marginBottom: 10}}>
            <AntDesign name="checkcircle" size={90} color={COLORS.active} />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={[paraGray.parahome]}>PIN set Successful</Text>
          </View>
          <Text style={[paraGray.darkpara, {textAlign: 'center'}]}>
            You have successfully set your PIN. please use your new pin
            when logging in.
          </Text>
          <View style={{paddingHorizontal: 20}}>
            <TouchableOpacity
              style={{
                // flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.active,
                borderRadius: 10,
                marginTop: 20,
              }}
              onPress={() => props.navigation.navigate('MPINVerification')}>
              <Text style={[paraGray.whitepara, {marginVertical: 10}]}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default MPINSet;

const styles = StyleSheet.create({
  cell: {
    color: 'white',
    textAlign: 'center',
  },
});
