import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const CreateTest = () => {

    return (
      <View style={styles.container}>
       <Text>Hii CreateTest</Text>
      </View>
    );
};

export default CreateTest;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF',
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
