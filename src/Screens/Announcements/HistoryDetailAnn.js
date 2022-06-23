import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

const HistoryDetailAnn = props => {
  const {books} = props.route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={{marginTop: 15}}>
        <Text style={styles.txt}>
          Title:
          <Text style={styles.datatxt}>{books.title}</Text>
        </Text>
        <Text style={styles.txt}>
          Stream:
          <Text style={styles.datatxt}>{books.stream}</Text>
        </Text>
        <Text style={styles.txt}>
          Message:
          <Text style={styles.datatxt}>{books.bookname}</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default HistoryDetailAnn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  },
});
