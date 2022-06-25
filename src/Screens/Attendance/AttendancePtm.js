import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import StandardSelectBtn from './StandardSelectBtn';
import StreamDropDown from '../DropDown/StreamDropDown';
import SubjectDropDown from '../DropDown/SubjectDropDown';
import {useSelector, useDispatch} from 'react-redux';
import Url from '../../Api/Url';
import {COLORS} from '../../theme/Colors';
import Spinner from 'react-native-loading-spinner-overlay';

const AttendancePtm = props => {
  DropDownPicker.setListMode('SCROLLVIEW');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [opens, setOpens] = useState(false);
  const [values, setValues] = useState(null);
  const [classopen, setClassOpen] = useState(false);
  const [classvalue, setClassValue] = useState(null);

  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [getdata, setGetdata] = useState([]);
  const {userinfo, userid, username, showmodal, schoolid} = useSelector(
    state => state.userReducer,
  );
  useEffect(() => {
    getapiData();
    // console.log("Tid"+schoolid)
    // console.log("Uid"+userid)
  }, []);

  // --------APICall----------

  const getapiData = async () => {
    setRefreshing(false);
    setLoading(true);
    try {
      const formData = new FormData();
      // formData.append('school_id', schoolid);
      formData.append('teacher_id', userid);
      let resp = await fetch(`${Url.getclass}`, {
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
          setGetdata(result.data);
          setLoading(false);
        });
    } catch (error) {
      console.log('AttendancePtm Error => ' + error);
      setLoading(false);
    }
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getapiData();
  }, []);

  return (
    <View style={styles.container}>
      {loading == true && <Spinner visible={load}/>}
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {/* <View style={{marginTop: 30}}>
          <Text style={styles.labeltxt}>Stream</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={getdata.map(item => ({label: item.name, value: item.name}))}
            setOpen={setOpen}
            setValue={setValue}
            // onChangeValue={value => {
            //   console.log(value);
            // }}
            // setItems={console.log('Selected Stream => ' + value)}
            placeholder="Select Stream"
            multiple={false}
            min={0}
            max={5}
            searchable={true}
            // autoScroll={true}
            // dropDownDirection="TOP"
            style={{
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#E5E5E5',
              borderColor: '#E5E5E5',
              marginTop: 10,
              zIndex: 1,
            }}
            textStyle={{
              fontSize: 13,
              fontFamily: 'Montserrat-Regular',
            }}
            dropDownContainerStyle={{
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#E5E5E5',
              borderColor: '#E5E5E5',
            }}
          />
        </View> */}
        <View>
          <Text style={styles.labeltxt}>Class </Text>
          <DropDownPicker
            open={classopen}
            value={classvalue}
            items={getdata.map(item => ({
              label: item.numeric_name,
              value: item.numeric_name,
            }))}
            setOpen={setClassOpen}
            setValue={setClassValue}
            // setItems={console.log('Selected Subject => ' + values)}
            placeholder="Select Class"
            multiple={false}
            min={0}
            max={5}
            searchable={true}
            // autoScroll={true}
            // dropDownDirection="TOP"
            style={{
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#E5E5E5',
              borderColor: '#E5E5E5',
              marginTop: 10,
              zIndex: open != false ? 0 : 1,
            }}
            textStyle={{
              fontSize: 13,
              fontFamily: 'Montserrat-Regular',
            }}
            dropDownContainerStyle={{
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#E5E5E5',
              borderColor: '#E5E5E5',
            }}
          />
        </View>
        <View>
          <Text style={styles.labeltxt}>Subject </Text>
          <DropDownPicker
            open={opens}
            value={values}
            items={getdata.map(item => ({label: item.name, value: item.name}))}
            setOpen={setOpens}
            setValue={setValues}
            // setItems={console.log('Selected Subject => ' + values)}
            placeholder="Select Subject"
            multiple={false}
            min={0}
            max={5}
            searchable={true}
            // autoScroll={true}
            // dropDownDirection="TOP"
            style={{
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#E5E5E5',
              borderColor: '#E5E5E5',
              marginTop: 10,
              zIndex: classopen != false ? 0 : 1,
            }}
            textStyle={{
              fontSize: 13,
              fontFamily: 'Montserrat-Regular',
            }}
            dropDownContainerStyle={{
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#E5E5E5',
              borderColor: '#E5E5E5',
            }}
          />
        </View>
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
              marginTop: '40%',
              marginBottom: 30,
              borderRadius: 15,
              justifyContent: 'center',
            }}
            onPress={() => {
              props.navigation.navigate('TakeAttendance', {
                streamvalue: value,
                classvalue: classvalue,
                subjectvalue: values,
              });
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 18,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Show
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AttendancePtm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  labeltxt: {
    color: '#000000',
    marginLeft: 15,
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
});
