import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const Courses = () => {


  
    return (
      <View style={styles.container}>
       <Text>Hii Courses</Text>
      </View>
    );
};

export default Courses;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF',
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
