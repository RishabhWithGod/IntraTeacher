import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {COLORS} from '../../theme/Colors';
import {paraGray} from '../../theme/styles/Base';

const OnBoarding = props => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.bg} barStyle={'dark-content'} />
      <Onboarding
        pages={[
          {
            backgroundColor: COLORS.bg,
            image: (
              <View
                style={{
                  backgroundColor: COLORS.onboardback,
                  borderRadius: 150,
                }}>
                <Image
                  style={{height: 250, width: 250}}
                  source={require('../../../assets/onboard3.png')}
                />
              </View>
            ),
            title: (
              <View>
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
                  borderRadius: 150,
                }}>
                <Image
                  style={{height: 250, width: 250}}
                  source={require('../../../assets/onboard3.png')}
                />
              </View>
            ),
            title: (
              <View>
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
                  borderRadius: 150,
                }}>
                <Image
                  style={{height: 250, width: 250}}
                  source={require('../../../assets/onboard3.png')}
                />
              </View>
            ),
            title: (
              <View>
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
                {/* </View> */}
                {/* <View>
                <Text onPress={()=> props.navigation.navigate('SignIn')}>Done</Text>
              </View> */}
              </View>
            ),
          },
        ]}
        showPagination={true}
        bottomBarColor={COLORS.bg}
        bottomBarHighlight={true}
        onDone={() => props.navigation.navigate('SignIn')}
        onSkip={() => props.navigation.navigate('SignIn')}
      />
    </View>
  );
};

export default OnBoarding;
