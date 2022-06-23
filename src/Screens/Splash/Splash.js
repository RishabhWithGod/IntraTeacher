import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../../theme/Colors';
import {useSelector, useDispatch} from 'react-redux';
import {
  setuserId,
  setuserInfo,
  setuserName,
  setShowModal,
} from '../../Redux/Actions/actions';
import {paraGray} from '../../theme/styles/Base';

const Splash = props => {
  const [userlogin, setUserLogin] = useState();
  const dispatch = useDispatch();
  const {userinfo, userid, username, showmodal} = useSelector(
    state => state.userReducer,
  );
    useEffect(() => {
      StoreData();
    }, []);
  const StoreData = async () => {
    try {
      const user_Id = await AsyncStorage.getItem('user_id');
      const user_name = await AsyncStorage.getItem('name');
      setUserLogin(user_Id);
      dispatch(setuserId(user_Id));
      dispatch(setuserName(user_name));
      if (user_Id !== null) {
        props.navigation.navigate('Home');
      } else {
        props.navigation.navigate('SignIn');
      }
    } catch (error) {
      console.log('Error => ' + error);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.active}}>
      <TouchableOpacity
        onPress={StoreData}
        activeOpacity={1}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Image
            style={{height: 115, width: 150}}
            source={require('../../../assets/intraedu.png')}
          />
        </View>
      </TouchableOpacity>
      <View style={{alignSelf: 'center', marginBottom: 40}}>
        <Text style={[paraGray.whitepara]}>Made in India</Text>
      </View>
    </View>
  );
};

export default Splash;
