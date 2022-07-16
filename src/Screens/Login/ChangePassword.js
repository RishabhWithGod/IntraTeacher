import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Avatar, Surface} from 'react-native-paper';
// import {InnerHeader} from '../../Components/InnerHeader';
import {COLORS} from '../../theme/Colors';
import {container, paraGray} from '../../theme/styles/Base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ChangePassword = props => {
  return (
    <View style={container.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 15,
            paddingBottom: 30,
          }}>
          <View style={{marginTop: 50}}>
            <View
              style={{
                width: '100%',
                heigth: 150,
                backgroundColor: 'white',
                marginBottom: 25,
              }}>
              <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                Old Password
              </Text>
              <TextInput
                placeholder="Enter Old Password"
                style={[
                  paraGray.darklarge,
                  {
                    borderBottomColor: COLORS.bottom,
                    borderBottomWidth: 1,
                    //   width: '90%',
                  },
                ]}
              />
            </View>
            <View
              style={{
                width: '100%',
                heigth: 150,
                backgroundColor: 'white',
                marginBottom: 25,
              }}>
              <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                New Password
              </Text>
              <TextInput
                placeholder="Enter New Password"
                style={[
                  paraGray.darklarge,
                  {
                    borderBottomColor: COLORS.bottom,
                    borderBottomWidth: 1,
                    //   width: '90%',
                  },
                ]}
              />
            </View>
            <View
              style={{
                width: '100%',
                heigth: 150,
                backgroundColor: 'white',
                marginBottom: 25,
              }}>
              <Text style={[paraGray.darkpara, {color: COLORS.label}]}>
                Re-Enter Password
              </Text>
              <TextInput
                placeholder="Re-enter Password"
                style={[
                  paraGray.darklarge,
                  {
                    borderBottomColor: COLORS.bottom,
                    borderBottomWidth: 1,
                    //   width: '90%',
                  },
                ]}
              />
            </View>

            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: COLORS.active,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 15,
                paddingBottom: 10,
                marginBottom: 10,
                marginHorizontal: 20,
              }}>
              <Text style={paraGray.whitelarge}>CHANGE PASSWORD</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
            }}
            onPress={() => {
              props.navigation.navigate('ForgetPassword');
            }}>
            <AntDesign name="lock" size={20} color={COLORS.active} />
            <Text style={[paraGray.darkpara, {textAlign: 'center'}]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default ChangePassword;
