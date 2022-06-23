import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import {DataTable,Avatar} from 'react-native-paper';
import SearchInput, {createFilter} from 'react-native-search-filter';

const UserTrans = props => {
  const fees = [
    {
      id: '1',
      name: 'Vikas Yadav',
      stream: 'FYBCOM',
      tfees: '20,000Rs',
      rfees: '10,000Rs',
      firsttrans: 'First',
      secondtrans: 'Second',
      firstmode: 'offline',
      firstamount: '10,000',
      firstdate: '1/7/2021',
      secondmode: 'online',
      secondamount: '10,000',
      seconddate: '1/9/2021',
    },
    {
      id: '2',
      name: 'Vikas Gupta',
      stream: 'TYBCOM',
      tfees: '20,000Rs',
      rfees: '10,000Rs',
      firsttrans: 'First',
      secondtrans: 'Second',
      firstmode: 'offline',
      firstamount: '10,000',
      firstdate: '10/7/2021',
      secondmode: 'online',
      secondamount: '10,000',
      seconddate: '5/9/2021',
    },
  ];

  //----------Search filter-------------
  const KEYS_TO_FILTERS = ['name', 'stream'];
  const [state, setState] = useState({searchTerm: ''});

  const filterfees = fees.filter(
    createFilter(state.searchTerm, KEYS_TO_FILTERS),
  );
  const searchUpdated = term => {
    setState({searchTerm: term});
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <View
          style={{
            flexDirection: 'row',
            alignbooks: 'center',
            backgroundColor: '#FFFFFF',
            width: '100%',
            height: 50,
            borderColor: '#D3D3D3',
            paddingHorizontal: 0,
            borderWidth: 2,
            marginTop: 15,
            borderRadius: 10,
          }}>
          <TextInput
            placeholder="Search by Names./Contact number"
            placeholderTextColor="#808080"
            onChangeText={term => {
              searchUpdated(term);
            }}
            style={{
              marginLeft: 2,
              marginTop: 2,
              backgroundColor: '#FFFFFF',
              width: '90%',
              height: 40,
              fontSize: 12,
              fontFamily: 'Montserrat-Regular',
            }}
          />
          <Feather
            style={{marginTop: 6}}
            name="search"
            size={29}
            color="#000000"
          />
        </View>
      </View>
      {filterfees.map((fee, index) => (
        <View>
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // backgroundColor: "#D3D3D3",
              width: '90%',
              height: 50,
              // borderColor: "#D3D3D3",
              alignSelf: 'center',
              // borderWidth: 2,
              marginTop: 30,
              borderRadius: 5,
              justifyContent: 'space-between',
            }}
            onPress={() => {
              console.log('data=' + JSON.stringify(fees[index]));
              props.navigation.navigate('FeesDetail', {fees: fees[index]});
            }}>
            <Avatar.Image
              source={{}}
              size={30}
              style={{backgroundColor: '#000000'}}
            />
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontFamily: 'Montserrat-Regular',
              }}>
              {fee.name}
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontFamily: 'Montserrat-Regular',
              }}>
              {fee.stream}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default UserTrans;

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
});
