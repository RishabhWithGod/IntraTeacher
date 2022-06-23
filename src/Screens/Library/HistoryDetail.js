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

const HistoryDetail = props => {
  const {name, bookname, stream, date, rdate} = props.route.params,
  
    createPDF=()=> {
    let options = {
      html:  <View style={{marginTop: 15}}>
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
          size={50}
          style={{backgroundColor: '#000000'}}
        />
      </View>
      <Text style={styles.txt}>
         Stream:
         <Text style={styles.datatxt}>{stream}</Text>
       </Text>
       <Text style={styles.txt}>
         Book Assigned:
         <Text style={styles.datatxt}>{bookname}</Text>
       </Text>
       <Text style={styles.txt}>
         Taken:
         <Text style={styles.datatxt}>{date}</Text>
       </Text>
       <Text style={styles.txt}>
         Returned Date:
         <Text style={styles.datatxt}>{rdate}</Text>
       </Text>
    </View>
   ,
      fileName: 'test',
      directory: 'Documents',
    };

    let file =  RNHTMLtoPDF.convert(options)
    // console.log(file.filePath);
    alert(file.filePath);
  }
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
            size={50}
            style={{backgroundColor: '#000000'}}
          />
        </View>
        <Text style={styles.txt}>
           Stream:
           <Text style={styles.datatxt}>{stream}</Text>
         </Text>
         <Text style={styles.txt}>
           Book Assigned:
           <Text style={styles.datatxt}>{bookname}</Text>
         </Text>
         <Text style={styles.txt}>
           Taken:
           <Text style={styles.datatxt}>{date}</Text>
         </Text>
         <Text style={styles.txt}>
           Returned Date:
           <Text style={styles.datatxt}>{rdate}</Text>
         </Text>
      </View>
     
    </ScrollView>
    
  )
}

export default HistoryDetail

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
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  datatxt: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
})
