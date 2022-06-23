import React, {useState} from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import StreamDropDown from '../DropDown/StreamDropDown'
import SubjectDropDown from '../DropDown/SubjectDropDown'
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

const ShareYtube = props => {
  

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#FFFFFF'}}>
      <StreamDropDown />
      <View style={styles.container}>
          <SubjectDropDown/>
        <Text style={styles.formtxt}>YouTube Embeded Code:</Text>
        <AutoGrowingTextInput style={styles.txtboxDesc} placeholder={'Your Embeded Code'} />
        <Text style={styles.formtxt}>Title:</Text>
        <View style={styles.txtbox}>
          <TextInput
            placeholder='ENTER TITLE'
            placeholderTextColor='#808080'
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
        <Text style={styles.formtxt}>ADD Message:</Text>
        <AutoGrowingTextInput style={styles.txtboxDesc} placeholder={'Add Message'} />

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
              marginTop: '15%',
              marginBottom: 30,
              bottom: 0,
              borderRadius: 15,
              justifyContent: 'center',
            }}
            onPress={() => {
              props.navigation.navigate('')
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 18,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Share
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default ShareYtube

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
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  formtxt: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: -10,
    color: '#000000',
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
  },
  labeltxt: {
    color: '#000000',
    marginLeft: 15,
    marginTop: 10,
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
})
