import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  Image,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useSelector, useDispatch} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Url from '../Api/Url';
// import{ AuthContext } from '../components/context';

export function DrawerContent(props) {
  const {userinfo, userid, username, showmodal, useremail, userimage} =
    useSelector(state => state.userReducer);
  //   useEffect(() => {
  // console.log(userimage);
  //   }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => {
                  props.navigation.navigate('TeachersProfile');
                }}>
                <Avatar.Image
                  source={{uri: Url.profile_IMG + userimage}}
                  size={50}
                />
                <View style={{marginLeft: 15, flexDirection: 'column'}}>
                  <Title style={styles.title}>Hello! {username}</Title>
                  <Caption style={styles.caption}>{useremail}</Caption>
                </View>
              </TouchableOpacity>
              <View>
                <Entypo.Button
                  name="cross"
                  size={25}
                  color="black"
                  backgroundColor="#E5E5E5"
                  onPress={() => props.navigation.closeDrawer()}
                />
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection} />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="calendar-blank-outline"
                size={26}
                color="#434b56"
              />
            )}
            labelStyle={styles.labelStyle}
            label="Fees Transaction"
            onPress={() => {
              props.navigation.navigate('FeesTransaction');
            }}
          />

          <DrawerItem
            icon={({color, size}) => (
              <Feather name="book-open" size={26} color="#434b56" />
            )}
            labelStyle={styles.labelStyle}
            label="Lectures"
            onPress={() => {
              props.navigation.navigate('Lecture');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Feather name="pen-tool" size={26} color="#434b56" />
            )}
            labelStyle={styles.labelStyle}
            label="MCQs"
            onPress={() => {
              props.navigation.navigate('McqTest');
            }}
          />

          <DrawerItem
            icon={({color, size}) => (
              <Entypo name="price-ribbon" color={color} size={size} />
            )}
            labelStyle={styles.labelStyle}
            label="Announcements"
            onPress={() => {
              props.navigation.navigate('Announcement');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Ionicons name="document-text" color={color} size={size} />
            )}
            labelStyle={styles.labelStyle}
            label="Assignments"
            onPress={() => {
              props.navigation.navigate('Assignment');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Entypo name="database" color={color} size={size} />
            )}
            labelStyle={styles.labelStyle}
            label="About us"
            onPress={() => {
              props.navigation.navigate('');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Avatar.Image
                source={require('../../assets/Vector.png')}
                size={25}
                style={{
                  backgroundColor: '#E5E5E5',
                  borderColor: '#E5E5E5',
                  borderWidth: 0,
                  overflow: 'hidden',
                }}
              />
            )}
            labelStyle={styles.labelStyle}
            label="Admins"
            onPress={() => {
              props.navigation.navigate('SupportScreen');
            }}
          />

          {/* <DrawerItem
                        icon={({ color, size }) => (
                            <Entypo
                                name="users"
                                color={color}
                                size={size}
                            />
                        )}
                        labelStyle={styles.labelStyle}
                        label="StudentClient"
                        onPress={() => { props.navigation.navigate('StudentClient') }}
                    /> */}
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 15,
    marginTop: 3,
    fontFamily: 'Poppins-SemiBold',
  },
  caption: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: 'Montserrat-Regular',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  labelStyle: {
    fontFamily: 'Montserrat-Regular',
    color: '#000000',
    fontSize: 13,
  },
});
