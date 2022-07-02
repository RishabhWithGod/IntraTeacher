import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Notification from './src/Screens/Notification';
import {DrawerContent} from './src/Screens/DrawerContent';
import HomeScreen from './src/Screens/HomeScreen';
import Student from './src/Screens/Students/Student';
import Info from './src/Screens/Students/Info';
import Courses from './src/Screens/Students/Courses';
import Document from './src/Screens/Documents/Document';
import Assign from './src/Screens/Library/Assign';
import Collection from './src/Screens/Library/Collection';
import HistoryLib from './src/Screens/Library/History';
import Exam from './src/Screens/Exams/Exam';
import CreateTest from './src/Screens/Exams/CreateTest';
import ManageTest from './src/Screens/Exams/ManageTest';
import Event from './src/Screens/Events/Event';
import CreateEvent from './src/Screens/Events/CreateEvent';
import HistoryEvent from './src/Screens/Events/HistoryEvent';
import ApplicationEvent from './src/Screens/Events/ApplicationEvent';
import Library from './src/Screens/Library/Library';
import LeaveApp from './src/Screens/Leave/LeaveApp';
import Ptm from './src/Screens/PTM/Ptm';
import CreateMeeting from './src/Screens/PTM/CreateMeeting';
import UpcomingPtm from './src/Screens/PTM/UpcomingPtm';
import AttendancePtm from './src/Screens/Attendance/AttendancePtm';
import Announcement from './src/Screens/Announcements/Announcement';
import HistoryAnnouncement from './src/Screens/Announcements/HistoryAnnouncement';
import CreateAnnouncement from './src/Screens/Announcements/CreateAnnouncement';
import Lecture from './src/Screens/Lectures/Lecture';
import CreateLecture from './src/Screens/Lectures/CreateLecture';
import UpComingLecture from './src/Screens/Lectures/UpComingLecture';
import HistoryLecture from './src/Screens/Lectures/HistoryLecture';
import McqTest from './src/Screens/MCQs/McqTest';
import CreateMcqTest from './src/Screens/MCQs/CreateMcqTest';
import SubmittedTest from './src/Screens/MCQs/SubmittedTest';
import HistoryTest from './src/Screens/MCQs/HistoryTest';
import AttendanceShow from './src/Screens/Attendance/AttendanceShow';
import TakeAttendance from './src/Screens/Attendance/TakeAttendance';
import HistoryAttendance from './src/Screens/Attendance/HistoryAttendance';
import ReportAttendance from './src/Screens/Attendance/ReportAttendance';
import Assignment from './src/Screens/Assignments/Assignment';
import CreateAss from './src/Screens/Assignments/CreateAss';
import SubmittedAss from './src/Screens/Assignments/SubmittedAss';
import HistoryAss from './src/Screens/Assignments/HistoryAss';
import Youtube from './src/Screens/Youtube/Youtube';
import ShareYtube from './src/Screens/Youtube/ShareYtube';
import HistoryYtube from './src/Screens/Youtube/HistoryYTube';
import BookDetail from './src/Screens/Library/BookDetail';
import AssignBook from './src/Screens/Library/AssignBook';
import CollectionDetail from './src/Screens/Library/CollectionDetail';
import FeesTransaction from './src/Screens/FeesTransactions/FeesTransaction';
import HistoryTrans from './src/Screens/FeesTransactions/HistoryTrans';
import UserTrans from './src/Screens/FeesTransactions/UserTrans';
import FeesDetail from './src/Screens/FeesTransactions/FeesDetail';
import LeaveStudent from './src/Screens/StudentIntraclient/Leave/LeaveStudent';
import ApplyLeave from './src/Screens/StudentIntraclient/Leave/ApplyLeave';
import HistoryLeaveStudent from './src/Screens/StudentIntraclient/Leave/HistoryLeaveStudent';
import StudentClient from './src/Screens/StudentIntraclient/StudentClient';
import StudentLibrary from './src/Screens/StudentIntraclient/StudentLibrary/StudentLibrary';
import StudentBookAssigned from './src/Screens/StudentIntraclient/StudentLibrary/StudentBookAssigned';
import StudentLibHistory from './src/Screens/StudentIntraclient/StudentLibrary/StudentLibHistory';
import PTMLecture from './src/Screens/StudentIntraclient/PTM/PTMLecture';
import UpcomingPtmLec from './src/Screens/StudentIntraclient/PTM/UpcomingPtmLec';
import HistoryPtmLec from './src/Screens/StudentIntraclient/PTM/HistoryPtmLec';
import StudentAttendance from './src/Screens/StudentIntraclient/StudentAttendance/StudentAttendance';
import StudentAttendanceShow from './src/Screens/StudentIntraclient/StudentAttendance/StudentAttendanceShow';
import StudentYoutube from './src/Screens/StudentIntraclient/StudentYoutube/StudentYoutube';
import StudentEvent from './src/Screens/StudentIntraclient/StudentEvent/StudentEvent';
import StudentNewEvent from './src/Screens/StudentIntraclient/StudentEvent/StudentNewEvent';
import StudentEventDetail from './src/Screens/StudentIntraclient/StudentEvent/StudentEventDetail';
import LecHistory from './src/Screens/Lectures/LecHistory';
import EventDetailHistory from './src/Screens/Events/EventDetailHistory';
import HistoryAtten from './src/Screens/Attendance/HistoryAtten';
import HistoryDetail from './src/Screens/Library/HistoryDetail';
import HistoryTransDetail from './src/Screens/FeesTransactions/HistoryTransDetail';
import FeeUserDetail from './src/Screens/FeesTransactions/FeeUserDetail';
import HistoryDetailTest from './src/Screens/MCQs/HistoryDetailTest';
import SubmittedDetailTest from './src/Screens/MCQs/SubmittedDetailTest';
import HistoryDetailAnn from './src/Screens/Announcements/HistoryDetailAnn';
import SubmittedDetailAss from './src/Screens/Assignments/SubmittedDetailAss';
import HistoryDetailAss from './src/Screens/Assignments/HistoryDetailAss';
import UpComingDetailLecture from './src/Screens/Lectures/UpComingDetailLecture';
import UpcomingDetailPtm from './src/Screens/PTM/UpcomingDetailPtm';
import HistoryLeave from './src/Screens/Leave/HistoryLeave';
import HistoryLeaveDetail from './src/Screens/Leave/HistoryLeaveDetail';
import HistoryLeaveDetailStudent from './src/Screens/StudentIntraclient/Leave/HistoryLeaveDetailStudent';
import TestResultMcqs from './src/Screens/MCQs/TestResultMcqs';
import Feeds from './src/Screens/Feeds/Feeds';
import SignIn from './src/Screens/Login/SignIn';
import {Provider} from 'react-redux';
import {Store} from './src/Redux/Store/store';
import Certificate from './src/Screens/Certificate/Certificate';
import ProvideCertificate from './src/Screens/Certificate/ProvideCertificate';
import StudyMaterial from './src/Screens/StudyMaterial/StudyMaterial';
import Result from './src/Screens/Result/Result';
import Request from './src/Screens/RequestAccess/Request';
import RequestAccess from './src/Screens/RequestAccess/RequestAccess';
import ForgetPassword from './src/Screens/Login/ForgetPassword';
import ForgetPasswordMail from './src/Screens/Login/ForgetPasswordMail';
import ForgetPasswordNO from './src/Screens/Login/ForgetPasswordNO';
import StudentProfile from './src/Screens/Students/StudentProfile';
import Gallery from './src/Screens/Gallery/Gallery';
import ImageDetail from './src/Screens/Gallery/ImageDetail';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  setuserId,
  setuserInfo,
  setuserName,
  setShowModal,
  setuserImage,
} from './src/Redux/Actions/actions';
import {useSelector, useDispatch} from 'react-redux';
import Splash from './src/Screens/Splash/Splash';
import {COLORS} from './src/theme/Colors';
import OnBoarding from './src/Screens/OnBoarding/OnBoarding';
const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen
            name="HomeDrawer"
            component={HomeStackScreen}
            options={{headerShown: false, swipeEnabled: false}}
          />
          {/* <Drawer.Screen name="Notifications" component={Notification} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

const DrawerScreen = () => {};

const HomeStackScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {userinfo, userid, username, showmodal, userimage} = useSelector(
    state => state.userReducer,
  );
  useEffect(() => {
    StoreDatas();
  }, []);
  const StoreDatas = async () => {
    try {
      const user_Id = await AsyncStorage.getItem('user_id');
      const user_name = await AsyncStorage.getItem('user_name');
      const user_image = await AsyncStorage.getItem('user_image');
      dispatch(setuserId(user_Id));
      dispatch(setuserName(user_name));
      dispatch(setuserImage(user_image));
    } catch (error) {
      console.log('Catch' + error);
    }
  };

  return (
    <HomeStack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: {
          elevation: 0, // Android
        },
        headerTintColor: 'black',

        headerTitleStyle: {
          fontFamily: 'Montserrat-Light',
        },
      }}>
      <HomeStack.Screen
        name="Splash"
        component={Splash}
        options={{
          animationEnabled: false,
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{
          animationEnabled: false,
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          animationEnabled: false,
          headerShown: false,
        }}
      />

      <HomeStack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          animationEnabled: false,
          // headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="ForgetPasswordMail"
        component={ForgetPasswordMail}
        options={{
          title: 'Forget Password',
          animationEnabled: false,
          // headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="ForgetPasswordNO"
        component={ForgetPasswordNO}
        options={{
          title: 'Forget Password',
          animationEnabled: false,
          // headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'INTRAedu',
          headerLeft: () => (
            <View>
              <Icon.Button
                name="ios-menu"
                size={25}
                color="black"
                backgroundColor="white"
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{marginTop: 5}}
                onPress={() => {
                  dispatch(setShowModal(!showmodal));
                }}>
                <Avatar.Image
                  source={{}}
                  size={35}
                  backgroundColor={COLORS.black}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="Notification"
        component={Notification}
        // options={({ route }) => ({
        //   title: route.params.title,
        //   headerBackTitleVisible: false
        // })}
      />
      <HomeStack.Screen
        name="Student"
        component={Student}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="StudentProfile"
        component={StudentProfile}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="Info"
        component={Info}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      {/* <HomeStack.Screen
        name="TabScreen"
        component={TabScreen}
        options={{
          title: 'Add Student',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      /> */}
      <HomeStack.Screen
        name="Document"
        component={Document}
        options={{
          title: 'Document',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="Assign"
        component={Assign}
        options={{
          title: "Book's Assign",

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="Collection"
        component={Collection}
        options={{
          title: 'Collection',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="HistoryLib"
        component={HistoryLib}
        options={{
          title: "Book's History",

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="HistoryDetail"
        component={HistoryDetail}
        options={{
          title: "Book's History",

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerRight: () => (
            <View>
              <Feather name="download" size={30} color="#FFFFFF" onPress={{}} />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="Exam"
        component={Exam}
        options={{
          title: 'Exam',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="CreateTest"
        component={CreateTest}
        options={{
          title: 'CreateTest',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="ManageTest"
        component={ManageTest}
        options={{
          title: 'ManageTest',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="Event"
        component={Event}
        options={{
          title: 'Event',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="CreateEvent"
        component={CreateEvent}
        options={{
          title: 'Create Event',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="HistoryEvent"
        component={HistoryEvent}
        options={{
          title: "Event's History",

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="EventDetailHistory"
        component={EventDetailHistory}
        options={{
          title: "Event's History",

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerRight: () => (
            <View>
              <Feather name="download" size={30} color="#FFFFFF" onPress={{}} />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="ApplicationEvent"
        component={ApplicationEvent}
        options={{
          title: 'Event Application',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="Library"
        component={Library}
        options={{
          title: 'Library',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="LeaveApp"
        component={LeaveApp}
        options={{
          title: 'Leave',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="HistoryLeave"
        component={HistoryLeave}
        options={{
          title: 'Leave',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="HistoryLeaveDetail"
        component={HistoryLeaveDetail}
        options={{
          title: 'Leave',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="Ptm"
        component={Ptm}
        options={{
          title: 'PTM',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="CreateMeeting"
        component={CreateMeeting}
        options={{
          title: 'PTM',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="UpcomingPtm"
        component={UpcomingPtm}
        options={{
          title: 'UpcomingPTM',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="UpcomingDetailPtm"
        component={UpcomingDetailPtm}
        options={{
          title: 'UpcomingPTM',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="AttendancePtm"
        component={AttendancePtm}
        options={{
          title: 'Attendance',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="Announcement"
        component={Announcement}
        options={{
          title: 'Announcement',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="HistoryAnnouncement"
        component={HistoryAnnouncement}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="HistoryDetailAnn"
        component={HistoryDetailAnn}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="CreateAnnouncement"
        component={CreateAnnouncement}
        options={{
          title: 'Create',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="Lecture"
        component={Lecture}
        options={{
          title: 'Lecture',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="CreateLecture"
        component={CreateLecture}
        options={{
          title: 'Lecture',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="UpComingLecture"
        component={UpComingLecture}
        options={{
          title: 'UpComingLecture',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="UpComingDetailLecture"
        component={UpComingDetailLecture}
        options={{
          title: 'UpComingLecture',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="HistoryLecture"
        component={HistoryLecture}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="LecHistory"
        component={LecHistory}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerRight: () => (
            <View>
              <Feather name="download" size={30} color="#FFFFFF" onPress={{}} />
            </View>
          ),

          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="McqTest"
        component={McqTest}
        options={{
          title: 'Test',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="CreateMcqTest"
        component={CreateMcqTest}
        options={{
          title: 'Test',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="SubmittedTest"
        component={SubmittedTest}
        options={{
          title: 'Submitted',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="SubmittedDetailTest"
        component={SubmittedDetailTest}
        options={{
          title: 'Submitted',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerRight: () => (
            <View>
              <Feather name="download" size={30} color="#FFFFFF" onPress={{}} />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="HistoryTest"
        component={HistoryTest}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="HistoryDetailTest"
        component={HistoryDetailTest}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerRight: () => (
            <View>
              <Feather name="download" size={30} color="#FFFFFF" onPress={{}} />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="TestResultMcqs"
        component={TestResultMcqs}
        options={{
          title: 'Result',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerRight: () => (
            <View>
              <Feather name="download" size={30} color="#FFFFFF" onPress={{}} />
            </View>
          ),
        }}
      />

      <HomeStack.Screen
        name="AttendanceShow"
        component={AttendanceShow}
        options={{
          title: 'Attendance',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="TakeAttendance"
        component={TakeAttendance}
        options={{
          title: 'Attendance',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="HistoryAttendance"
        component={HistoryAttendance}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerRight: () => (
            <View>
              <Feather name="download" size={30} color="#FFFFFF" onPress={{}} />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="HistoryAtten"
        component={HistoryAtten}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />

      <HomeStack.Screen
        name="ReportAttendance"
        component={ReportAttendance}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="Assignment"
        component={Assignment}
        options={{
          title: 'Assignment',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="CreateAss"
        component={CreateAss}
        options={{
          title: 'Create',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="SubmittedAss"
        component={SubmittedAss}
        options={{
          title: 'Submitted',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="SubmittedDetailAss"
        component={SubmittedDetailAss}
        options={{
          title: 'Submitted',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerRight: () => (
            <View>
              <Feather name="download" size={30} color="#FFFFFF" onPress={{}} />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="HistoryAss"
        component={HistoryAss}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="HistoryDetailAss"
        component={HistoryDetailAss}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerRight: () => (
            <View>
              <Feather name="download" size={30} color="#FFFFFF" onPress={{}} />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="Youtube"
        component={Youtube}
        options={{
          title: 'Youtube',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="ShareYtube"
        component={ShareYtube}
        options={{
          title: 'Share',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="HistoryYtube"
        component={HistoryYtube}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerRight: () => (
            <View>
              <Feather name="download" size={30} color="#FFFFFF" onPress={{}} />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="BookDetail"
        component={BookDetail}
        options={{
          title: "Book's Assign",

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="AssignBook"
        component={AssignBook}
        options={{
          title: "Book's Assign",

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="CollectionDetail"
        component={CollectionDetail}
        options={{
          title: 'Collection',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="FeesTransaction"
        component={FeesTransaction}
        options={{
          title: 'FeesTransaction',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="UserTrans"
        component={UserTrans}
        options={{
          title: 'FeesTransaction',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="FeesDetail"
        component={FeesDetail}
        options={{
          title: 'FeesTransaction',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="HistoryTrans"
        component={HistoryTrans}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="HistoryTransDetail"
        component={HistoryTransDetail}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerRight: () => (
            <View>
              <Feather name="download" size={30} color="#FFFFFF" onPress={{}} />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="FeeUserDetail"
        component={FeeUserDetail}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerRight: () => (
            <View>
              <Feather name="download" size={30} color="#FFFFFF" onPress={{}} />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="StudentClient"
        component={StudentClient}
        options={{
          title: 'StudentClient',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="ApplyLeave"
        component={ApplyLeave}
        options={{
          title: 'Apply',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="LeaveStudent"
        component={LeaveStudent}
        options={{
          title: 'Leave Application',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="HistoryLeaveStudent"
        component={HistoryLeaveStudent}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="HistoryLeaveDetailStudent"
        component={HistoryLeaveDetailStudent}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="StudentLibrary"
        component={StudentLibrary}
        options={{
          title: 'Library',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="StudentBookAssigned"
        component={StudentBookAssigned}
        options={{
          title: "Book's Assign",

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="StudentLibHistory"
        component={StudentLibHistory}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="PTMLecture"
        component={PTMLecture}
        options={{
          title: 'PTM/Lecture',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="UpcomingPtmLec"
        component={UpcomingPtmLec}
        options={{
          title: 'Upcoming',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="HistoryPtmLec"
        component={HistoryPtmLec}
        options={{
          title: 'History',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="StudentAttendance"
        component={StudentAttendance}
        options={{
          title: 'Attendance',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="StudentAttendanceShow"
        component={StudentAttendanceShow}
        options={{
          title: 'Attendance',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="StudentYoutube"
        component={StudentYoutube}
        options={{
          title: 'Youtube',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="StudentEvent"
        component={StudentEvent}
        options={{
          title: 'Event',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="StudentNewEvent"
        component={StudentNewEvent}
        options={{
          title: 'New Event',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="StudentEventDetail"
        component={StudentEventDetail}
        options={{
          title: 'New Event',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="Feeds"
        component={Feeds}
        options={{
          title: 'Feeds',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />

      <HomeStack.Screen
        name="Certificate"
        component={Certificate}
        options={{
          title: 'Certificate',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />

      <HomeStack.Screen
        name="ProvideCertificate"
        component={ProvideCertificate}
        options={{
          title: 'Provide Certificate',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="StudyMaterial"
        component={StudyMaterial}
        options={{
          title: 'Study Material',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="Result"
        component={Result}
        options={{
          title: 'Study Material',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="Request"
        component={Request}
        options={{
          title: 'Request Access',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="RequestAccess"
        component={RequestAccess}
        options={{
          title: 'Request Access',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="Gallery"
        component={Gallery}
        options={{
          title: 'Gallery',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="ImageDetail"
        component={ImageDetail}
        options={{
          title: 'Gallery',

          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      />
    </HomeStack.Navigator>
  );
};

//  -------------Student Tab bar-----------------
// const TabScreen = ({navigation}) => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Info"
//         component={Info}
//         options={{
//           tabBarLabelStyle: {
//             fontSize: 15,
//             fontFamily: 'Montserrat-SemiBold',
//           },
//         }}
//       />
//       {/* <Tab.Screen name="Courses" component={Courses} /> */}
//     </Tab.Navigator>
//   );
// };
