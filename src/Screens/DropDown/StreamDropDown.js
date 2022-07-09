// import component
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector, useDispatch} from 'react-redux';
import Url from '../../Api/Url';
import {
  setShowModal,
  setuserName,
  setuserId,
  setuserInfo,
  setuserEmail,
  setValue
} from '../../Redux/Actions/actions';
const StreamDropDown = () => {
  const dispatch = useDispatch();
  DropDownPicker.setListMode('SCROLLVIEW');
  const [open, setOpen] = useState(false);
  const [valus11, setValue11] = useState(null);
  // dispatch(setValue(valus11));
  // const [items, setItems] = useState([
  //   {label: 'FY', value: 'Faculty Name'},
  //   {label: 'SY', value: 'Name'},
  //   {label: 'TY', value: 'Names'},
  // ]);

  // const dataValue = useSelector((state)=>state.userReducer,)
  // console.log("redux data:::",dataValue);

  const {userinfo, userid, username, showmodal, schoolid,teacherid} = useSelector(
   
    state => state.userReducer,
  );


  // console.log("ggkjgkf:::",value);
  // dispatch({
  //   type:"SET_VALUE",
  //   payload:value
  // });

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
          console.log(result);
          setGetdata(result.data);
          // console.log('hi' + result.data);
          // setLoading(false);
        });
    } catch (error) {
      console.log('AttendancePtm Error => ' + error);
      // setLoading(false);
    }
  };
  

  return (
    <View>
      <Text style={styles.labeltxt}>Stream</Text>
      <DropDownPicker
        open={open}
        value={valus11}
        items={getdata.map(item => ({label: item.class_name, value: item.class_id}))}
        setOpen={setOpen}
        setValue={setValue11}
        // onChangeValue={({value}) => {
        //   (setValue(value),console.log(value))
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
export default StreamDropDown;

const styles = StyleSheet.create({
  labeltxt: {
    color: '#000000',
    marginLeft: 15,
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
});
