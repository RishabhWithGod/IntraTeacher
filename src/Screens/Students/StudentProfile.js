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

const StudentProfile = props => {
  const {student} = props.route.params;
  const {userinfo, userid, username, showmodal} = useSelector(
    state => state.userReducer,
  );
  useEffect(() => {
    //  console.log("us"+JSON.stringify(student))
  }, []);

  return (
    <View style={container.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 50,
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={[paraGray.darkpara, {textAlign: 'center', marginLeft: 30}]}>
            INFO
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={{backgroundColor: COLORS.section, borderRadius: 20}}
            onPress={() => props.navigation.navigate('Info')}>
            <FontAwesome
              style={{marginVertical: 5, marginHorizontal: 7}}
              name="pencil"
              size={25}
              color={COLORS.black}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{flex: 1, borderBottomWidth: 1.5, borderColor: COLORS.section}}
      />
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
              {student.photo == null ? (
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
                  source={student.photo}
                  backgroundColor={COLORS.black}
                />
              )}
              <View style={{marginLeft: 10}}>
                <Text style={[paraGray.parahome, {fontSize: 15}]}>
                  {student.name}
                </Text>
                <Text style={[paraGray.darkpara, {color: COLORS.lightblack}]}>
                  Class XI-B | Roll no: {student.roll_no}
                </Text>
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
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 10,
                marginTop: 20,
              }}>
              <View
                style={{
                  width: '45%',
                  heigth: 150,
                  backgroundColor: 'white',
                  // paddingHorizontal: 10,
                }}>
                <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                  Aadhar No
                </Text>
                <Text
                  style={[
                    paraGray.darkpara,
                    {
                      borderBottomColor: COLORS.bottom,
                      borderBottomWidth: 1,
                      width: '80%',
                      marginTop: 10,
                    },
                  ]}>
                  1234 4325 4567
                </Text>
              </View>
              <View
                style={{
                  width: '50%',
                  heigth: 150,
                  backgroundColor: 'white',
                  // paddingHorizontal: 10,
                  marginLeft: 10,
                }}>
                <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                  Academic Year
                </Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text
                    style={[
                      paraGray.darkpara,
                      {
                        borderBottomColor: COLORS.bottom,
                        borderBottomWidth: 1,
                        width: '80%',
                        marginTop: 10,
                      },
                    ]}>
                    2020-2021
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
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 10,
              }}>
              <View
                style={{
                  width: '45%',
                  heigth: 150,
                  backgroundColor: 'white',
                  // paddingHorizontal: 10,
                }}>
                <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                  Admission Class
                </Text>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={[
                      paraGray.darkpara,
                      {
                        borderBottomColor: COLORS.bottom,
                        borderBottomWidth: 1,
                        width: '80%',
                      },
                    ]}>
                    {student.class_id}
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
                  width: '50%',
                  heigth: 150,
                  backgroundColor: 'white',
                  // paddingHorizontal: 10,
                  marginLeft: 10,
                }}>
                <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                  Old School Name
                </Text>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={[
                      paraGray.darkpara,
                      {
                        borderBottomColor: COLORS.bottom,
                        borderBottomWidth: 1,
                        width: '80%',
                      },
                    ]}>
                    {student.previous_school}
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
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 10,
              }}>
              <View
                style={{
                  width: '45%',
                  heigth: 150,
                  backgroundColor: 'white',
                  // paddingHorizontal: 10,
                }}>
                <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                  Date of Admission
                </Text>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={[
                      paraGray.darkpara,
                      {
                        borderBottomColor: COLORS.bottom,
                        borderBottomWidth: 1,
                        width: '80%',
                      },
                    ]}>
                    {student.admission_date}
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
                  width: '50%',
                  heigth: 150,
                  backgroundColor: 'white',
                  // paddingHorizontal: 10,
                  marginLeft: 10,
                }}>
                <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                  Date of Birth
                </Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text
                    style={[
                      paraGray.darkpara,
                      {
                        borderBottomColor: COLORS.bottom,
                        borderBottomWidth: 1,
                        width: '80%',
                      },
                    ]}>
                    {student.dob}
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
            <View
              style={{
                width: '100%',
                heigth: 150,
                backgroundColor: 'white',
                marginBottom: 10,
              }}>
              <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                Student Mobile NO
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={[
                    paraGray.darkpara,
                    {
                      borderBottomColor: COLORS.bottom,
                      borderBottomWidth: 1,
                      width: '90%',
                    },
                  ]}>
                  {student.phone}
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
                marginBottom: 10,
              }}>
              <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                Student E-mail ID
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={[
                    paraGray.darkpara,
                    {
                      borderBottomColor: COLORS.bottom,
                      borderBottomWidth: 1,
                      width: '90%',
                    },
                  ]}>
                  {student.email}
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
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 10,
              }}>
              <View
                style={{
                  width: '45%',
                  heigth: 150,
                  backgroundColor: 'white',
                  // paddingHorizontal: 10,
                }}>
                <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                  School Bus NO
                </Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text
                    style={[
                      paraGray.darkpara,
                      {
                        borderBottomColor: COLORS.bottom,
                        borderBottomWidth: 1,
                        width: '80%',
                      },
                    ]}>
                    MHO4EZ0505
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
                  width: '50%',
                  heigth: 150,
                  backgroundColor: 'white',
                  // paddingHorizontal: 10,
                  marginLeft: 10,
                }}>
                <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                  Route No
                </Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text
                    style={[
                      paraGray.darkpara,
                      {
                        borderBottomColor: COLORS.bottom,
                        borderBottomWidth: 1,
                        width: '80%',
                      },
                    ]}>
                    4
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
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 10,
              }}>
              <View
                style={{
                  width: '45%',
                  heigth: 150,
                  backgroundColor: 'white',
                  // paddingHorizontal: 10,
                }}>
                <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                  Class Teacher Name
                </Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text
                    style={[
                      paraGray.darkpara,
                      {
                        borderBottomColor: COLORS.bottom,
                        borderBottomWidth: 1,
                        width: '80%',
                      },
                    ]}>
                    {username}
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
                  width: '50%',
                  heigth: 150,
                  backgroundColor: 'white',
                  // paddingHorizontal: 10,
                  marginLeft: 10,
                }}>
                <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                  School No
                </Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text
                    style={[
                      paraGray.darkpara,
                      {
                        borderBottomColor: COLORS.bottom,
                        borderBottomWidth: 1,
                        width: '80%',
                      },
                    ]}>
                    NMMC 105
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
            <View
              style={{
                width: '100%',
                heigth: 150,
                backgroundColor: 'white',
                marginBottom: 25,
              }}>
              <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                Parent Mail ID
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={[
                    paraGray.darkpara,
                    {
                      borderBottomColor: COLORS.bottom,
                      borderBottomWidth: 1,
                      width: '90%',
                    },
                  ]}>
                  parentboth84@gmail.com
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
                Mother Name
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={[
                    paraGray.darkpara,
                    {
                      borderBottomColor: COLORS.bottom,
                      borderBottomWidth: 1,
                      width: '90%',
                    },
                  ]}>
                  {student.mother_name}
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
                Father Name
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={[
                    paraGray.darkpara,
                    {
                      borderBottomColor: COLORS.bottom,
                      borderBottomWidth: 1,
                      width: '90%',
                    },
                  ]}>
                  {student.father_name}
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
                    paraGray.darkpara,
                    {
                      borderBottomColor: COLORS.bottom,
                      borderBottomWidth: 1,
                      width: '90%',
                    },
                  ]}>
                  {student.permanent_address}
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
                Parent Mobile No.
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={[
                    paraGray.darkpara,
                    {
                      borderBottomColor: COLORS.bottom,
                      borderBottomWidth: 1,
                      width: '90%',
                    },
                  ]}>
                  {student.father_phone}
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
                Subjects Name:
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={[
                    paraGray.darkpara,
                    {
                      borderBottomColor: COLORS.bottom,
                      borderBottomWidth: 1,
                      width: '90%',
                    },
                  ]}>
                  Business Communication ( Manan ) Business Mathematics ( Vipul
                  ) Economics ( Manan ) Foundation Course ( Manan ) Business Law
                  ( Rishabh ) Financial Accounts ( Manan ) Direct Tax ( Manan )
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

export default StudentProfile;
