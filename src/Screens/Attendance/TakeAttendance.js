import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import Url from '../../Api/Url';
import {
  setShowModal,
  setuserName,
  setuserId,
  setuserInfo,
  setuserEmail,
} from '../../Redux/Actions/actions';
import Spinner from 'react-native-loading-spinner-overlay';
import {COLORS} from '../../theme/Colors';
import {paraGray} from '../../theme/styles/Base';

const TakeAttendance = (props) => {
  const {streamvalue, subjectvalue,classvalue} = props.route.params;
  const dispatch = useDispatch();
  const {userinfo, userid, username, showmodal, schoolid} = useSelector(
    state => state.userReducer,
  );
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [checked, setChecked] = useState('');
  const users = [
    {id: '1', name: 'Vikash Yadav', checked: 'first'},
    {id: '2', name: 'Vikash Gupta', checked: 'second'},
  ];
  const [stateuser, setStateusers] = useState(users);
  const [getdata, setGetdata] = useState([]);

  useEffect(() => {
    getapiData();
    // console.log("data "+subjectvalue)
  }, []);

  // --------APICall----------

  const getapiData = async () => {
    setRefreshing(false);
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('school_id', schoolid);
      formData.append('teacher_id', userid);
      let resp = await fetch(`${Url.studentList}`, {
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
          // console.log(result);
          setGetdata(result.data);
          setLoading(false);
        });
    } catch (error) {
      console.log('TakeAttendance Error => ' + error);
      setLoading(false);
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getapiData();
  }, []);

  return (
    <View style={styles.container}>
      {loading == true && <Spinner visible={load} />}
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.rowcontainer}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              marginRight: 20,
            }}>
            <Text style={[styles.rowTxt, {textAlign: 'center'}]}>
              Student Name
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.rowTxt}>Present</Text>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.rowTxt}>Absent</Text>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.rowTxt}>Late</Text>
          </View>
        </View>

        {getdata.map((user, index) => (
          <View style={styles.dataview} key={index}>
            <View style={styles.radio}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.datatxt}>{user.name}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked('first');
                  }}
                  //  onPress={() =>{ setStateusers(user.checked='first');console.log(user.checked);} }
                  // color={'#C4C4C4'}
                  // onChange={handleChange}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <RadioButton
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked('second');
                  }}
                  // onPress={() =>{  setStateusers(user.checked='second');console.log(user.checked);} }
                  // onChange={handleChange}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <RadioButton
                  value="third"
                  status={checked === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked('third');
                  }}
                  // onPress={() =>{  setStateusers(user.checked='second');console.log(user.checked);} }
                  // onChange={handleChange}
                />
              </View>
            </View>
          </View>
        ))}
        {getdata == '' && (
          <View
            style={{
              flex: 1,
              marginBottom: 80,
              alignSelf: 'center',
              marginTop: 100,
            }}>
            <Text style={[paraGray.darklarge, {textAlign: 'center'}]}>
              NO Data Found
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default TakeAttendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  rowcontainer: {
    alignItems: 'center',
    paddingHorizontal: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowTxt: {
    flexWrap: 'wrap',
    marginTop: 20,
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
    alignSelf: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  dataview: {
    paddingHorizontal: '6%',
    marginTop: 10,
    fontSize: 20,
    color: '#000000',
    fontWeight: '500',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  datatxt: {
    alignSelf: 'center',

    fontSize: 15,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
  },
  radio: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
});
