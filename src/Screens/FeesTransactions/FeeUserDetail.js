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
import {DataTable,Avatar} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather'

const FeeUserDetail = props => {
  const {fees} = props.route.params

  const [shouldShow, setShouldShow] = useState(false)

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* <View style={styles.search}>

                    <View
                        style={{
                            flexDirection: "row",
                            alignbooks: "center",
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
                            onChangeText={(term) => { searchUpdated(term) }}
                            style={{
                                marginLeft: 2,
                                marginTop: 2,
                                backgroundColor: "#FFFFFF",
                                width: "90%",
                                height: 40,
                                fontSize: 12,
                                fontFamily: 'Montserrat-Regular',
                            }}
                        />
                        <Feather style={{ marginTop: 6, }} name="search" size={29} color="#000000" />
                    </View>
                </View> */}

        <View>
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
            <Text style={styles.datatxt}>{fees.name}</Text>
          </Text>
          <Avatar.Image
            source={{}}
            size={40}
            style={{backgroundColor: '#000000'}}
          />
        </View>
         
          {/* <Text style={styles.txt}>
                   Std:{book.value}
                </Text> */}
          <Text style={styles.txt}>
            Stream:
            <Text style={styles.datatxt}>{fees.stream}</Text>
          </Text>
          <Text style={styles.txt}>
            TotalFees:
            <Text style={styles.datatxt}>{fees.tfees}</Text>
          </Text>
          <Text style={styles.txt}>
            Remaining Fees:
            <Text style={styles.datatxt}>{fees.rfees}</Text>
          </Text>
        </View>
        <DataTable>
          <DataTable.Header
            style={{marginTop: 10, borderBottomWidth: 0, marginBottom: -10}}>
            <DataTable.Title style={{flex: 1.5, padding: 10}}>
              <Text style={styles.tabletxt}>Transaction</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={styles.tabletxt}>Mode</Text>
            </DataTable.Title>
            <DataTable.Title style={{flex: 1.4}}>
              <Text style={styles.tabletxt}>Amount</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={styles.tabletxt}>Date</Text>
            </DataTable.Title>
          </DataTable.Header>
          <DataTable.Row style={{borderBottomWidth: 0}}>
            <DataTable.Cell style={{flex: 1.1, padding: 10}}>
              <Text style={{ fontSize: 12,fontFamily: 'Montserrat-Regular'}}>
                {fees.firsttrans}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text style={{fontSize: 12,fontFamily: 'Montserrat-Regular'}}>
                {fees.firstmode}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell style={{flex: 1}}>
              <Text style={{fontSize: 12,fontFamily: 'Montserrat-Regular'}}>
                {fees.firstamount}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text style={{fontSize: 12,fontFamily: 'Montserrat-Regular'}}>
                {fees.firstdate}
              </Text>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={{borderBottomWidth: 0}}>
            <DataTable.Cell style={{flex: 1.1, padding: 10}}>
              <Text style={{fontSize: 12,fontFamily: 'Montserrat-Regular'}}>
                {fees.secondtrans}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text style={{fontSize: 12,fontFamily: 'Montserrat-Regular'}}>
                {fees.secondmode}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text style={{fontSize: 12,fontFamily: 'Montserrat-Regular'}}>
                {fees.secondamount}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text style={{fontSize: 12,fontFamily: 'Montserrat-Regular'}}>
                {fees.seconddate}
              </Text>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
     </View>
    </ScrollView>
  )
}

export default FeeUserDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
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
    fontSize: 13,
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
    color: '#000000',
  },
  transrow: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  tabletxt: {
    // fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
  },
})
