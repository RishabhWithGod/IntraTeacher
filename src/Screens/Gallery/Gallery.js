import React, {useState, useEffect} from 'react';
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
  RefreshControl,
} from 'react-native';
import {Avatar, Surface} from 'react-native-paper';
import {COLORS} from '../../theme/Colors';
import {btnStyles, container, paraGray} from '../../theme/styles/Base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import Url from '../../Api/Url';
import Spinner from 'react-native-loading-spinner-overlay';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const Gallery = props => {
  const [activeButton, setActiveButon] = useState(1);
  const [getdata, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const {userinfo, userid, username, showmodal, schoolid, teacherid} =
    useSelector(state => state.userReducer);
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

  useEffect(() => {
    getapiData();

    // console.log(date);
    // console.log("Tid"+schoolid)
    // console.log('Uid' + teacherid);
  }, []);

  // --------APICall----------

  const getapiData = async () => {
    setRefreshing(false);
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('school_id', schoolid);
      // formData.append('teacher_id', teacherid);

      let resp = await fetch(`${Url.get_school_gallery}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      })
        .then(response => {
          // console.log('DATA' + JSON.stringify(response));
          return response.json();
        })
        .then(result => {
          // console.log(result);
          setdata(result.data);
          // console.log('hi' + result.data);
          setLoading(false);
        });
    } catch (error) {
      console.log('AttendancePtm Error => ' + error);
      setLoading(false);
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getapiData();
  }, []);

  return (
    <View style={[container.container]}>
      {loading == true && <Spinner visible={load} />}
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{flex: 1}}></View>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {getdata.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={{marginTop: 10}}
              onPress={() =>
                props.navigation.navigate('ImageDetail', {
                  Images: getdata[index],
                })
              }>
              <Image
                source={{uri: Url.IMG + image.image}}
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
        {getdata == '' && (
          <View
            style={{
              flex: 1,
              marginBottom: 80,
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 150,
            }}>
            <Text style={[paraGray.darklarge, {textAlign: 'center'}]}>
              NO Data Found
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default Gallery;
