import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  BackHandler,
  Alert,
  RefreshControl,
} from 'react-native';
import {Avatar, Modal} from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {btnStyles, container, paraGray} from '../theme/styles/Base';
import {
  setShowModal,
  setuserName,
  setuserId,
  setuserInfo,
  setuserEmail,
  setuserImage,
  setschoolId,
  setTeacherId,
  setuserPhone,
  setuserAddress,
  setuserDOB,
} from '../Redux/Actions/actions';
import {COLORS} from '../theme/Colors';
import {useFocusEffect} from '@react-navigation/native';

const HomeScreen = props => {
  const dispatch = useDispatch();
  const {userinfo, userid, username, showmodal} = useSelector(
    state => state.userReducer,
  );
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

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
      dispatch(setShowModal(false));
      setLoading(false);
      props.navigation.navigate('SignIn');
    } catch (error) {
      console.log('catch' + error);
      setLoading(false);
    }
  };

  useEffect(() => {
    dispatch(setShowModal(false));
    Store();
  }, []);
  const Store = async () => {
    setRefreshing(false);
    setLoading(true);
    try {
      const user_Id = await AsyncStorage.getItem('user_id');
      const teacher_Id = await AsyncStorage.getItem('teacher_id');
      const user_name = await AsyncStorage.getItem('user_name');
      const school_id = await AsyncStorage.getItem('school_id');
      const user_email = await AsyncStorage.getItem('user_email');
      const user_image = await AsyncStorage.getItem('user_image');
      const user_dob = await AsyncStorage.getItem('dob');
      const user_present_address = await AsyncStorage.getItem(
        'present_address',
      );
      const user_phone = await AsyncStorage.getItem('phone');

      dispatch(setuserId(user_Id));
      dispatch(setTeacherId(teacher_Id));
      dispatch(setuserName(user_name));
      dispatch(setschoolId(school_id));
      dispatch(setuserEmail(user_email));
      dispatch(setuserImage(user_image));
      dispatch(setuserDOB(user_dob));
      dispatch(setuserAddress(user_present_address));
      dispatch(setuserPhone(user_phone));
      // console.log("first"+user_dob)
      setLoading(false);
    } catch (error) {
      console.log('Catch' + error);
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        Alert.alert('Hold on!', 'Are you sure you want to exit the app?', [
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

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    Store();
  }, []);

  return (
    <View style={styles.container}>
      {loading == true && <Spinner visible={load} />}
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View>
          <StatusBar backgroundColor="#000000" barStyle={'light-content'} />
          <View style={styles.header}>
            <Text style={styles.headline}>Welcome! {username}</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.headline}>Teacher's Dashboard</Text>
          </View>

          <View style={styles.search}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#262630',
                width: '70%',
                height: 45,
                borderRadius: 13,
                paddingHorizontal: 10,
              }}>
              <FontAwesome name="circle-o" size={30} color="#FFFFFF" />
              <TextInput
                placeholder="Search"
                placeholderTextColor="#FFFFFF"
                style={{
                  marginLeft: 15,
                  backgroundColor: '#262630',
                  width: '70%',
                  height: 45,
                  color: '#FFFFFF',
                  fontFamily: 'Montserrat-Regular',
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#262630',
                width: '15%',
                height: 45,
                borderRadius: 13,
                justifyContent: 'center',
              }}>
              <TouchableOpacity>
                <Ionicons name="arrow-forward" size={35} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                props.navigation.navigate('Student');
              }}>
              <View style={styles.categoryIcon}>
                <Image source={require('../../assets/image1.png')} />
              </View>
              <Text style={styles.categoryBtnTxt}>Students</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                props.navigation.navigate('Exam');
              }}>
              <View style={styles.categoryIcon}>
                <Image source={require('../../assets/image2.png')} />
              </View>
              <Text style={styles.categoryBtnTxt}>Exams</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                props.navigation.navigate('Event');
              }}>
              <View style={styles.categoryIcon}>
                <Image source={require('../../assets/image3.png')} />
              </View>
              <Text style={styles.categoryBtnTxt}>Events</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.categoryContainer, {marginTop: 10}]}>
            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                props.navigation.navigate('Library');
              }}>
              <View style={styles.categoryIcon}>
                <Image source={require('../../assets/image4.png')} />
              </View>
              <Text style={styles.categoryBtnTxt}>Library</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                // props.navigation.navigate('Notification');
              }}>
              <View style={styles.categoryIcon}>
                <Image source={require('../../assets/image5.png')} />
              </View>
              <Text style={styles.categoryBtnTxt}>Complaints</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                props.navigation.navigate('LeaveApp');
              }}>
              <View style={styles.categoryIcon}>
                <Image source={require('../../assets/image6.png')} />
              </View>
              <Text style={styles.categoryBtnTxt}>Leave</Text>
              <Text style={styles.categoryBtnsTxt}>Application </Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.categoryContainer, {marginTop: 10}]}>
            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                // props.navigation.navigate('Notification');
              }}>
              <View style={styles.categoryIcons}>
                <Image source={require('../../assets/image7.png')} />
              </View>
              <Text style={styles.categoryBtnTxt}>Performance</Text>
              <Text style={styles.categoryBtnsTxt}>Reports</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                props.navigation.navigate('Document');
              }}>
              <View style={styles.categoryIcon}>
                <Image source={require('../../assets/image8.png')} />
              </View>
              <Text style={styles.categoryBtnTxt}>Documents</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                props.navigation.navigate('Ptm');
              }}>
              <View style={styles.categoryIcon}>
                <Image source={require('../../assets/image9.png')} />
              </View>
              <Text style={styles.categoryBtnTxt}>PTM</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.categoryContainer, {marginTop: 10}]}>
            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                props.navigation.navigate('AttendanceShow');
              }}>
              <View style={styles.categoryIcon}>
                <Image source={require('../../assets/image12.png')} />
              </View>
              <Text style={styles.categoryBtnTxt}>Attendance</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                props.navigation.navigate('StudyMaterial');
              }}>
              <View style={styles.categoryIcon}>
                <Image source={require('../../assets/study.png')} />
              </View>
              <Text style={[styles.categoryBtnTxt, {textAlign: 'center'}]}>
                Study Material
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                props.navigation.navigate('Result');
              }}>
              <View style={styles.categoryIcon}>
                <Image source={require('../../assets/ReportCard.png')} />
              </View>
              <Text style={styles.categoryBtnTxt}>Result</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.categoryContainer, {marginTop: 10}]}>
            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                props.navigation.navigate('Certificate');
              }}>
              <View style={styles.categoryIcon}>
                <Image source={require('../../assets/Certificate.png')} />
              </View>
              <Text style={styles.categoryBtnTxt}>Certificate</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                props.navigation.navigate('Gallery');
              }}>
              <View style={styles.categoryIcon}>
                <Image source={require('../../assets/ImageGallery.png')} />
              </View>
              <Text style={[styles.categoryBtnTxt, {textAlign: 'center'}]}>
                Gallery
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                props.navigation.navigate('Request');
              }}>
              <View style={styles.categoryIcon}>
                <Image source={require('../../assets/NoAccess.png')} />
              </View>
              <Text style={styles.categoryBtnTxt}>Request Access</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Modal
        visible={showmodal}
        onDismiss={() => dispatch(setShowModal(false))}
        contentContainerStyle={{
          width: '75%',
          height: 250,
          backgroundColor: COLORS.bg,
          alignSelf: 'center',
          padding: 15,
          borderRadius: 5,
        }}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', paddingLeft: 15}}
          onPress={() => props.navigation.navigate('Settings')}>
          <Text style={[paraGray.darkpara]}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', paddingLeft: 15}}>
          <Text style={[paraGray.darkpara]}>My Pay Roll</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', paddingLeft: 15}}>
          <Text style={[paraGray.darkpara]}>Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderColor: COLORS.section,
          }}
        />
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', paddingLeft: 15}}
          onPress={Logout}>
          <Text style={[paraGray.darkpara, {color: COLORS.lightblack}]}>
            Log Out
          </Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E4E4E4',
  },
  headline: {
    flexDirection: 'row',
    color: 'black',
    textAlign: 'center',

    fontSize: 18,
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-SemiBold',
  },

  search: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderWidth: 0,
    borderColor: '#E4E4E4',
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
  },
  categoryIcons: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    marginTop: 10,
    borderRadius: 50,
  },
  categoryBtnsTxt: {
    alignSelf: 'center',
    marginTop: -7,
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
  },
});
