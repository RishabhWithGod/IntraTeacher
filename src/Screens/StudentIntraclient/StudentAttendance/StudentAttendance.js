import React from 'react';
import { dataIndexAttribute } from 'react-horizontal-scrolling-menu/dist/types/constants';
import { View, Text, Button, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';


const StudentAttendance = (props) => {

  const subjects = [
    {id: '1', subname:'English' },
    { id: '2',subname:'Hindi' },
  ]

  return (
    <Animatable.View animation="slideInRight" style={styles.container}>
      {subjects.map((sub, index) => (
        <View key={index}>
          <TouchableOpacity style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#E5E5E5",
            width: "90%",
            height: 70,
            borderColor: "#E5E5E5",
            alignSelf: "center",
            borderWidth: 2,
            marginTop: 20,
            borderRadius: 5,
            justifyContent: 'space-between',
            paddingHorizontal:10,

          }}
            onPress={() => { props.navigation.navigate('StudentAttendanceShow', { subname: sub.subname }) }}
          >
            <View>
              <Text style={{color: '#000000',fontSize: 18,fontFamily: 'Montserrat-SemiBold'}}>{sub.subname}</Text>
             
            </View>
            
          </TouchableOpacity>
        </View>
      ))}
    </Animatable.View>
  );
};

export default StudentAttendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
