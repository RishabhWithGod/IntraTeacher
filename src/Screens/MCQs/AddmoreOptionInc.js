import React, { Component } from 'react';
import { 
  AppRegistry, 
  TouchableOpacity, 
  Image, 
  Animated, 
  ScrollView, 
  StyleSheet, 
  View, 
  Text,
  TextInput
 } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AddmoreOptions from './AddmoreOptions';

export default class AddmoreOptionInc extends Component {

  constructor() {
    super();

    this.state = { valueArray: [], disabled: false }
    this.index = 2;
    this.animatedValue = new Animated.Value(0);
  }

  addMore = () => {
    this.animatedValue.setValue(0);
    let newlyAddedValue = { index: this.index }
    this.setState({ disabled: true, valueArray: [...this.state.valueArray, newlyAddedValue] }, () => {
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }
      ).start(() => {
         this.index = this.index + 1; 
        this.setState({ disabled: false });
      });
    });
  }


  render() {
    const animationValue = this.animatedValue.interpolate(
      {
        inputRange: [0, 1],
        outputRange: [-59, 0]
      });

    let newArray = this.state.valueArray.map((item, key) => {
      if ((key) == this.index) {
        return (
          <Animated.View key={key} >
            <Text style={styles.headerText}>Question {item.index}</Text>
            <TextInput
                placeholder="ENTER QUESTION HERE"
                placeholderTextColor="#808080"
                style={{
                  marginLeft: 0,
                  backgroundColor: "#FFFFFF",
                  width: "90%",
                  height: 40,
                  fontSize:13,
                  fontFamily: 'Montserrat-Regular',
                }}
              />
          </Animated.View>
        );
      }
      else {
        return (
          <View key={key} >
            <Text  style={{
                marginTop: 30,
                paddingHorizontal: 20,
                color: "#000000",
                fontSize: 12,
                fontFamily: 'Montserrat-Regular',
              }}
              >
                  Question {item.index}:
           
            </Text>
            <View style={styles.txtbox}>
              <TextInput
                placeholder="ENTER QUESTION HERE"
                placeholderTextColor="#808080"
                style={{
                  marginLeft: 0,
                  backgroundColor: "#FFFFFF",
                  width: "90%",
                  height: 40,
                  fontSize:13,
                  fontFamily: 'Montserrat-Regular',
                }}
              />
            </View>
              <AddmoreOptions/>
          </View>
        );
      }
    });

    return (
      <ScrollView  showsVerticalScrollIndicator={false}>
      <View style={styles.container} >
      
          <View style={{ flex: 1, padding: 4 }}>
            {
              newArray
            }
          </View>
       

        <TouchableOpacity style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#E5E5E5",
              width: "80%",
              height: 50,
              borderColor: "#E5E5E5",
              alignSelf: "center",
              borderWidth: 2,
              marginTop: "10%",
              marginBottom: 20,
              bottom: 0,
              borderRadius: 5,
              justifyContent: 'center',
              // elevation: 3,

            }}
              activeOpacity={0.8}  
              disabled={this.state.disabled} 
              onPress={this.addMore}
            >
             <Text style={{
                color: '#000000',
                fontSize:17,
            fontFamily: 'Montserrat-SemiBold',

              }}>ADD More Questions
              <MaterialCommunityIcons
                name="plus"
                size={18}
                color="#000000"
              />
              </Text>

            </TouchableOpacity>
            
      </View>
      </ScrollView>
    );
    
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    viewHolder: {
      height: 55,
      backgroundColor: '#000000',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 4
    },
    headerText: {
      color: '#000000',
      fontSize: 15,
      fontFamily: 'Montserrat-Regular'

    },
    buttonDesign: {
      position: 'absolute',
      right: 25,
      bottom: 25,
      borderRadius: 30,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonImage: {
      resizeMode: 'contain',
      width: '100%',
    },
    txtbox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        width: "90%",
        height: 50,
        borderColor: "#D3D3D3",
        alignSelf: "center",
        borderWidth: 1,
        marginTop: 15,
        borderRadius: 5,
      },
  });