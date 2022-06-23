/*
 * @Author: Young
 * DSHARP
 * @flow
 * @Date: 2018-04-07 10:51:10
 * @Last Modified by: Young
 * @Last Modified time: 2018-08-31 14:03:18
 */
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import _ from "lodash";
import { SelectMultipleButton, SelectMultipleGroupButton } from 'react-native-selectmultiple-button';

const ios_blue = "#D3D3D3";

const multiplesData = ["1st", "2nd", "3rd",];


export default class TestStandardSelectBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      multipleSelectedData: [],
      multipleSelectedDataLimited: []
    };
  }

  render() {
    return (
      <View>
      
        <Text style={{ color: '#000000', marginLeft: 15, marginTop: 10,  fontSize:18, fontFamily: 'Montserrat-Regular', }}>
          Standard
        </Text>
        {/* <Text style={{ color: ios_blue, marginLeft: 10 }}>
          I like {_.join(this.state.multipleSelectedDataLimited, ", ")}
        </Text> */}
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            paddingHorizontal: 15,
            justifyContent: "space-between",
          }}
        >
          {multiplesData.map(interest => (
             <SelectMultipleButton
             key={interest}
             value={interest}
             displayValue={interest + ""}
             buttonViewStyle={{
               marginTop: 15,
               borderRadius: 8,
               height: 40,
               width: "30%",
               justifyContent: "center",
               borderWidth: 0,
             }}
             textStyle={{
               fontSize: 15,
               fontFamily: 'Montserrat-Regular',
             }}
             highLightStyle={{
               borderColor: "gray",
               backgroundColor: "rgba(229, 229, 229, 0.35)",
               textColor: "#000000",
               borderTintColor: ios_blue,
               backgroundTintColor: ios_blue,
               textTintColor: "#000000"
             }}
            
             selected={this.state.radioSelectedData === interest}
             singleTap={valueTap =>
               this._singleTapRadioSelectedButtons(valueTap,interest)
             }
             
           />
          ))}
        </View>

      </View>
    );
  }

  _singleTapRadioSelectedButtons(valueTap, gender) {
    // Alert.alert('', valueTap)
    this.setState({
      radioSelectedData: gender
    });
  }

  _singleTapMultipleSelectedButtons(interest) {
    if (this.state.multipleSelectedData.includes(interest)) {
      _.remove(this.state.multipleSelectedData, ele => {
        return ele === interest;
      });
    } else {
      this.state.multipleSelectedData.push(interest);
    }

    this.setState({
      multipleSelectedData: this.state.multipleSelectedData
    });
  }

  _singleTapMultipleSelectedButtons_limited(interest) {
    if (this.state.multipleSelectedDataLimited.includes(interest)) {
      _.remove(this.state.multipleSelectedDataLimited, ele => {
        return ele === interest;
      });
    } else {
      if (this.state.multipleSelectedDataLimited)
        this.state.multipleSelectedDataLimited.push(interest);
      // ----------------------For Length----------------------------
      // if (this.state.multipleSelectedDataLimited.length < 3)
      // this.state.multipleSelectedDataLimited.push(interest);
    }

    this.setState({
      multipleSelectedDataLimited: this.state.multipleSelectedDataLimited
    });
  }
}

const styles = StyleSheet.create({
  welcome: {
    margin: 10,
    marginTop: 30,
    color: "gray"
  }
});