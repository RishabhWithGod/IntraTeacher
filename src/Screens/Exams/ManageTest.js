import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const ManageTest = () => {

    return (
      <View style={styles.container}>
       <Text>Hii ManageTest</Text>
      </View>
    );
};

export default ManageTest;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF',
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
