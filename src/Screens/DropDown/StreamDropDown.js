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
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   {label: 'FY', value: 'Faculty Name'},
  //   {label: 'SY', value: 'Name'},
  //   {label: 'TY', value: 'Names'},
  // ]);

  const {userinfo, userid, username, showmodal, schoolid,value} = useSelector(
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
          console.log(result);
          setGetdata(result.data);
          // setLoading(false);
        });
    } catch (error) {
      console.log('DropStream Error => ' + error);
      // setLoading(false);
    }
  };
  

  return (
    <View>
      <Text style={styles.labeltxt}>Stream</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={getdata.map(item => ({label: item.name, value: item.name}))}
        setOpen={setOpen}
        setValue={setValue}
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
