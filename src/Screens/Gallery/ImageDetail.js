import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Avatar, Surface} from 'react-native-paper';
import {COLORS} from '../../theme/Colors';
import {btnStyles, container, paraGray} from '../../theme/styles/Base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const ImageDetail = props => {
  const {Images} = props.route.params;

  return (
    <View style={[container.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, marginTop: 20}}>
          <Image
            source={Images.image}
            style={{
              height: deviceHeight / 1.3,
              width: deviceWidth / 1,
              alignSelf: 'center',
            }}
          />
        </View>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <Text style={[paraGray.darkpara]}>
            Dear Student, As exam is in next month and we have to com plete
            portion so we can’t to take a leave Dear Student, As exam is in next
            month and we have to complete portion so we can’t to take a leave
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default ImageDetail;
