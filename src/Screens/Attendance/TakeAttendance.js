import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {
  setShowModal,
  setuserName,
  setuserId,
  setuserInfo,
  setuserEmail,
} from '../../Redux/Actions/actions';

const TakeAttendance = () => {
  const dispatch = useDispatch();
  const {userinfo, userid, username, showmodal} = useSelector(
    state => state.userReducer,
  );

  const [checked, setChecked] = useState('');
  const users = [
    {id: '1', name: 'Vikash Yadav', checked: 'first'},
    {id: '2', name: 'Vikash Gupta', checked: 'second'},
  ];
  const [stateuser, setStateusers] = useState(users);

  return (
    <View style={styles.container}>
      <View style={styles.rowcontainer}>
        <Text style={styles.rowTxt}>Student Name</Text>
        <Text style={styles.rowTxt}>Present</Text>
        <Text style={styles.rowTxt}>Absent</Text>
        <Text style={styles.rowTxt}>Late</Text>
      </View>

      {users.map((user, index) => (
        <View style={styles.dataview} key={index}>
          <View style={styles.radio}>
            <Text style={styles.datatxt}>{user.name}</Text>
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
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('second');
              }}
              // onPress={() =>{  setStateusers(user.checked='second');console.log(user.checked);} }
              // onChange={handleChange}
            />
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
      ))}
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
