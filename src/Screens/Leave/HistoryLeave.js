import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {List, Modal} from 'react-native-paper';
import {COLORS} from '../../theme/Colors';
import {container, paraGray} from '../../theme/styles/Base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import SearchInput, {createFilter} from 'react-native-search-filter';

const HistoryLeave = props => {
  const [expanded, setExpanded] = React.useState(true);
  const data = [
    {
      id: '1',
      name: 'ABC',
      stream: 'FYBCA',
      reason: 'Fever',
      date: '10/12/12',
      status: 'Approved',
      days: '1 Days leave',
      detail:
        'Dear Mam, As exam is in next month and we have to complete portion so we can’t to take a leave',
      reply:
        'Dear Student, As exam is in next month and we have to complete portion so we can’t to take a leave',
      status: 'Approved',
    },
    {
      id: '2',
      name: 'DEF',
      stream: 'SYBCA',
      reason: 'Family function',
      date: '10/12/12',
      status: 'Rejected',
      days: '5 Days leave',
      detail:
        'Dear Mam, As exam is in next month and we have to complete portion so we can’t to take a leave',
      reply: '',
      status: 'Rejected',
    },
  ];

  //----------Search filter-------------
  const KEYS_TO_FILTERS = ['name', 'stream'];
  const [state, setState] = useState({searchTerm: ''});

  const filterleaves = data.filter(
    createFilter(state.searchTerm, KEYS_TO_FILTERS),
  );
  const searchUpdated = term => {
    setState({searchTerm: term});
  };

  return (
    <View style={[container.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.search}>
          <View
            style={{
              flexDirection: 'row',
              alignbooks: 'center',
              backgroundColor: '#FFFFFF',
              width: '100%',
              height: 50,
              borderColor: '#D3D3D3',
              paddingHorizontal: 0,
              borderWidth: 2,
              marginTop: 15,
              borderRadius: 10,
            }}>
            <TextInput
              placeholder="Search by Names./Stream"
              placeholderTextColor="#808080"
              onChangeText={term => {
                searchUpdated(term);
              }}
              style={{
                marginLeft: 2,
                marginTop: 2,
                backgroundColor: '#FFFFFF',
                width: '90%',
                height: 40,
                fontSize: 12,
                fontFamily: 'Montserrat-Regular',
              }}
            />
            <Feather
              style={{marginTop: 6}}
              name="search"
              size={29}
              color="#000000"
            />
          </View>
        </View>
        <View style={{flex: 1, marginTop: 20, marginBottom: 20}}>
          {filterleaves.map((data, index) => (
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
                      {data.stream}
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
                      <Text
                        style={[
                          paraGray.darkpara,
                          {
                            color:
                              data.status == 'Approved'
                                ? COLORS.green
                                : COLORS.red,
                            marginLeft: 5,
                          },
                        ]}>
                        {data.status}
                      </Text>
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
                  </List.Accordion>
                </View>
              </List.Section>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryLeave;

const styles = StyleSheet.create({
  search: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignbooks: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderWidth: 0,
    borderColor: '#E4E4E4',
  },
});
