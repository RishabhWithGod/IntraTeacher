import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {Button} from 'react-native-paper';
import {COLORS} from '../../theme/Colors';
import {paraGray} from '../../theme/styles/Base';

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? COLORS.blue : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        width: 0,
        height: 0,
        borderRadius: 10,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 15,
    }}
    {...props}>
    <Text
      style={[
        paraGray.whitelarge,
        {
          backgroundColor: COLORS.blue,
          borderRadius: 20,
          paddingHorizontal: 50,
          paddingVertical: 8,
        },
      ]}>
      Next
    </Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 15,
    }}
    {...props}>
    <Text
      style={[
        paraGray.whitelarge,
        {
          backgroundColor: COLORS.blue,
          borderRadius: 20,
          paddingHorizontal: 30,
          paddingVertical: 9,
        },
      ]}>
      Let's Start
    </Text>
  </TouchableOpacity>
);
const OnBoarding = props => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.bg}}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <StatusBar backgroundColor={COLORS.bg} barStyle={'dark-content'} />

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-end',
          marginHorizontal: 30,
          marginTop: 20,
        }}
        onPress={() => props.navigation.navigate('SignIn')}>
        <Text
          style={[paraGray.darkpara, {color: COLORS.lightblack, fontSize: 17}]}>
          Skip
        </Text>
      </TouchableOpacity>
      <Onboarding
        showSkip={false}
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => props.navigation.navigate('SignIn')}
        onDone={() => props.navigation.navigate('SignIn')}
        showPagination={true}
        bottomBarColor={COLORS.bg}
        bottomBarHeight={80}
        // bottomBarHighlight={true}
        containerStyles={{
          flex: 1,
          // justifyContent: 'center',
          alignSelf: 'center',
        }}
        pages={[
          {
            backgroundColor: COLORS.bg,
            image: (
              <View
                style={{
                  backgroundColor: COLORS.onboardback,
                  borderRadius: 200,
                  justifyContent: 'center',
                  height: 230,
                  width: 230,
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <ImageBackground
                  style={{
                    height: 320,
                    paddingHorizontal: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  source={require('../../../assets/onboardbackground.png')}>
                  <Image
                    style={{
                      height: 200,
                      width: 220,
                      marginLeft: 50,
                      marginTop: 25,
                    }}
                    source={require('../../../assets/onboard1.png')}
                  />
                </ImageBackground>
              </View>
            ),
            title: (
              <View style={{paddingTop: 20, marginBottom: 30}}>
                <Text style={[paraGray.parahome]}>Quality Education</Text>
              </View>
            ),
            subtitle: (
              <View style={{paddingHorizontal: 10}}>
                <Text
                  style={[
                    paraGray.darkpara,
                    {color: COLORS.lightblack, textAlign: 'center'},
                  ]}>
                  Select which contact details should we use to reset your PIN
                  Select which contact details should we use to reset your PIN:
                </Text>
              </View>
            ),
          },
          {
            backgroundColor: COLORS.bg,
            image: (
              <View
                style={{
                  backgroundColor: COLORS.onboardback,
                  borderRadius: 200,
                  justifyContent: 'center',
                  height: 230,
                  width: 230,
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <ImageBackground
                  style={{
                    height: 313,
                    width: 310,
                    paddingBottom: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    // backgroundColor: COLORS.active,
                  }}
                  source={require('../../../assets/onboardbackground.png')}>
                  <Image
                    style={{height: 140, width: 210}}
                    source={require('../../../assets/onboard2.png')}
                  />
                </ImageBackground>
              </View>
            ),
            title: (
              <View style={{paddingTop: 20, marginBottom: 30}}>
                <Text style={[paraGray.parahome]}>Quality Education</Text>
              </View>
            ),
            subtitle: (
              <View style={{paddingHorizontal: 10}}>
                <Text
                  style={[
                    paraGray.darkpara,
                    {color: COLORS.lightblack, textAlign: 'center'},
                  ]}>
                  Select which contact details should we use to reset your PIN
                  Select which contact details should we use to reset your PIN:
                </Text>
              </View>
            ),
          },
          {
            backgroundColor: COLORS.bg,
            image: (
              <View
                style={{
                  backgroundColor: COLORS.onboardback,
                  borderRadius: 200,
                  justifyContent: 'center',
                  height: 230,
                  width: 230,
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <ImageBackground
                  style={{
                    height: 313,
                    width: 310,
                    // paddingBottom: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    // backgroundColor: COLORS.active,
                  }}
                  source={require('../../../assets/onboardbackground.png')}>
                  <Image
                    style={{height: 200, width: 210, marginLeft: 35}}
                    source={require('../../../assets/onboard3.png')}
                  />
                </ImageBackground>
              </View>
            ),
            title: (
              <View style={{paddingTop: 20, marginBottom: 30}}>
                <Text style={[paraGray.parahome]}>Digitalized Process</Text>
              </View>
            ),
            subtitle: (
              <View style={{paddingHorizontal: 10}}>
                <Text
                  style={[
                    paraGray.darkpara,
                    {color: COLORS.lightblack, textAlign: 'center'},
                  ]}>
                  Helps in digital transformation of various operational
                  activities of various educational institutions.
                </Text>
              </View>
            ),
          },
        ]}
      />
      {/* </ScrollView> */}
    </View>
  );
};

export default OnBoarding;
