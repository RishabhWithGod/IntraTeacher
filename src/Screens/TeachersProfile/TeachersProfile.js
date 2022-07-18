import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {Avatar, Surface} from 'react-native-paper';
import {COLORS} from '../../theme/Colors';
import {container, paraGray} from '../../theme/styles/Base';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector, useDispatch} from 'react-redux';
import Url from '../../Api/Url';

const TeachersProfile = props => {
  const {
    userinfo,
    userid,
    username,
    userimage,
    useremail,
    userdob,
    userphone,
    useraddress,
  } = useSelector(state => state.userReducer);
  // useEffect(() => {
  //    console.log("us"+JSON.stringify(userdob))
  //    console.log("us"+JSON.stringify(useraddress))
  //    console.log("us"+JSON.stringify(userphone))
  // }, []);

  return (
    <View style={container.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.bg,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 15,
            paddingBottom: 30,
          }}>
          <View
            style={{
              flex: 1,
              marginTop: 20,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: COLORS.outline,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 10,
              }}>
              {userimage == null ? (
                <ImageBackground
                  style={{
                    backgroundColor: COLORS.black,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                  }}>
                  <FontAwesome5 name="user-alt" size={25} color="#FFFFFF" />
                </ImageBackground>
              ) : (
                <Avatar.Image
                  size={70}
                  source={{uri: Url.profile_IMG + userimage}}
                  backgroundColor={COLORS.black}
                />
              )}
              <View style={{marginLeft: 10}}>
                <Text style={[paraGray.parahome, {fontSize: 15}]}>
                  {username}
                </Text>
                {/* <Text style={[paraGray.darkpara, {color: COLORS.lightblack}]}>
                  Class XI-B 
                </Text> */}
              </View>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginTop: -30,
                  // marginRight: 25,
                }}>
                <Feather name="camera" size={25} color={COLORS.lightblack} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View
              style={{
                width: '100%',
                heigth: 150,
                backgroundColor: 'white',
                marginBottom: 25,
                marginTop: 20,
              }}>
              <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                Aadhar No
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={[
                    paraGray.darklarge,
                    {
                      borderBottomColor: COLORS.bottom,
                      borderBottomWidth: 1,
                      width: '90%',
                    },
                  ]}>
                  12345678910
                </Text>
                <View
                  style={{
                    flex: 1,
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Entypo name="lock" size={15} color={COLORS.label} />
                </View>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                heigth: 150,
                backgroundColor: 'white',
                marginBottom: 25,
              }}>
              <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                Date of Birth
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={[
                    paraGray.darklarge,
                    {
                      borderBottomColor: COLORS.bottom,
                      borderBottomWidth: 1,
                      width: '90%',
                    },
                  ]}>
                  {userdob}
                </Text>
                <View
                  style={{
                    flex: 1,
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Entypo name="lock" size={15} color={COLORS.label} />
                </View>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                heigth: 150,
                backgroundColor: 'white',
                marginBottom: 25,
              }}>
              <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                Phone Number
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={[
                    paraGray.darklarge,
                    {
                      borderBottomColor: COLORS.bottom,
                      borderBottomWidth: 1,
                      width: '90%',
                    },
                  ]}>
                  {userphone}
                </Text>
                <View
                  style={{
                    flex: 1,
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Entypo name="lock" size={15} color={COLORS.label} />
                </View>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                heigth: 150,
                backgroundColor: 'white',
                marginBottom: 25,
              }}>
              <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                E-mail ID
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={[
                    paraGray.darklarge,
                    {
                      borderBottomColor: COLORS.bottom,
                      borderBottomWidth: 1,
                      width: '90%',
                    },
                  ]}>
                  {useremail}
                </Text>
                <View
                  style={{
                    flex: 1,
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Entypo name="lock" size={15} color={COLORS.label} />
                </View>
              </View>
            </View>

            <View
              style={{
                width: '100%',
                heigth: 150,
                backgroundColor: 'white',
                marginBottom: 25,
                //   paddingHorizontal: 15,
              }}>
              <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                Parmanent Add.
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={[
                    paraGray.darklarge,
                    {
                      borderBottomColor: COLORS.bottom,
                      borderBottomWidth: 1,
                      width: '90%',
                    },
                  ]}>
                  {useraddress}
                </Text>
                <View
                  style={{
                    flex: 1,
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Entypo name="lock" size={15} color={COLORS.label} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TeachersProfile;
