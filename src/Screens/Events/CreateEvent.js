import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import StreamDropDown from '../DropDown/StreamDropDown';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {paraGray} from '../../theme/styles/Base';
import Spinner from 'react-native-loading-spinner-overlay';
import {useSelector, useDispatch} from 'react-redux';
import Url from '../../Api/Url';
import ImagePicker from 'react-native-image-crop-picker';

const CreateEvent = () => {
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [getdata, setGetdata] = useState([]);
  const {userinfo, userid, username, showmodal, schoolid, teacherid} =
    useSelector(state => state.userReducer);
  const [title, setTitle] = useState('');
  const [eventdesc, setEventdesc] = useState('');
  const[image,setImage] = useState([]);

  // --------Date-time Picker----------
  const [date, setDate] = useState(new Date());
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
  const [dates, setDates] = useState(new Date());
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

  // useEffect(() => {
  //   getapiData();
  // }, []);

  // --------APICall----------

  const Create = async () => {
    // setRefreshing(false);
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('school_id', schoolid);
      formData.append('role_id', teacherid);
      formData.append('title', title);
      // formData.append('event_place', "surat");
      formData.append('note', eventdesc);
      formData.append('event_from', text);
      formData.append('event_to', texts);
      formData.append('image', image);
      
      let resp = await fetch(`${Url.event_data}`, {
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
          setGetdata(result);
          console.log('hi',result);
          setLoading(false);
        });
    } catch (error) {
      console.log('CreateEvent Error => ' + error);
      setLoading(false);
    }
  };
  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
    
  // }, []);

   // ---------------Image Picker-------------------
  // ----------To Select from gallery-------------------
  const SelectImage = () => {
    ImagePicker.openPicker({
      width: 250,
      height: 250,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  }

  return (
    <View style={styles.container}>
      {loading == true && <Spinner visible={load} />}
      <ScrollView
        showsVerticalScrollIndicator={false}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
        >
        <View style={{marginTop: 20}}>
          {/* <StreamDropDown /> */}
          <Text style={styles.formtxt}>Event Title:</Text>
          <View style={styles.txtbox}>
            <TextInput
              placeholder="ENTER TITLE"
              placeholderTextColor="#808080"
              value={title}
              onChangeText={value => setTitle(value)}
              style={{
                marginLeft: 0,
                backgroundColor: '#FFFFFF',
                width: '90%',
                height: 40,
                fontSize: 12,
                fontFamily: 'Montserrat-Regular',
              }}
            />
          </View>
          <Text
            style={[
              styles.formtxt,
              {marginBottom: 0, fontFamily: 'Montserrat-SemiBold'},
            ]}>
            Date to take participate:
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
          <Text style={styles.formtxt}>Add Description:</Text>
          <AutoGrowingTextInput
            style={styles.txtboxDesc}
            placeholder={'Add Description'}
            value={eventdesc}
            onChangeText={value => setEventdesc(value)}
          />
          <Text style={styles.formtxt}>Add Image/Optional:</Text>
          <TouchableOpacity style={styles.txtbox}
          onPress={SelectImage}>
            <TextInput
              placeholder="Add Image/Optional"
              placeholderTextColor="#808080"
              editable={false}
              value={image}
              style={{
                marginLeft: 0,
                backgroundColor: '#FFFFFF',
                width: '90%',
                height: 40,
                fontSize: 12,
                fontFamily: 'Montserrat-Regular',
              }}
            />
          </TouchableOpacity>
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
                borderWidth: 2,
                marginTop: 30,
                borderRadius: 15,
                justifyContent: 'center',
              }}
              onPress={Create}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 17,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                Create
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  txtbox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 50,
    borderColor: '#D3D3D3',
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 5,
  },
  txtboxDesc: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 80,
    borderColor: '#D3D3D3',
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 5,
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
  },
  formtxt: {
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: -10,
    color: '#000000',
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
  },
});
