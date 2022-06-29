import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
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


const TakeAttendance = props => {
  const {streamvalue, subjectvalue, classvalue, sectionvalue} =
    props.route.params;
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
  const [date, setDate] = useState(null);
  const [getAttendance, setAttendance] = useState([]);

  useEffect(() => {
    getapiData();
    // console.log('data ' + schoolid);
    // console.log('data ' + classvalue);
    // console.log('data ' + sectionvalue);
    let today = new Date();
    let date =
      today.getDate() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getFullYear();
    setDate(date);
    // console.log(date);
  }, []);

  // --------APICall----------

  const getapiData = async () => {
    setRefreshing(false);
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('school_id', schoolid);
      formData.append('class_id', classvalue);
      formData.append('section_id', sectionvalue);
      let resp = await fetch(`${Url.Find_Student_By_class_section}`, {
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

          getAttendance_data(result.data);
        });
    } catch (error) {
      console.log('TakeAttendance Error => ' + error);
      setLoading(false);
    }
  };

  const getAttendance_data = data => {
    let list = [];
    data.map((value, index) => {
      var json_data = {
        id: value.studentId,
        status: 0,
        attendance: 'P',
      };
      list.push(json_data);
    });
    setAttendance(list);
    // console.log('here' + JSON.stringify(getAttendance));
    setLoading(false);
  };

  const submitAttendance = async () => {
    setLoading(true);
    try {
      
      const formData = new FormData();
      formData.append('school_id', schoolid);
      formData.append('class_id', classvalue);
      formData.append('section_id', sectionvalue);
      formData.append('date', date);
      formData.append('students',getAttendance)
      // console.log(schoolid)
      // console.log(classvalue)
      // console.log(sectionvalue)
      // console.log(date)
      // console.log(getAttendance)
      let resp = await fetch(`${Url.student_attendance}`, {
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
          console.log(result);
          // setGetdata(result.data);
          setLoading(false);
          // getAttendance_data(result.data);
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
          <View>
            <Text style={styles.rowTxt}>Present</Text>
          </View>
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
          <View>
            <Text style={styles.rowTxt}>Absent</Text>
          </View>
        </View>

        {getdata.map(
          (user, index) =>
            getAttendance.length > 0 && (
              <View style={styles.dataview} key={index}>
                <View style={styles.radio}>
                  <View
                    style={{
                      // flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <RadioButton
                      value={getAttendance[index]}
                      status={
                        getAttendance[index].attendance === 'P'
                          ? 'checked'
                          : 'unchecked'
                      }
                      onPress={() => {
                        let list = [...getAttendance];
                        var json_data = {
                          id: user.studentId,
                          status: 0,
                          attendance: 'P',
                        };
                        list[index] = json_data;
                        setAttendance(list);
                        // console.log("first"+JSON.stringify(getAttendance))
                      }}
                      //  onPress={() =>{ setStateusers(user.checked='first');console.log(user.checked);} }
                      // color={'#C4C4C4'}
                      // onChange={handleChange}
                    />
                  </View>
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
                      // flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <RadioButton
                      value="second"
                      status={
                        getAttendance[index].attendance === 'A'
                          ? 'checked'
                          : 'unchecked'
                      }
                      onPress={() => {
                        let list = [...getAttendance];
                        var json_data = {
                          id: user.studentId,
                          status: 0,
                          attendance: 'A',
                        };
                        list[index] = json_data;
                        setAttendance(list);

                        // console.log("first"+JSON.stringify(getAttendance))
                      }}
                      // onPress={() =>{  setStateusers(user.checked='second');console.log(user.checked);} }
                      // onChange={handleChange}
                    />
                  </View>
                </View>
              </View>
            ),
        )}
        {getdata != '' && (
          <View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#000000',
                width: '80%',
                height: 50,
                borderColor: '#000000',
                alignSelf: 'center',
                borderWidth: 1,
                marginTop: '20%',
                marginBottom: 30,
                borderRadius: 15,
                justifyContent: 'center',
              }}
              onPress={() => {submitAttendance()}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        )}
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
