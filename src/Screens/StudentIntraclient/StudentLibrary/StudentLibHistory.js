import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const StudentLibHistory = () => {

    return (
      <View style={styles.container}>
       <Text>Hii StudentLibHistory</Text>
      </View>
    );
};

export default StudentLibHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
