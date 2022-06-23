import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const TestResultMcqs = props => {
  const {subjects, students} = props.route.params;
  const items = [
    {
      id: '1',
      question: 'What is Your Name ?',
      option1: 'Sunil',
      option2: 'Niraj',
      option3: 'Ayush',
      option4: 'Rishabh',
      answer: 'Rishabh',
    },
    {
      id: '2',
      question: 'Age of Ayush ?',
      option1: 'Niraj',
      option2: 'Ayush',
      option3: 'Sunil',
      option4: 'Vikash',
      answer: 'Niraj',
    },
    {
      id: '3',
      question: 'What is an age of Niraj ?',
      option1: '19',
      option2: '20',
      option3: '21',
      option4: '24',
      answer: '20',
    },
    {
        id: '4',
        question: 'What is Your Name ?',
        option1: 'Sunil',
        option2: 'Niraj',
        option3: 'Ayush',
        option4: 'Rishabh',
        answer: 'Rishabh',
      },
      {
        id: '5',
        question: 'What is an age of Niraj ?',
        option1: '19',
        option2: '20',
        option3: '21',
        option4: '24',
        answer: '20',
      },
  ];
  return (
    <ScrollView  showsVerticalScrollIndicator={false}  style={styles.container} >
      <View>
        <View>
          <Text style={styles.subtxt}>{subjects.subname}</Text>
        </View>
        <View>
          <Text style={styles.txt}>
            Name:
            <Text style={styles.subtxt}>{students.name}</Text>
          </Text>
          <Text style={styles.txt}>
            Stream:
            <Text style={styles.datatxt}>{subjects.stream}</Text>
          </Text>
          <Text style={styles.txt}>
            Total Time:
            <Text style={styles.subtxt}>{students.totaltime}</Text>
          </Text>
        </View>
        <View style={styles.divline} />
        <View>
          <Text style={styles.label}>MCQs Result</Text>
        </View>
        
        {items.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.txt}>
                Question{item.id} :-
                <Text style={styles.subtxt}>{item.question}</Text>
              </Text>
              <View>
                <Text style={styles.optionlabel}>
                  A.
                  <Text style={styles.option}>{item.option1}</Text>
                </Text>
                <Text style={styles.optionlabel}>
                  B.
                  <Text style={styles.option}>{item.option2}</Text>
                </Text>
                <Text style={styles.optionlabel}>
                  C.
                  <Text style={styles.option}>{item.option3}</Text>
                </Text>
                <Text style={styles.optionlabel}>
                  D.
                  <Text style={styles.option}>{item.option4}</Text>
                </Text>
              </View>
              <Text style={styles.option}>
                Answer:-
                <Text style={styles.subtxt}>{item.answer}</Text>
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default TestResultMcqs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subtxt: {
    marginTop: 25,
    fontSize: 13,
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: '6%',
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

  txt: {
    marginTop: 20,
    paddingHorizontal: 20,
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  txtbox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 50,
    borderColor: '#D3D3D3',
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 5,
  },
  formtxt: {
    marginTop: 25,
    paddingHorizontal: 20,
    marginBottom: -10,
    color: '#000000',
  },
  datatxt: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
  stlabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  stlabeltext: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000',
    paddingHorizontal: 10,
  },
  sttext: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#000000',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  divline: {
    alignSelf: 'center',
    marginTop: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: '100%',
  },
  label: {
    marginTop: 10,
    fontSize: 15,
    color: '#000000',
    alignSelf: 'center',
    fontFamily: 'Montserrat-SemiBold',
    // paddingHorizontal: '6%',
  },
  option: {
    marginTop: 5,
    paddingHorizontal: 30,
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  optionlabel: {
    marginTop: 5,
    paddingHorizontal: 30,
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
});
