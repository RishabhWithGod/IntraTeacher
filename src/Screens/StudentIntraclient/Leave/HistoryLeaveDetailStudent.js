import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {Avatar} from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'

const HistoryLeaveDetailStudent = props => {

  const {leaves} = props.route.params;

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

          <Text style={styles.txt}>
            Title:
            <Text style={styles.datatxt}>{leaves.studentname}</Text>
          </Text>
        {/* <Text style={styles.txt}>
                        Std:{book.value}
                    </Text> */}
        <Text style={styles.txt}>
           Discription:
           <Text style={styles.datatxt}>{leaves.stream}</Text>
         </Text>
         <Text style={styles.txt}>
           Days:
           <Text style={styles.datatxt}>{leaves.days}</Text>
         </Text>
         <Text style={styles.txt}>
           {leaves.reasonlabel}:
           <Text style={styles.datatxt}>{leaves.approveleave}</Text>
         </Text>
      </View>
      <View>
      </View>
    </ScrollView>
    
  )
}

export default HistoryLeaveDetailStudent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    fontFamily: 'Montserrat-Regular',
  },
  datatxt: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
})
