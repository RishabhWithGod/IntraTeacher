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
import Entypo from 'react-native-vector-icons/Entypo';
import {Avatar, Paragraph, Switch} from 'react-native-paper';
import {COLORS} from '../../../theme/Colors';
import {btnStyles, container, paraGray} from '../../../theme/styles/Base';
import {Neomorph} from 'react-native-neomorph-shadows';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';

const CreateMPIN = props => {
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill(
    {value, cellCount: CELL_COUNT},
    {values, cellCounts: CELL_COUNT},
  );
  const [props1, getCellOnLayoutHandler] = useClearByFocusCell(
    {
      value,
      setValue,
    },
    {
      values,
      setValues,
    },
  );
  const [values, setValues] = useState('');

  const [enableMask, setEnableMask] = useState(true);
  const [enableMask1, setEnableMask1] = useState(true);
  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;

    if (symbol) {
      textChild = enableMask ? <Entypo name="dot-single" size={30} /> : symbol;
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Neomorph
        key={index}
        // darkShadowColor={props1.darkTheme ? "#070707" : "#97A7C3"} // <- set this
        // lightShadowColor={props1.darkTheme ? "#727272" : "white"}  // <- this
        swapShadows
        // inner // <- enable inner shadow
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
          style={[
            styles.cell,
            isFocused && styles.focusCell,
            paraGray.whitelarge,
          ]}
          onLayout={getCellOnLayoutHandler(index)}>
          {textChild}
        </Text>
      </Neomorph>
    );
  };
  const renderCell1 = ({index, symbol, isFocused}) => {
    let textChild1 = null;

    if (symbol) {
      textChild1 = enableMask1 ? (
        <Entypo name="dot-single" size={30} />
      ) : (
        symbol
      );
    } else if (isFocused) {
      textChild1 = <Cursor />;
    }

    return (
      <Neomorph
        key={index}
        swapShadows
        useArt
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
        }}>
        <Text
          key={index}
          style={[
            styles.cell,
            isFocused && styles.focusCell,
            paraGray.whitelarge,
          ]}
          onLayout={getCellOnLayoutHandler(index)}>
          {textChild1}
        </Text>
      </Neomorph>
    );
  };
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);

  const CreatePIN = async () => {
    setLoading(true);
    if ((value == '', values == '')) {
      alert('Please Enter PIN');
      setLoading(false);
    } else if ((value.length != 4, values.length != 4)) {
      alert('MPIN Should be 4digit');
      setLoading(false);
    } else if (value == values) {
      AsyncStorage.setItem('pin', value);
      AsyncStorage.setItem('toggle', 'true');
      props.navigation.navigate('MPINSet');
      setLoading(false);
    } else {
      alert('Please check MPIN');
      setLoading(false);
    }
  };
  return (
    <View style={container.container}>
      {loading == true && <Spinner visible={load} />}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: 10,
          justifyContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={[paraGray.parahome, {marginBottom: 10}]}>
            Create New PIN
          </Text>
          <Text style={[paraGray.darkpara]}>Enter the New PIN</Text>
        </View>
        <View style={{justifyContent: 'center', marginTop: 50}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={[paraGray.darkpara]}>New Pin</Text>
          </View>
          <View
            style={{marginTop: 10, marginBottom: 20, paddingHorizontal: 20}}>
            <CodeField
              autoFocus
              ref={ref}
              // {...props1}
              caretHidden={true}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              // rootStyle={{}}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={renderCell}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text style={[paraGray.darkpara]}>Retype Pin</Text>
          </View>
          <View
            style={{marginTop: 10, marginBottom: 20, paddingHorizontal: 20}}>
            <CodeField
              autoFocus
              ref={ref}
              // {...props1}
              caretHidden={true}
              value={values}
              onChangeText={setValues}
              cellCount={CELL_COUNT}
              // rootStyle={{}}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={renderCell1}
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
            onPress={CreatePIN}>
            <Text style={paraGray.whitelarge}>CREATE PIN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default CreateMPIN;

const styles = StyleSheet.create({
  cell: {
    color: 'white',
    textAlign: 'center',
  },
});
