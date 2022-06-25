// import component
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector, useDispatch} from 'react-redux';
import Url from '../../Api/Url';

const SubjectDropDown = () => {
  DropDownPicker.setListMode('SCROLLVIEW');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Maths', value: 'Faculty Name'},
    {label: 'Science', value: 'Name'},
    {label: 'English', value: 'Names'},
  ]);

  const {userinfo, userid, username, showmodal, schoolid} = useSelector(
    state => state.userReducer,
  );
  const [getdata, setGetdata] = useState([]);

  useEffect(() => {
    getapiData();
    // console.log("Tid"+schoolid)
    // console.log("Uid"+userid)
  }, []);

  // --------APICall----------

  const getapiData = async () => {
    // setRefreshing(false);
    // setLoading(true);
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
          // console.log(result);
          setGetdata(result.data);
          // setLoading(false);
        });
    } catch (error) {
      console.log('DropSubject Error => ' + error);
      // setLoading(false);
    }
  };

  return (
    <View>
      <Text style={styles.labeltxt}>Subject </Text>
      <DropDownPicker
        open={open}
        value={value}
        items={getdata.map(item => ({label: item.name, value: item.name}))}
        setOpen={setOpen}
        setValue={setValue}
        setItems={console.log('Selected Subject => ' + value)}
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
  );
};
export default SubjectDropDown;

const styles = StyleSheet.create({
  labeltxt: {
    color: '#000000',
    marginLeft: 15,
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
});
