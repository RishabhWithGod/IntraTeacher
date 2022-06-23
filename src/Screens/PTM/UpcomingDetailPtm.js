import React from 'react';
import {dataIndexAttribute} from 'react-horizontal-scrolling-menu/dist/types/constants';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const UpcomingDetailPtm = props => {

  const {subjects} = props.route.params;

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.subtxt}>{subjects.title}</Text>
      </View>
      <View>
        <Text style={styles.txt}>
          Stream:
          <Text style={styles.datatxt}>{subjects.stream}</Text>
        </Text>
        <Text style={styles.txt}>
          Date:
          <Text style={styles.datatxt}>{subjects.date}</Text>
        </Text>
        <Text style={styles.txt}>
          Day:
          <Text style={styles.datatxt}>{subjects.day}</Text>
        </Text>
        <Text style={styles.txt}>
          Starting Time:
          <Text style={styles.datatxt}>{subjects.time}</Text>
        </Text>
        <Text style={styles.txt}>
          Ending Time:
          <Text style={styles.datatxt}>{subjects.endtime}</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default UpcomingDetailPtm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subtxt: {
    marginTop: 25,
    fontSize: 13,
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: '6%',
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
  },
  datatxt: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
  stlabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  stlabeltext: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000',
    paddingHorizontal: 10,
  },
  sttext: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#000000',
    paddingHorizontal: 15,
  },
  divline: {
    alignSelf: "center",
    marginTop: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: "100%",
  }
});
