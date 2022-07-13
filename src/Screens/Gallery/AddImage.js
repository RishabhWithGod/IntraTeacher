import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import {container, paraGray} from '../../theme/styles/Base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../theme/Colors';
import {Avatar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import Url from '../../Api/Url';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import ImagePicker from 'react-native-image-crop-picker';

const AddImage = () => {
  const {userinfo, userid, username, showmodal, userimage} = useSelector(
    state => state.userReducer,
  );
  const [image, setImage] = useState([]);

  // ---------------Image Picker-------------------
  // ----------To Select from gallery-------------------
  const SelectImage = () => {
    let imageList = [];
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
      compressImageQuality: 0.8,
      maxFiles: 10,
      mediaType: 'any',
      includeBase64: true,
    })
      .then(response => {
        // console.log(response);
        response.map(image => {
          imageList.push({
            filename: image.filename,
            path: image.path,
            data: image.data,
          });
        });
        setImage(imageList);
      })
      .catch(e => console.log('galleryerror => ', e.message));
  };

  return (
    <View style={[container.container]}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            marginTop: 40,
            paddingHorizontal: 15,
            marginBottom: 10,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginBottom: 20,
            }}>
            {image.map(image => (
              <View style={{marginHorizontal: 10, marginVertical: 10}}>
                <Image
                  style={{flexDirection: 'row', height: 50, width: 50}}
                  source={{uri: image.path}}
                />
              </View>
            ))}
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 5,
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 10,
              justifyContent: 'center',
              backgroundColor: COLORS.background,
              marginBottom: 10,
            }}
            onPress={SelectImage}>
            <Text style={[paraGray.darklarge, {marginRight: 5}]}>
             Add Image
            </Text>
            <AntDesign
              style={{marginVertical: 5}}
              name="pluscircle"
              size={30}
              color={COLORS.black}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            borderBottomWidth: 0.5,
            borderBottomColor: COLORS.section,
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 10,
            paddingHorizontal: 15,
          }}>
          {userimage == '' ? (
            <ImageBackground
              style={{
                backgroundColor: COLORS.black,
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
                height: 40,
                borderRadius: 20,
              }}>
              <FontAwesome5 name="user-alt" size={20} color="#FFFFFF" />
            </ImageBackground>
          ) : (
            <Avatar.Image
              style={{marginTop: 6}}
              size={40}
              source={{uri: Url.profile_IMG + userimage}}
            />
          )}
          <TextInput
            placeholder="Write Title"
            style={[
              paraGray.darkpara,
              {
                borderBottomColor: COLORS.bottom,
                borderBottomWidth: 1,
                width: '90%',
                marginLeft: 5,
              },
            ]}
          />
        </View>
        <View>
          <AutoGrowingTextInput
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              backgroundColor: '#FFFFFF',
              width: '95%',
              height: 80,
              borderColor: '#D3D3D3',
              alignSelf: 'center',
              borderBottomWidth: 1,
              marginTop: 10,
              borderRadius: 5,
              fontSize: 13,
              fontFamily: 'Montserrat-Regular',
            }}
            placeholder={'Add Description'}
            // value={eventdesc}
            // onChangeText={value => setEventdesc(value)}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#000000',
              width: '80%',
              height: 50,
              borderColor: '#000000',
              alignSelf: 'center',
              borderWidth: 2,
              marginTop: 30,
              borderRadius: 15,
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 17,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Post
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddImage;
