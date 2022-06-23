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
import DropDownPicker from 'react-native-dropdown-picker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import TestStandardSelectBtn from './TestStandardSelectBtn'
import AddmoreOptionInc from './AddmoreOptionInc'
import StreamDropDown from '../DropDown/StreamDropDown'
import SubjectDropDown from '../DropDown/SubjectDropDown'

const CreateMcqTest = props => {
  
  const [inputs, setInputs] = useState([{key: '', value: ''}])
  const [input, setInput] = useState([{key: '', value: ''}])

  const addHandler = () => {
    const _inputs = [...inputs]
    _inputs.push({key: '', value: ''})
    setInputs(_inputs)
  }

  const inputHandler = (text, key) => {
    const _inputs = [...inputs]
    _inputs[key].value = text
    _inputs[key].key = key
    setInputs(_inputs)
  }
 

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFFFFF'}}>
      <StreamDropDown />
      <View style={styles.container}>
        <View>
          <SubjectDropDown/>
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
                fontSize: 13,
                fontFamily: 'Montserrat-Regular',
              }}
            />
          </View>

          <Text style={styles.formtxt}>Sub Title:</Text>
          <View style={styles.txtbox}>
            <TextInput
              placeholder='ENTER TITLE'
              placeholderTextColor='#808080'
              style={{
                marginLeft: 0,
                backgroundColor: '#FFFFFF',
                width: '90%',
                height: 40,
                fontSize: 13,
                fontFamily: 'Montserrat-Regular',
              }}
            />
          </View>

          <View>
            <Text
              style={{
                marginTop: 30,
                paddingHorizontal: 20,
                marginBottom: -10,
                color: '#000000',
                fontFamily: 'Montserrat-Regular',
              }}>
              Question 1:
            </Text>
            <View style={styles.txtbox}>
              <TextInput
                placeholder='ENTER QUESTION HERE'
                placeholderTextColor='#808080'
                style={{
                  marginLeft: 0,
                  backgroundColor: '#FFFFFF',
                  width: '90%',
                  height: 40,
                  fontSize: 13,
                  fontFamily: 'Montserrat-Regular',
                }}
              />
            </View>
          </View>

          <View>
            <Text
              style={{
                marginTop: 30,
                paddingHorizontal: 20,
                marginBottom: -10,
                color: '#000000',
                fontSize: 11,
                fontFamily: 'Montserrat-Regular',
              }}>
              Add Options of Questions 1:
              <MaterialCommunityIcons
                name='plus'
                size={12}
                color='#434b56'
                onPress={addHandler}>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Montserrat-SemiBold',
                    color: '#000000',
                  }}>
                  Add more Options
                </Text>
              </MaterialCommunityIcons>
            </Text>
          </View>
          {inputs.map((input, key) => (
            <View>
              <View style={styles.txtbox}>
                <TextInput
                  placeholder={'OPTIONS'}
                  placeholderTextColor='#808080'
                  value={input.value}
                  onChangeText={text => inputHandler(text, key)}
                  style={{
                    marginLeft: 0,
                    backgroundColor: '#FFFFFF',
                    width: '90%',
                    height: 40,
                    fontSize: 13,
                    fontFamily: 'Montserrat-Regular',
                  }}
                />
              </View>
            </View>
          ))}

          <View>
            <AddmoreOptionInc />
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
                borderWidth: 2,
                marginTop: '20%',
                marginBottom: 20,
                bottom: 0,
                borderRadius: 15,
                justifyContent: 'center',
                // elevation: 3,
              }}
              onPress={() => {
                props.navigation.navigate('')
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 16,
                  fontFamily: 'Montserrat-Regular',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default CreateMcqTest

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
  },
  formtxt: {
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: -10,
    color: '#000000',
    fontSize: 12,
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
