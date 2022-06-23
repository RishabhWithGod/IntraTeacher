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
import { ScrollView } from "react-native-gesture-handler";


const radioData = ["10:00 AM", "11:00 AM", "12:00 AM", "1:00 AM", "2:00 AM",];

export default class SingleSelect extends Component {
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
        {/* <Text style={{ color: "green", marginLeft: 10 }}>
          I am {this.state.radioSelectedData}
        </Text> */}
        <ScrollView
          horizontal={true}

          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{
              // flexWrap: "wrap",
              marginTop: 10,
              paddingHorizontal: 20,
              flexDirection: "row",
              justifyContent: "center"

            }}
          >

            {radioData.map(gender => (
              <SelectMultipleButton
                key={gender}
                value={gender}
                displayValue={gender + "."}
                textStyle={{fontFamily: 'Montserrat-Regular',}}
                highLightStyle={{
                  borderColor: "#C4C4C4",
                  backgroundColor: "transparent",
                  textColor: "#000000",
                  borderTintColor: "#C4C4C4",
                  backgroundTintColor: "#C4C4C4",
                  textTintColor: "white",

                }}
                selected={this.state.radioSelectedData === gender}
                singleTap={valueTap =>
                  this._singleTapRadioSelectedButtons(valueTap, gender)
                }
              />
            ))}
          </View>
        </ScrollView>
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
      if (this.state.multipleSelectedDataLimited.length < 3)
        this.state.multipleSelectedDataLimited.push(interest);
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
    color: "gray",


  }
});