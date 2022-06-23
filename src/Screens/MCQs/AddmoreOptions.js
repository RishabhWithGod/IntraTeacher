import React, { useState } from 'react';
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


const AddmoreOptions = () => {

    const [inputs, setInputs] = useState([{ key: '', value: '' }]);

    const addHandler = () => {
        const _inputs = [...inputs];
        _inputs.push({ key: '', value: '' });
        setInputs(_inputs);
      }
    
      const inputHandler = (text, key) => {
        const _inputs = [...inputs];
        _inputs[key].value = text;
        _inputs[key].key = key;
        setInputs(_inputs);
    
      }
    
    return (
        <ScrollView  showsVerticalScrollIndicator={false}>
        <View>
        <Text style={{
          marginTop: 30,
          paddingHorizontal: 20,
          marginBottom: 10,
          color: "#000000",
          fontSize:11,
          fontFamily: 'Montserrat-Regular',
        }}>
          Add Options of Questions :

          <MaterialCommunityIcons
            name="plus"
            size={12}
            color="#434b56"
            onPress={addHandler}

          >
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Montserrat-SemiBold',
                color: "#000000",
              }}
            >
              Add more Options
            </Text>
          </MaterialCommunityIcons>
        </Text>
      </View>
      {inputs.map((input, key) => (
        <View>
          <View style={styles.txtbox}>
            <TextInput
              placeholder={"OPTIONS"}
              placeholderTextColor="#808080"
              value={input.value}
              onChangeText={(text) => inputHandler(text, key)}
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
        </View>

      ))}
      </ScrollView>
    )
}

export default AddmoreOptions

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
  
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
    txtboxDesc: {
      flexDirection: "row",
      alignItems: "flex-start",
      backgroundColor: "#FFFFFF",
      width: "90%",
      height: 80,
      borderColor: "#D3D3D3",
      alignSelf: "center",
      borderWidth: 1,
      marginTop: 15,
      borderRadius: 5,
    },
    formtxt: {
      marginTop: 10,
      paddingHorizontal: 20,
      marginBottom: -10,
      color: "#000000",
      fontSize:12,
      fontFamily: 'Montserrat-Regular',
    },
    labeltxt: {
      color: '#000000',
      marginLeft: 15,
      marginTop: 10,
      fontSize:15,
      fontFamily: 'Montserrat-Regular',
    },
  });
  
