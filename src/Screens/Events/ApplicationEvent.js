import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const ApplicationEvent = () => {

    return (
      <View style={styles.container}>
       <Text>Hii ApplicationEvent</Text>
      </View>
    );
};

export default ApplicationEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF',
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
