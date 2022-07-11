import React, {useState, useEffect} from 'react';
import {dataIndexAttribute} from 'react-horizontal-scrolling-menu/dist/types/constants';
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
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StreamDropDown from '../DropDown/StreamDropDown';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Dropdown} from 'react-native-element-dropdown';
import {useSelector, useDispatch} from 'react-redux';
import Url from '../../Api/Url';
import {COLORS} from '../../theme/Colors';
import Spinner from 'react-native-loading-spinner-overlay';

const HistoryAtten = props => {
  // const {subjects} = props.route.params;
  const [classvalue, setClassValue] = useState(null);
  const [class_name, setClass_Name] = useState(null);
  const [sectionvalue, setSectionValue] = useState(null);
  const [section_name, setSection_Name] = useState(null);
  const [subjectvalue, setSubjectValue] = useState(null);
  const [subject_name, setSubject_Name] = useState(null);
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [getdata, setGetdata] = useState([]);
  const [getsubdata, setGetsubdata] = useState([]);
  const [getsectiondata, setGetsectiondata] = useState([]);
  const {userinfo, userid, username, showmodal, schoolid, teacherid} =
    useSelector(state => state.userReducer);
  const [isFocus, setIsFocus] = useState(false);
  const [issectionFocus, setIssectionFocus] = useState(false);
  const [issubjectFocus, setIssubjectFocus] = useState(false);

  useEffect(() => {
    getapiData();
    // console.log(date);
    // console.log("Tid"+teacherid)
    // console.log('Uid' + userid);
  }, []);

  // --------Date-time Picker----------
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    
    //For Date Picker
    let tempDate = new Date(currentDate);
    
    let fDate =
    
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setText(fDate);
    console.log(fDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  // --------Date-time Picker----------
  const [dates, setDates] = useState(new Date(1598051730000));
  const [modes, setModes] = useState('date');
  const [shows, setShows] = useState(false);
  const [texts, setTexts] = useState('');

  const onChanges = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShows(Platform.OS === 'ios');
    setDates(currentDate);

    //For Date Picker
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setTexts(fDate);
    console.log(fDate);
  };

  const showModes = currentMode => {
    setShows(true);
    setModes(currentMode);
  };

  const showDatepickers = () => {
    showModes('date');
  };

  // --------APICall----------

  const getapiData = async () => {
    setRefreshing(false);
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('user_id', userid);
      formData.append('teacher_id', teacherid);

      let resp = await fetch(`${Url.get_all_class}`, {
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
          // console.log('hi' + result.data);
          setLoading(false);
        });
    } catch (error) {
      console.log('AttendancePtm Error => ' + error);
      setLoading(false);
    }
  };
  const getsectionData = async item => {
    // console.log('first' + JSON.stringify(classvalue));
    // getsectionData();
    // setRefreshing(false);
    // setLoading(true);
    try {
      const formData = new FormData();
      // formData.append('school_id', schoolid);
      formData.append('teacher_id', teacherid);
      formData.append('class_id', item.value);
      let resp = await fetch(`${Url.get_section_classId}`, {
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
          setGetsectiondata(result.data);
          setLoading(false);
        });
    } catch (error) {
      console.log('AttendancePtm Error => ' + error);
      setLoading(false);
    }
  };
  const getsubjectData = async item => {
    // console.log('firstS' + item.value);
    // setRefreshing(false);
    // setLoading(true);
    try {
      const formData = new FormData();
      // formData.append('school_id', schoolid);
      formData.append('teacher_id', userid);
      formData.append('class_id', classvalue);
      let resp = await fetch(`${Url.get_subject_classID}`, {
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
          setGetsubdata(result.data);
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
      {loading == true && <Spinner visible={load} />}
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{marginTop: 20, paddingHorizontal: 15}}>
          <Text style={styles.labeltxt}>Class</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={getdata.map(item => ({
              label: item.class_name,
              value: item.class_id,
            }))}
            search
            containerStyle={{
              backgroundColor: '#E5E5E5',
              borderColor: '#E5E5E5',
            }}
            fontFamily={'Montserrat-Regular'}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={classvalue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setClassValue(item.value);
              setClass_Name(item.label);
              setIsFocus(false);
              getsectionData(item);
            }}
            // renderLeftIcon={() => (
            //   <AntDesign
            //     style={styles.icon}
            //     color={isFocus ? 'blue' : 'black'}
            //     name="Safety"
            //     size={20}
            //   />
            // )}
          />
        </View>
        <View style={{paddingHorizontal: 15}}>
          <Text style={styles.labeltxt}>Section</Text>
          <Dropdown
            style={[styles.dropdown, issectionFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={getsectiondata.map(item => ({
              label: item.section_name,
              value: item.section_id,
            }))}
            search
            containerStyle={{
              backgroundColor: '#E5E5E5',
              borderColor: '#E5E5E5',
            }}
            fontFamily={'Montserrat-Regular'}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!issectionFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={sectionvalue}
            onFocus={() => setIssectionFocus(true)}
            onBlur={() => setIssectionFocus(false)}
            onChange={item => {
              setSectionValue(item.value);
              setSection_Name(item.label);
              setIssectionFocus(false);
              getsubjectData(item);
            }}
          />
        </View>
        <View style={{paddingHorizontal: 15, marginBottom: 10}}>
          <Text style={styles.labeltxt}>Subject</Text>
          <Dropdown
            style={[styles.dropdown, issubjectFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={getsubdata.map(item => ({
              label: item.name,
              value: item.id,
            }))}
            search
            containerStyle={{
              backgroundColor: '#E5E5E5',
              borderColor: '#E5E5E5',
            }}
            fontFamily={'Montserrat-Regular'}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!issubjectFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={subjectvalue}
            onFocus={() => setIssubjectFocus(true)}
            onBlur={() => setIssubjectFocus(false)}
            onChange={item => {
              // getsectionData(item);
              setSubjectValue(item.value);
              setSubject_Name(item.label);
              setIssubjectFocus(false);
            }}
          />
        </View>
        <Text style={[styles.labeltxt, {marginLeft: 15, marginBottom: 0}]}>
          Choose Date
        </Text>
        <Text style={styles.formtxt}>From</Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: '90%',
            height: 50,
            borderColor: '#C4C4C4',
            paddingHorizontal: 0,
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
            alignSelf: 'center',
          }}
          onPress={showDatepicker}>
          <TextInput
            placeholder="Choose Date"
            placeholderTextColor="#808080"
            editable={false}
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#C4C4C4',
              width: '90%',
              height: 40,
              fontSize: 12,
              fontFamily: 'Montserrat-Regular',
            }}>
            {text}
          </TextInput>
          <MaterialCommunityIcons
            name="calendar-blank-outline"
            size={26}
            color="#434b56"
            // onPress={showDatepicker}
          />

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
              
            />
          )}
        </TouchableOpacity>
        <Text style={styles.formtxt}>To</Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: '90%',
            height: 50,
            borderColor: '#C4C4C4',
            paddingHorizontal: 0,
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
            alignSelf: 'center',
          }}
          onPress={showDatepickers}>
          <TextInput
            placeholder="Choose Date"
            placeholderTextColor="#808080"
            editable={false}
            style={{
              marginLeft: 0,
              backgroundColor: '#FFFFFF',
              borderColor: '#C4C4C4',
              width: '90%',
              height: 40,
              fontSize: 12,
              fontFamily: 'Montserrat-Regular',
            }}>
            {texts}
          </TextInput>
          <MaterialCommunityIcons
            name="calendar-blank-outline"
            size={26}
            color="#434b56"
            // onPress={showDatepickers}
          />

          {shows && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dates}
              mode={modes}
              is24Hour={true}
              display="default"
              onChange={onChanges}
              
            />
          )}
        </TouchableOpacity>
        {text !== '' && (
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
                marginTop: 20,
                marginBottom: 30,
                borderRadius: 15,
                justifyContent: 'center',
              }}
              onPress={() => {
                // setLoading(true);
                props.navigation.navigate('HistoryAttendance', {
                  classvalue: classvalue,
                  classname: class_name,
                  sectionname: section_name,
                  sectionvalue: sectionvalue,
                  subjectvalue: subjectvalue,
                  subjectname: subject_name,
                  fromdate:text
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
        )}
      </ScrollView>
    </View>
  );
};

export default HistoryAtten;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  label: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  subtxt: {
    marginTop: 25,
    fontSize: 13,
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: '6%',
  },
  formtxt: {
    marginTop: 10,
    paddingHorizontal: 20,
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  labeltxt: {
    color: '#000000',
    // marginLeft: 10,
    marginBottom: 10,
    marginTop: 20,
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
});
