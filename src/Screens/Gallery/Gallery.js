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

const Gallery = props => {
  const [activeButton, setActiveButon] = useState(1);

  const Images = [
    {
      id: '1',
      title: 'Rob Strated following you.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '10 min ago',
      image: require('../../../assets/image100.png'),
    },
    {
      id: '2',
      title: 'Rob Sent you a connection request',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '1 hour ago',
      image: require('../../../assets/image103.png'),
    },
    {
      id: '3',
      title: 'Webinar is live join now',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '1 hour ago',
      image: require('../../../assets/image100.png'),
    },
    {
      id: '4',
      title: 'Faculty marked absent for your science online lecture',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '50 min ago',
      image: require('../../../assets/image103.png'),
    },
    
  ];

  return (
    <View style={[container.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex:1,}}></View>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {Images.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={{marginTop:10}}
              onPress={() =>
                props.navigation.navigate('ImageDetail', {
                  Images: Images[index],
                })
              }>
              <Image
                source={image.image}
                style={{
                  height: deviceHeight / 3,
                  width: deviceWidth / 2 - 6,
                  borderRadius: 10,
                  marginLeft: 4,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default Gallery;
