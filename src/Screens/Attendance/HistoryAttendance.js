import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {createFilter} from 'react-native-search-filter';
import {useSelector, useDispatch} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {COLORS} from '../../theme/Colors';
import Url from '../../Api/Url';

const HistoryAttendance = props => {
  const {
    streamvalue,
    subjectvalue,
    classvalue,
    sectionvalue,
    classname,
    subjectname,
    sectionname,
    fromdate,
  } = props.route.params;
  const {userinfo, userid, username, showmodal, schoolid, teacherid} =
    useSelector(state => state.userReducer);
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [getdata, setData] = useState([]);
  const datas = [
    {id: '1', name: 'Vikash Yadav', date: '1/1/21', present: 'Yes'},
    {id: '2', name: 'Vikash Gupta', date: '1/1/21', present: 'No'},
    {id: '3', name: 'Ayush Dubey', date: '1/1/21', present: 'Yes'},
  ];

  //----------Search filter-------------
  const KEYS_TO_FILTERS = ['name'];
  const [state, setState] = useState({searchTerm: ''});

  const data = datas.filter(createFilter(state.searchTerm, KEYS_TO_FILTERS));
  const searchUpdated = term => {
    setState({searchTerm: term});
  };

  useEffect(() => {
    getapiData();
    // console.log(date);
    // console.log("Tid"+teacherid)
    // console.log('Uid' + userid);
  }, []);

  // --------APICall----------

  const getapiData = async () => {
    setRefreshing(false);
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('school_id', '5');
      formData.append('class_id', '1');
      formData.append('section_id', '1');
      formData.append('subject_id', '2');
      formData.append('date', '07-07-2022');
      formData.append('academic_year_id', '5');
      formData.append('month', '07');
      let resp = await fetch(
        `${Url.student_history}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        },
      )
        .then(response => {
          // console.log('DATA' + JSON.stringify(response));
          return response.json();
        })
        .then(result => {
          // console.log("history",result);
          setData(result.students_detail);
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
        <View>
          <Text style={styles.subtxt}>{subjectname}</Text>
        </View>
        <View>
          <Text style={styles.txt}>
            Class :<Text style={styles.dataTxt}> {classname}</Text>
          </Text>
          <Text style={styles.txt}>
            Section :<Text style={styles.dataTxt}> {sectionname}</Text>
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.rowTxt}>Date</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.rowTxt}>Student Name</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.rowTxt}>Present</Text>
          </View>
        </View>
        {data.map((data, index) => (
          <View key={index}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.dataTxt}>{data.date}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // backgroundColor: COLORS.active,
                }}>
                <Text style={styles.dataTxt}>{data.name}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // backgroundColor: COLORS.bluBg,
                }}>
                <Text style={styles.dataTxt}>{data.present}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HistoryAttendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  search: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderWidth: 0,
    borderColor: '#E4E4E4',
  },
  rowcontainer: {
    alignItems: 'center',
    paddingHorizontal: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowTxt: {
    flexWrap: 'wrap',
    marginTop: 20,
    fontSize: 12,
    color: '#000000',
    fontWeight: '500',
    fontFamily: 'Montserrat-SemiBold',
  },
  txt: {
    marginTop: 20,
    paddingHorizontal: 20,
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
  subtxt: {
    marginTop: 25,
    fontSize: 13,
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: '6%',
  },
  datacontainer: {
    alignItems: 'center',
    paddingHorizontal: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataTxt: {
    flexWrap: 'wrap',
    marginTop: 20,
    fontSize: 12,
    color: '#000000',
    fontWeight: '500',
    fontFamily: 'Montserrat-Regular',
  },
});
