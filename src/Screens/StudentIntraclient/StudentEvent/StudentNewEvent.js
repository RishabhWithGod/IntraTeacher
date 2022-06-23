import React from 'react';
import { dataIndexAttribute } from 'react-horizontal-scrolling-menu/dist/types/constants';
import { View, Text, Button, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';


const StudentNewEvent = (props) => {

  const Events = [
    {id: '1', eventname:'Sports' ,eventdescription:'description here',},
    { id: '2',eventname:'Cycling',eventdescription:'description here',},
    { id: '3',eventname:'kabaddi',eventdescription:'description here', },
    { id: '4',eventname:'Hockey', eventdescription:'description here',},
  ]

  return (
    <Animatable.View animation="slideInRight" style={styles.container}>
      {Events.map((Event, index) => (
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
            onPress={() => { props.navigation.navigate('StudentEventDetail', { eventname: Event.eventname,eventdescription:Event.eventdescription, }) }}
          >
            <View>
              <Text style={{color: '#000000',fontSize: 18,fontFamily: 'Montserrat-SemiBold'}}>{Event.eventname}</Text>
             
            </View>
            
          </TouchableOpacity>
        </View>
      ))}
    </Animatable.View>
  );
};

export default StudentNewEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
