import React, {useState} from 'react';
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
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Avatar, Switch} from 'react-native-paper';
import {InnerHeader} from '../../../Components/InnerHeader';
import {COLORS} from '../../../theme/Colors';
import {btnStyles, container, paraGray} from '../../../theme/styles/Base';
import {Neomorph} from 'react-native-neomorph-shadows';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CheckMPIN = props => {
  const CELL_COUNT = 4;
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props1, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={container.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: 10,
          justifyContent: 'center',
        }}>
        <View style={{justifyContent: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Avatar.Image
              size={100}
              source={require('../../../../assets/user1.png')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text style={[paraGray.darkpara]}>Enter Pin</Text>
          </View>
          <View
            style={{marginTop: 10, marginBottom: 20, paddingHorizontal: 20}}>
            <CodeField
              autoFocus
              ref={ref}
              {...props1}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={{}}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Neomorph
                  key={index}
                  // darkShadowColor={props1.darkTheme ? "#070707" : "#97A7C3"} // <- set this
                  // lightShadowColor={props1.darkTheme ? "#727272" : "white"}  // <- this
                  swapShadows
                  useArt // <- set this prop to use non-native shadow on ios
                  style={{
                    borderRadius: 100,
                    backgroundColor: COLORS.active,
                    width: 50,
                    height: 50,
                    marginLeft: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: 'black',
                    // ...include most of View/Layout styles
                  }}>
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </Neomorph>
              )}
            />
          </View>
        </View>
        <View style={{marginTop: 20, marginBottom: 30, paddingHorizontal: 15}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: COLORS.active,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 15,
              paddingBottom: 10,
              marginBottom: 10,
            }}
            onPress={() => props.navigation.navigate('Drawer')}>
            <Text style={paraGray.whitelarge}>Verify</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            justifyContent: 'center',
          }}
          onPress={() => props.navigation.navigate('ForgetMPIN')}>
          <AntDesign name="lock" size={20} color={COLORS.active} />
          <Text style={[paraGray.darkpara, {textAlign: 'center'}]}>
            Forgot PIN?
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default CheckMPIN;

const styles = StyleSheet.create({
  cell: {
    color: 'white',
    textAlign: 'center',
  },
});
