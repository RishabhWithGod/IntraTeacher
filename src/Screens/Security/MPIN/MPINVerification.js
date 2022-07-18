import React, {useState, useRef, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  BackHandler,
  Alert,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useFocusEffect} from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Avatar, Surface} from 'react-native-paper';
import {COLORS} from '../../../theme/Colors';
import {container, paraGray} from '../../../theme/styles/Base';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import Url from '../../../Api/Url';

const MPINVerification = props => {
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props1, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const {userinfo, userid, username, showmodal, useremail, userimage} =
    useSelector(state => state.userReducer);

  const [enableMask, setEnableMask] = useState(true);

  useEffect(() => {
    setValue('');
  }, []);

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

  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;

    if (symbol) {
      textChild = enableMask ? <Entypo name="dot-single" size={30} /> : symbol;
    } else if (isFocused) {
      textChild = <Cursor />;
    }
    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {/* {symbol || (isFocused ? <Cursor /> : null)} */}
        {textChild}
      </Text>
    );
  };

  const VerifyPIN = async () => {
    setLoading(true);
    const PIN = await AsyncStorage.getItem('pin');
    if (value == '') {
      alert('Please Enter MPIN');
      setLoading(false);
    } else if (value.length != 4) {
      alert('MPIN Should be 4digit');
      setLoading(false);
    } else if (value == PIN) {
      alert('Login Successfully');
      props.navigation.navigate('Home');
      setLoading(false);
    } else {
      alert('InCorrect MPIN');
      setLoading(false);
    }
  };

  return (
    <View style={[container.container, {backgroundColor: COLORS.lightactive}]}>
      {loading == true && <Spinner visible={load} />}
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center', marginTop: '25%'}}>
          <Text style={[paraGray.parahome]}>MPIN</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginTop: 20,
            paddingHorizontal: 10,
          }}>
          <Avatar.Image
            style={{marginTop: 10, alignSelf: 'center'}}
            source={{uri: Url.profile_IMG + userimage}}
          />
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
            <Text
              style={[paraGray.darkpara, {textAlign: 'center', marginTop: 20}]}>
              Enter Your MPIN.
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <CodeField
                autoFocus
                ref={ref}
                {...props1}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={{}}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={renderCell}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 20,
                marginTop:10
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: COLORS.active,
                  borderRadius: 10,
                }}
                onPress={VerifyPIN}>
                <Text
                  style={[
                    paraGray.whitelarge,
                    {marginVertical: 10, marginHorizontal: 20},
                  ]}>
                  Verify
                </Text>
                {/* <AntDesign
                  size={35}
                  name="arrowright"
                  color={COLORS.bg}
                  style={{marginHorizontal: 20, marginVertical: 10}}
                /> */}
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity
              style={{flex: 1, marginBottom: 20}}
              onPress={() => props.navigation.navigate('ForgetPIN')}>
              <Text
                style={[paraGray.darkpara, {textDecorationLine: 'underline'}]}>
                Forget MPIN?
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default MPINVerification;

const styles = StyleSheet.create({
  cell: {
    color: 'black',
    textAlign: 'center',
    borderBottomWidth: 1,
    width: '15%',
    marginTop: 10,
    marginBottom: 20,
  },
});
