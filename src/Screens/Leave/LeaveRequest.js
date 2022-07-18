import React, {useState} from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {List, Modal} from 'react-native-paper';
import {COLORS} from '../../theme/Colors';
import {container, paraGray} from '../../theme/styles/Base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector, useDispatch} from 'react-redux';
import {
  setuserId,
  setuserInfo,
  setuserName,
  setShowModal,
  setuserImage,
} from '../../Redux/Actions/actions';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

const LeaveRequest = () => {
  const dispatch = useDispatch();
  const {userinfo, userid, username, showmodal, userimage} = useSelector(
    state => state.userReducer,
  );
  const [expanded, setExpanded] = React.useState(true);
  const data = [
    {
      id: '1',
      name: 'ABC',
      std: 'FYBCA',
      reason: 'Fever',
      date: '10/12/12',
      status: 'Approved',
      days: '1 Days leave',
      detail:
        'Dear Mam, As exam is in next month and we have to complete portion so we can’t to take a leave',
      reply:
        'Dear Student, As exam is in next month and we have to complete portion so we can’t to take a leave',
    },
    {
      id: '2',
      name: 'DEF',
      std: 'SYBCA',
      reason: 'Family function',
      date: '10/12/12',
      status: 'Rejected',
      days: '5 Days leave',
      detail:
        'Dear Mam, As exam is in next month and we have to complete portion so we can’t to take a leave',
      reply: '',
    },
  ];
  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={[container.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, marginTop: 20, marginBottom: 20}}>
          {data.map((data, index) => (
            <View style={{flex: 1, paddingHorizontal: 10}} key={index}>
              <List.Section>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: COLORS.bg,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    borderWidth: 2,
                    borderColor: COLORS.background,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <Text style={[paraGray.darkpara]}>{data.name}</Text>
                    <Text style={[paraGray.darkpara, {color: COLORS.section}]}>
                      {data.std}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <Text style={[paraGray.darkpara, {color: COLORS.bluee}]}>
                      {data.reason}
                    </Text>
                    <Text style={[paraGray.darkpara, {color: COLORS.section}]}>
                      {data.date}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <MaterialIcons
                        name="watch-later"
                        size={20}
                        color={COLORS.section}
                      />
                      <Text
                        style={[
                          paraGray.darkpara,
                          {color: COLORS.section, marginLeft: 5},
                        ]}>
                        {data.days}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(setShowModal(!showmodal));
                        }}>
                        <Entypo
                          style={{marginRight: 20}}
                          name="circle-with-cross"
                          size={25}
                          color={COLORS.red}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <AntDesign
                          style={{marginRight: 10, marginTop: 1}}
                          name="checkcircleo"
                          size={24}
                          color={COLORS.green}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <List.Accordion
                    //   theme={{colors:COLORS.black}}
                    style={{
                      // borderBottomLeftRadius: 10,
                      // borderBottomRightRadius: 10,
                      backgroundColor: COLORS.bg,
                    }}
                    titleStyle={[paraGray.darkpara]}
                    title="View Detail">
                    <Text
                      style={[paraGray.darkpara, {color: COLORS.lighterblack}]}>
                      Reason :
                    </Text>
                    <View style={{flex: 1, marginLeft: 20}}>
                      <Text
                        style={[
                          paraGray.darkpara,
                          {color: COLORS.lightbblack},
                        ]}>
                        {data.detail}
                      </Text>
                    </View>
                    {data.reply != '' && (
                      <View style={{marginTop: 10}}>
                        <Text
                          style={[
                            paraGray.darkpara,
                            {color: COLORS.lighterblack, marginLeft: 5},
                          ]}>
                          Reply :
                        </Text>
                        <View
                          style={{flex: 1, marginLeft: 20, marginBottom: 10}}>
                          <Text
                            style={[
                              paraGray.darkpara,
                              {color: COLORS.lightbblack},
                            ]}>
                            {data.reply}
                          </Text>
                        </View>
                      </View>
                    )}
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        marginBottom: 20,
                        marginTop: 20,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(setShowModal(!showmodal));
                        }}>
                        <Text
                          style={[
                            paraGray.whitepara,
                            {
                              backgroundColor: COLORS.active,
                              paddingHorizontal: 40,
                              paddingVertical: 5,
                              borderRadius: 10,
                            },
                          ]}>
                          Reply
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </List.Accordion>
                </View>
              </List.Section>
            </View>
          ))}
        </View>
      </ScrollView>
      <Modal
        visible={showmodal}
        onDismiss={() => dispatch(setShowModal(false))}
        contentContainerStyle={{
          width: '75%',
          height: 350,
          backgroundColor: COLORS.bg,
          alignSelf: 'center',
          padding: 15,
          borderRadius: 5,
        }}>
        <AutoGrowingTextInput
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            backgroundColor: '#FFFFFF',
            width: '100%',
            height: 80,
            borderColor: '#D3D3D3',
            alignSelf: 'center',
            borderWidth: 1,
            marginTop: 20,
            borderRadius: 5,
            fontSize: 13,
            fontFamily: 'Montserrat-Regular',
          }}
          // value={value}
          // onchangetext={value => (setvalue(value), console.log(value))}
          placeholder="Reply"
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: 20,
          }}>
          <TouchableOpacity onPress={() => dispatch(setShowModal(false))}>
            <Text
              style={[
                paraGray.whitepara,
                {
                  backgroundColor: COLORS.active,
                  paddingHorizontal: 40,
                  paddingVertical: 5,
                  borderRadius: 10,
                },
              ]}>
              Reply
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
export default LeaveRequest;
