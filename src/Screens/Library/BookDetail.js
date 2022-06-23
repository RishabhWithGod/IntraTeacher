import React, {useState} from 'react'
import {ScrollMenu} from 'react-horizontal-scrolling-menu'
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import {Avatar} from 'react-native-paper'
import {ScrollView} from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'
import BookDropDown from './BookDropDownLib'
import StreamDropDownLib from './StreamDropDownLib'

const BookDetail = props => {
  const {name} = props.route.params
  const {stream} = props.route.params
  const [value, onChangeText] = useState('')

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.search}>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#FFFFFF",
                            width: "100%",
                            height: 50,
                            borderColor: "#D3D3D3",
                            paddingHorizontal: 0,
                            borderWidth: 2,
                            marginTop: 15,
                            borderRadius: 10,
                        }}>

                            <TextInput
                                placeholder="Search by Names./Contact number"
                                placeholderTextColor="#808080"
                                style={{
                                    marginLeft: 0,
                                    backgroundColor: "#FFFFFF",
                                    width: "90%",
                                    height: 40,
                                    fontSize: 12,
                                    fontFamily: 'Montserrat-Regular',
                                }}
                            />
                                 <Feather name="search" size={29} color="#000000" />
                    </View>
      </View> */}

      <View style={{marginTop: 15}}>  
        <Text style={styles.txt}>Student Info</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 20,
            alignItems: 'flex-end',
          }}>
          <Text style={styles.txt}>
            Name:
            <Text style={styles.datatxt}>{name}</Text>
          </Text>
          <Avatar.Image
            source={{}}
            size={45}
            style={{backgroundColor: '#000000'}}
          />
        </View>
        {/* <Text style={styles.txt}>
                            Std:{book.value}
                        </Text> */}
        <Text style={styles.txt}>
          Stream:
          <Text style={styles.datatxt}>{stream}</Text>
        </Text>
      </View>
      <View>
        <StreamDropDownLib />
      </View>
      <View>
        <BookDropDown />
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
            marginTop: 40,
            marginBottom: 20,
            borderRadius: 15,
            justifyContent: 'center',
          }}
          onPress={() => {
            props.navigation.navigate('AssignBook', {
              name: name,
              stream: stream,
              value: value,
            })
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Assign Book
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default BookDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  search: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderWidth: 0,
    borderColor: '#E4E4E4',
  },

  txt: {
    marginTop: 20,
    paddingHorizontal: 20,
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
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
  formtxt: {
    marginTop: 25,
    paddingHorizontal: 20,
    marginBottom: -10,
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
  datatxt: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
  },
})
