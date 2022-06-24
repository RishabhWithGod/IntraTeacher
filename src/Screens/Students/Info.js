import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {paraGray} from '../../theme/styles/Base';
import {COLORS} from '../../theme/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';

const Info = () => {
  const [student, setStudent] = useState({
    image: '',
    name: '',
    mobileno: '',
    email: '',
    fathername: '',
    fathermobileno: '',
    fatheremail: '',
    mothername: '',
    mothermobileno: '',
    motheremail: '',
    Address: '',
  });

  //   -----------------DropDownPicker------------
  DropDownPicker.setListMode('SCROLLVIEW');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'cdd', value: 'cdd'},
    {label: 'aaaa', value: 'aaaa'},
  ]);
  const [opens, setOpens] = useState(false);
  const [values, setValues] = useState(null);
  const [Genderitems, setGenderItems] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Other', value: 'Other'},
  ]);
  const [opened, setOpened] = useState(false);
  const [valued, setValued] = useState(null);
  const [Subitems, setSubItems] = useState([
    {label: 'Math', value: 'Math'},
    {label: 'ABC', value: 'ABC'},
    {label: 'CDE', value: 'CDE'},
  ]);
  const [openbus, setOpenbus] = useState(false);
  const [valuebus, setValuebus] = useState(null);
  const [Busitem, setBusItem] = useState([
    {label: 'Math', value: 'Math'},
    {label: 'ABC', value: 'ABC'},
    {label: 'CDE', value: 'CDE'},
  ]);

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

    //  -------For Both Date and Time Picker---------
    // let tempDate = new Date(currentDate);
    // let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    // let fTime = 'Hours:' + tempDate.getHours() + '| Minutes: ' + tempDate.getMinutes();
    // setText(fDate + '/n + fTime)
    // console.log(fDate + '(n' + fTime + ')')
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  // const showTimepicker = () => {
  //     showMode('time');
  // };

  // ---------------Image Picker-------------------
  // ----------To Select from gallery-------------------
  const SelectImage = () => {
    ImagePicker.openPicker({
      width: 250,
      height: 250,
      cropping: true,
    }).then(image => {
      console.log(image);
      setStudent({image: image.path});
    });

    // -----------------For Camera------------------------
    // ImagePicker.openCamera({
    //   width: 300,
    //   height: 400,
    //   cropping: true,
    // }).then(image => {
    //   console.log(image);
    //   setSelectedImage(image.path);
    // });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 50,
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={[paraGray.darklarge, {textAlign: 'center', marginTop: 5}]}>
            INFO
          </Text>
        </View>
      </View>
      <View
        style={{flex: 1, borderBottomWidth: 1.5, borderColor: COLORS.section}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#C4C4C440',
              width: '80%',
              height: 80,
              borderRadius: 13,
              alignSelf: 'center',
              marginTop: 20,
              paddingHorizontal: 20,
            }}
            onPress={SelectImage}>
            {student.image == '' ? (
              <FontAwesome5 name="user-alt" size={20} color="#000000" />
            ) : (
              <Avatar.Image size={50} source={{uri: student.image}} />
            )}
            <Text style={styles.label}>Add Profile Picture</Text>
          </TouchableOpacity>

          <Text style={styles.formtxt}>Name:</Text>
          <View style={styles.txtbox}>
            <TextInput
              placeholder="ENTER NAME"
              placeholderTextColor="#808080"
              value={student.name}
              onChangeText={value => {
                setStudent({name: value});
              }}
              style={{
                marginLeft: 2,
                backgroundColor: '#FFFFFF',
                width: '90%',
                height: 40,
                fontFamily: 'Montserrat-Regular',
              }}
            />
          </View>
          <Text style={styles.formtxt}>Mobile No:</Text>
          <View style={styles.txtbox}>
            <TextInput
              placeholder="ENTER MOBILE NUMBER"
              placeholderTextColor="#808080"
              value={student.mobileno}
              onChangeText={value => {
                setStudent({mobileno: value});
              }}
              style={{
                marginLeft: 2,
                backgroundColor: '#FFFFFF',
                width: '90%',
                height: 40,
                fontFamily: 'Montserrat-Regular',
              }}
            />
          </View>
          <Text style={styles.formtxt}>Email ID:</Text>
          <View style={styles.txtbox}>
            <TextInput
              placeholder="EMAIL ID HERE"
              placeholderTextColor="#808080"
              value={student.email}
              onChangeText={value => {
                setStudent({email: value});
              }}
              style={{
                marginLeft: 2,
                backgroundColor: '#FFFFFF',
                width: '90%',
                height: 40,
                fontFamily: 'Montserrat-Regular',
              }}
            />
          </View>
          <Text style={styles.formtxt}>Stream:</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={styles.txtbox}
            placeholder="SELECT STREAM"
            dropDownDirection="TOP"
            dropDownContainerStyle={{
              width: '90%',
              alignSelf: 'center',
              borderColor: '#C4C4C4',
            }}
            textStyle={{
              fontSize: 13,
              color: '#000000',
              fontFamily: 'Montserrat-Regular',
            }}
          />
          <Text style={styles.formtxt}>Gender:</Text>
          <DropDownPicker
            open={opens}
            value={values}
            items={Genderitems}
            setOpen={setOpens}
            setValue={setValues}
            setItems={setGenderItems}
            style={styles.txtbox}
            placeholder="SELECT GENDER"
            // dropDownDirection="Bottom"
            dropDownContainerStyle={{
              width: '90%',
              alignSelf: 'center',
              borderColor: '#C4C4C4',
            }}
            textStyle={{
              fontSize: 13,
              color: '#000000',
              fontFamily: 'Montserrat-Regular',
            }}
          />
          <Text style={styles.formtxt}>DOB:</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              width: '90%',
              height: 50,
              borderColor: '#D3D3D3',
              paddingHorizontal: 0,
              borderWidth: 2,
              marginTop: 15,
              borderRadius: 10,
              alignSelf: 'center',
            }}>
            <TextInput
              placeholder="SELECT DOB"
              placeholderTextColor="#808080"
              style={{
                marginLeft: 2,
                backgroundColor: '#FFFFFF',
                width: '90%',
                height: 40,
                fontFamily: 'Montserrat-Regular',
              }}>
              {text}
            </TextInput>
            <MaterialCommunityIcons
              name="calendar-blank-outline"
              size={26}
              color="#434b56"
              onPress={showDatepicker}
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
          </View>
          <Text style={styles.formtxt}>Father Name:</Text>
          <View style={styles.txtbox}>
            <TextInput
              placeholder="ENTER NAME"
              placeholderTextColor="#808080"
              value={student.fathername}
              onChangeText={value => {
                setStudent({fathername: value});
              }}
              style={{
                marginLeft: 2,
                backgroundColor: '#FFFFFF',
                width: '90%',
                height: 40,
                fontFamily: 'Montserrat-Regular',
              }}
            />
          </View>
          <Text style={styles.formtxt}>Father Mobile No:</Text>
          <View style={styles.txtbox}>
            <TextInput
              placeholder="ENTER MOBILE NUMBER"
              placeholderTextColor="#808080"
              value={student.fathermobileno}
              onChangeText={value => {
                setStudent({fathermobileno: value});
              }}
              style={{
                marginLeft: 2,
                backgroundColor: '#FFFFFF',
                width: '90%',
                height: 40,
                fontFamily: 'Montserrat-Regular',
              }}
            />
          </View>
          <Text style={styles.formtxt}>Father Email Id:</Text>
          <View style={styles.txtbox}>
            <TextInput
              placeholder="ENTER EMAIL ID HERE"
              placeholderTextColor="#808080"
              value={student.fatheremail}
              onChangeText={value => {
                setStudent({fatheremail: value});
              }}
              style={{
                marginLeft: 2,
                backgroundColor: '#FFFFFF',
                width: '90%',
                height: 40,
                fontFamily: 'Montserrat-Regular',
              }}
            />
          </View>
          <Text style={styles.formtxt}>Mother Name:</Text>
          <View style={styles.txtbox}>
            <TextInput
              placeholder="ENTER NAME"
              placeholderTextColor="#808080"
              value={student.mothername}
              onChangeText={value => {
                setStudent({mothername: value});
              }}
              style={{
                marginLeft: 2,
                backgroundColor: '#FFFFFF',
                width: '90%',
                height: 40,
                fontFamily: 'Montserrat-Regular',
              }}
            />
          </View>
          <Text style={styles.formtxt}>Mother Mobile No:</Text>
          <View style={styles.txtbox}>
            <TextInput
              placeholder="ENTER MOBILE NUMBER"
              placeholderTextColor="#808080"
              value={student.mothermobileno}
              onChangeText={value => {
                setStudent({mothermobileno: value});
              }}
              style={{
                marginLeft: 2,
                backgroundColor: '#FFFFFF',
                width: '90%',
                height: 40,
                fontFamily: 'Montserrat-Regular',
              }}
            />
          </View>
          <Text style={styles.formtxt}>Mother Email Id:</Text>
          <View style={styles.txtbox}>
            <TextInput
              placeholder="ENTER EMAIL HERE"
              placeholderTextColor="#808080"
              value={student.motheremail}
              onChangeText={value => {
                setStudent({motheremail: value});
              }}
              style={{
                marginLeft: 2,
                backgroundColor: '#FFFFFF',
                width: '90%',
                height: 40,
                fontFamily: 'Montserrat-Regular',
              }}
            />
          </View>
          <Text style={styles.formtxt}>Parmanent Add:</Text>
          <View style={styles.txtbox}>
            <TextInput
              placeholder="Parmanent Add"
              placeholderTextColor="#808080"
              value={student.Address}
              onChangeText={value => {
                setStudent({Address: value});
              }}
              style={{
                marginLeft: 2,
                backgroundColor: '#FFFFFF',
                width: '90%',
                height: 40,
                fontFamily: 'Montserrat-Regular',
              }}
            />
          </View>
          {/* <Text style={styles.formtxt}>School Bus No:</Text>
        <DropDownPicker
          open={openbus}
          value={valuebus}
          items={Busitem}
          setOpen={setOpenbus}
          setValue={setValuebus}
          setItems={setBusItem}
          style={styles.txtbox}
          placeholder="SELECT BUS"
          // dropDownDirection="Bottom"
          dropDownContainerStyle={{
            width: '90%',
            alignSelf: 'center',
            borderColor: '#C4C4C4',
          }}
          textStyle={{
            fontSize: 13,
            color: '#000000',
            fontFamily: 'Montserrat-Regular',
          }}
        /> */}
          <Text style={styles.formtxt}>Select Subjects:</Text>
          <DropDownPicker
            open={opened}
            value={valued}
            items={Subitems}
            setOpen={setOpened}
            setValue={setValued}
            setItems={setSubItems}
            style={styles.txtbox}
            placeholder="Choose Subjects"
            // dropDownDirection="Bottom"
            dropDownContainerStyle={{
              width: '90%',
              alignSelf: 'center',
              borderColor: '#C4C4C4',
            }}
            textStyle={{
              fontSize: 13,
              color: '#000000',
              fontFamily: 'Montserrat-Regular',
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 60,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                width: '80%',
                height: 60,
                borderColor: '#000000',
                alignSelf: 'center',
                borderWidth: 2,
                marginTop: 15,
                borderRadius: 10,
                justifyContent: 'center',
                elevation: 3,
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 12,
                  fontFamily: 'Montserrat-Regular',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#000000',
                width: '80%',
                height: 60,
                borderColor: '#D3D3D3',
                alignSelf: 'center',
                borderWidth: 2,
                marginTop: 15,
                borderRadius: 10,
                justifyContent: 'center',
                elevation: 3,
              }}
              onPress={{}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 12,
                  fontFamily: 'Montserrat-Regular',
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  label: {
    flexDirection: 'row',
    color: 'black', // <-- The magic
    textAlign: 'center', // <-- The magic
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    paddingHorizontal: '10%',
  },
  txtbox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 50,
    borderColor: '#D3D3D3',
    alignSelf: 'center',
    borderWidth: 2,
    marginTop: 15,
    borderRadius: 10,
  },
  formtxt: {
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: -10,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#000000',
  },
});
