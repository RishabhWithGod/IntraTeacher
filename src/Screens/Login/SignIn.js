import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  Alert,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {COLORS} from '../../theme/Colors';
import {btnStyles, container, paraGray} from '../../theme/styles/Base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useSelector, useDispatch} from 'react-redux';
import {
  setuserInfo,
  setAge,
  setuserId,
  setuserName,
} from '../../Redux/Actions/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import Url from '../../Api/Url';

const SignIn = props => {
  const dispatch = useDispatch();
  const {userinfo} = useSelector(state => state.userReducer);
  const [username, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);

  const onLogin = async () => {
    setLoading(true);
    if (username == '' || password == '') {
      alert('Please Enter Email and Password');
      setLoading(false);
    } else {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      let resp = await fetch(`${Url.login}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      })
        .then(response => {
          // console.log('DATA' + JSON.stringify(response));
          return response.json();
        })
        .then(result => {
          if (result.status == true) {
            // console.log(result.data.teacher_data[0].user_id)
            let userinfo = result.data.teacher_data[0];
            dispatch(setuserInfo(userinfo));
            // dispatch(setuserName(username.e_name));
            AsyncStorage.setItem(
              'user_id',
              result.data.teacher_data[0].user_id,
            );
            AsyncStorage.setItem(
              'teacher_id',
              result.data.teacher_data[0].teacher_id,
            );
            AsyncStorage.setItem('user_name', result.data.teacher_data[0].name);
            AsyncStorage.setItem(
              'school_id',
              result.data.teacher_data[0].school_id,
            );
            AsyncStorage.setItem(
              'user_email',
              result.data.teacher_data[0].email,
            );

            AsyncStorage.setItem(
              'user_image',
              result.data.teacher_data[0].photo,
            );
            // dispatch(setuserName(username));
            // console.log('userID =>' + JSON.stringify(result.data.teacher_data[0].id));
            setLoading(false);
            alert(result.message);
            props.navigation.navigate('Home');
          } else {
            alert('Please enter Valid Email and Password');
            setLoading(false);
          }
        })
        .catch(err => {
          console.log('Error Reading data' + err);
          alert(err);
          setLoading(false);
        });
    }
  };

  useFocusEffect(
    useCallback(() => {
      // dispatch(setShowModal(false));
      // console.log("Home => "+username)
      const backAction = () => {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }, []),
  );

  return (
    <View style={[container.container, {backgroundColor: '#5151C6'}]}>
      {loading == true && <Spinner visible={load} />}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{justifyContent: 'flex-end'}}>
        <StatusBar backgroundColor="#5151C6" barStyle={'light-content'} />
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Text style={[paraGray.parahome, {color: COLORS.bg}]}>Login</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{height: 250, width: 320}}
            source={require('../../../assets/login.png')}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={[paraGray.darkpara, {color: COLORS.bg}]}>
            Login with following options
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 20,
            marginBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 30,
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              marginRight: 20,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: COLORS.bg,
              elevation: 3,
            }}>
            <AntDesign
              style={{marginVertical: 16}}
              name="google"
              size={30}
              color={COLORS.bg}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: COLORS.bg,
              elevation: 3,
            }}>
            <Image
              style={{height: 55, width: 45, marginVertical: 5}}
              source={require('../../../assets/Pincode.png')}
            />
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView showsVerticalScrollIndicator={false}>
          <View style={{paddingHorizontal: 15}}>
            <TextInput
              placeholder="Mobile"
              placeholderTextColor="#B9BCC5"
              textAlignVertical={'center'}
              value={username}
              onChangeText={value => setuserName(value)}
              style={{
                flex: 1,
                height: 50,
                paddingHorizontal: 20,
                marginTop: 15,
                marginBottom: 20,
                borderRadius: 30,
                fontSize: 18,
                fontFamily: 'Montserrat-Regular',
                backgroundColor: COLORS.bg,
              }}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#B9BCC5"
              textAlignVertical={'center'}
              secureTextEntry={true}
              value={password}
              onChangeText={value => setPassword(value)}
              style={{
                flex: 1,
                height: 50,
                marginTop: 5,
                paddingHorizontal: 20,
                borderRadius: 30,
                fontSize: 18,
                fontFamily: 'Montserrat-Regular',
                backgroundColor: COLORS.bg,
                // color: COLORS[darkTheme].txtBlu,
              }}
            />
            <Text
              onPress={() => props.navigation.navigate('ForgetPassword')}
              style={[
                paraGray.whitepara,
                {
                  alignSelf: 'flex-end',
                  marginTop: 10,
                  fontSize: 15,
                  paddingHorizontal: 10,
                  marginBottom: 15,
                },
              ]}>
              Forgot Password?
            </Text>
          </View>
        </KeyboardAvoidingView>
        <View style={{marginTop: 0, marginBottom: 10}}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'center',
              backgroundColor: COLORS.bg,
              borderRadius: 30,
            }}
            // onPress={() => props.navigation.navigate('CheckMPIN')}
            onPress={onLogin}>
            <Text
              style={[
                paraGray.darkpara,
                {
                  color: COLORS.active,
                  marginHorizontal: 70,
                  marginVertical: 5,
                  fontSize: 22,
                },
              ]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
            marginTop: 5,
          }}>
          <Text style={[paraGray.whitepara, {fontSize: 12}]}>
            By login, I accept the {''}
          </Text>
          <Text
            style={[
              paraGray.whitepara,
              {fontSize: 12, color: COLORS.lightgreen},
            ]}>
            Terms & Conditions
          </Text>
        </View>
        {/* <View
        style={{
          marginBottom: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{flex: 1, flexDirection: 'row'}}
          onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={[paraGray.whitepara]}>Don’t have an account?</Text>
          <Text style={[paraGray.whitepara, {color: COLORS.red}]}>
            {' '}
            Sign up
          </Text>
        </TouchableOpacity>
      </View> */}
      </ScrollView>
    </View>
  );
};

export default SignIn;
