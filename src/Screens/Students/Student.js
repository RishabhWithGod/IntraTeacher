import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  ImageBackground,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import SearchInput, {createFilter} from 'react-native-search-filter';
import {DataTable, Avatar} from 'react-native-paper';
import {COLORS} from '../../theme/Colors';
import Spinner from 'react-native-loading-spinner-overlay';
import Url from '../../Api/Url';
import {paraGray} from '../../theme/styles/Base';
import {useSelector, useDispatch} from 'react-redux';

const Student = props => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const {userinfo, userid, username, showmodal, schoolid} = useSelector(
    state => state.userReducer,
  );
  //----------Search filter-------------
  const KEYS_TO_FILTERS = ['name'];
  const [search, setSearch] = useState('');
  const [getdata, setGetdata] = useState([]);

  const studentfilter = getdata.filter(createFilter(search, KEYS_TO_FILTERS));
  const searchUpdated = term => {
    setSearch(term);
  };

  useEffect(() => {
    getapiData();
    // console.log("Tid"+schoolid)
    // console.log("Uid"+userid)
  }, []);

  // --------APICall----------

  const getapiData = async () => {
    setRefreshing(false);
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('school_id', schoolid);
      formData.append('teacher_id', userid);
      let resp = await fetch(`${Url.studentList}`, {
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
          setGetdata(result.data);
          setLoading(false);
        });
    } catch (error) {
      console.log('Student List Error => ' + error);
      setLoading(false);
    }
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getapiData();
  }, []);

  return (
    <View style={styles.container}>
      {loading == true && <Spinner visible={load} />}
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.search}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              width: '100%',
              height: 50,
              borderColor: '#D3D3D3',
              paddingHorizontal: 2,
              borderWidth: 2,
              marginTop: 15,
              borderRadius: 10,
            }}>
            <TextInput
              placeholder="Search by Names."
              placeholderTextColor="#808080"
              onChangeText={term => {
                searchUpdated(term);
              }}
              style={{
                marginLeft: 0,
                backgroundColor: '#FFFFFF',
                width: '90%',
                height: 40,
                fontSize: 12,
                fontFamily: 'Montserrat-Regular',
              }}
            />
            <Feather name="search" size={29} color="#000000" />
          </View>
        </View>

        {studentfilter.map((student, index) => (
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={styles.userinfo}
              key={index}
              onPress={() =>
                props.navigation.navigate('StudentProfile', {
                  student: getdata[index],
                })
              }>
              <DataTable>
                <DataTable.Row style={{borderBottomWidth: 0}}>
                  <DataTable.Cell>
                    {student.photo == null ? (
                      <ImageBackground
                        style={{
                          backgroundColor: COLORS.black,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 40,
                          height: 40,
                          borderRadius: 20, 
                        }}>
                        <FontAwesome5
                          name="user-alt"
                          size={20}
                          color="#FFFFFF"
                        />
                      </ImageBackground>
                    ) : (
                      <Avatar.Image
                        size={50}
                        source={student.photo}
                        backgroundColor={COLORS.black}
                      />
                    )}
                  </DataTable.Cell>
                  <DataTable.Cell style={{flex: 4.5}}>
                    <Text style={styles.label}>{student.name}</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </TouchableOpacity>
          </View>
        ))}
        {getdata == '' && (
          <View
            style={{
              flex: 1,
              marginBottom: 80,
              alignSelf: 'center',
              marginTop: 80,
            }}>
            <Text style={[paraGray.darklarge, {textAlign: 'center'}]}>
              NO Data Found
            </Text>
          </View>
        )}
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            style={{
              position: search == '' ? 'absolute' : 'relative',
              bottom: 10,
              right: 10,
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#000000',
              borderRadius: 60,
              marginTop: 20,
            }}
            onPress={() => props.navigation.navigate('Info')}>
            <Feather name="plus" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Student;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  search: {
    // height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderWidth: 0,
    borderColor: '#E4E4E4',
    paddingBottom: 10,
  },
  userinfo: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    flexDirection: 'row',
    color: 'black', // <-- The magic
    textAlign: 'center', // <-- The magic
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    color: '#000000',
  },
  centeredView: {
    // flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '30%',
  },
  modalView: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
});
