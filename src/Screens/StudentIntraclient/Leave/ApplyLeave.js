import React, { useState } from "react";
import { View, Text, Button, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

const ApplyLeave = () => {

 
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20, }}>
        <Text style={styles.formtxt}>
          Reason:
        </Text>
        <AutoGrowingTextInput style={styles.txtboxDesc} placeholder={'Reason For Leave'} />
        <Text style={styles.formtxt}>
          Add Description:
        </Text>
        <AutoGrowingTextInput style={styles.txtboxDesc} placeholder={'Add Description'} />
        <Text style={styles.formtxt}>
          Days Of Leave:
        </Text>
        <View style={styles.txtbox}>
          <TextInput
            placeholder="NO.OF LEAVE DAYS"
            placeholderTextColor="#808080"
            style={{
              marginLeft: 0,
              backgroundColor: "#FFFFFF",
              width: "90%",
              height: 40,
              fontFamily: 'Montserrat-Regular',
            }}
          />
        </View>
        <View>
          <TouchableOpacity style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#C4C4C4",
            width: "80%",
            height: 50,
            borderColor: "#C4C4C4",
            alignSelf: "center",
            borderWidth: 2,
            marginTop: 30,
            borderRadius: 5,
            justifyContent: 'center',


          }}
            onPress={{}}
          >
            <Text style={{
              color: '#FFFFFF',
              fontSize: 20,
              fontFamily: 'Montserrat-SemiBold',
            }}>Apply</Text>

          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ApplyLeave;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  txtbox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: "90%",
    height: 50,
    borderColor: "#D3D3D3",
    alignSelf: "center",
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 5,
  },
  txtboxDesc: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    width: "90%",
    height: 80,
    borderColor: "#D3D3D3",
    alignSelf: "center",
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 5,
    fontFamily: 'Montserrat-Regular',
  },
  formtxt: {
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: -10,
    color: "#000000",
    fontFamily: 'Montserrat-Regular',
  },
});
