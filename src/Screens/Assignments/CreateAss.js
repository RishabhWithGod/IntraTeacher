import React, {useState, useEffect} from 'react'
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
import DocumentPicker from 'react-native-document-picker'
import StreamDropDown from '../DropDown/StreamDropDown'
import SubjectDropDown from '../DropDown/SubjectDropDown'
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

const CreateAss = props => {
  DropDownPicker.setListMode('SCROLLVIEW')
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    {label: 'Faculty Name', value: 'Faculty Name'},
    {label: 'Name', value: 'Name'},
  ])

  const [opens, setOpens] = useState(false)
  const [values, setValues] = useState(null)
  const [subjectitems, setSubjectItems] = useState([
    {label: 'A', value: 'A'},
    {label: 'B', value: 'B'},
    {label: 'C', value: 'C'},
  ])

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#FFFFFF'}}>
      <StreamDropDown/>
      <View style={styles.container}>
        <SubjectDropDown/>
       <View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#C4C4C4',
                width: '80%',
                height: 50,
                borderColor: '#C4C4C4',
                alignSelf: 'center',
                borderWidth: 2,
                marginTop: '10%',
                marginBottom: 15,
                bottom: 0,
                borderRadius: 5,
                justifyContent: 'center',
              }}
              onPress={async () => {
                try {
                  const res = await DocumentPicker.pick({
                    type: [DocumentPicker.types.allFiles],
                  })

                  console.log(
                    JSON.stringify(res),
                    // res.type, // mime type
                    // res.name,
                    // res.size,
                  )
                } catch (err) {
                  if (DocumentPicker.isCancel(err)) {
                    // User cancelled the picker, exit any dialogs or menus and move on
                  } else {
                    throw err
                  }
                }
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 18,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                Attach File
                <MaterialCommunityIcons name='plus' size={20} />
              </Text>
            </TouchableOpacity>
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
                  fontSize: 17,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
  )
}

export default CreateAss

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
