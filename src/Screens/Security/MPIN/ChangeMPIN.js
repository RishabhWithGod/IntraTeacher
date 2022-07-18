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
import {COLORS} from '../../../theme/Colors';
import {btnStyles, container, paraGray} from '../../../theme/styles/Base';
import {Neomorph} from 'react-native-neomorph-shadows';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';

const ChangeMPIN = props => {
  const CELL_COUNT = 4;
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [value, setValue] = useState('');
  const [values, setValues] = useState('');
  const [value1, setValue1] = useState('');
  const ref = useBlurOnFulfill(
    {value, cellCount: CELL_COUNT},
    {values, cellCounts: CELL_COUNT},
    {value1, cellCounts: CELL_COUNT},
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
  const [enableMask, setEnableMask] = useState(true);
  const [enableMasks, setEnableMasks] = useState(true);
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
  const renderCells = ({index, symbol, isFocused}) => {
    let textChilds = null;

    if (symbol) {
      textChilds = enableMasks ? (
        <Entypo name="dot-single" size={30} />
      ) : (
        symbol
      );
    } else if (isFocused) {
      textChilds = <Cursor />;
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
          {textChilds}
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

  const ChangePIN = async () => {
    setLoading(true);
    const PIN = await AsyncStorage.getItem('pin');
    if ((value == '', values == '', value1 == '')) {
      alert('Please Enter PIN');
      setLoading(false);
    } else if ((value.length != 4, values.length != 4, value1.length != 4)) {
      alert('MPIN Should be 4digit');
      setLoading(false);
    } else if (value == PIN) {
      if (values == value) {
        alert('New pin is not same as Old pin');
        setLoading(false);
      } else if (values == value1) {
        await AsyncStorage.removeItem('pin');
        AsyncStorage.setItem('pin', value1);
        props.navigation.navigate('MPINSet');
        setLoading(false);
      } else {
        alert('Please check MPIN');
        setLoading(false);
      }
    } else {
      alert('InCorrect MPIN');
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
        <View style={{justifyContent: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={[paraGray.darkpara]}>Old Pin</Text>
          </View>
          <View
            style={{marginTop: 10, marginBottom: 20, paddingHorizontal: 20}}>
            <CodeField
              //  onfullFill={() => alert('hi')}
              autoFocus
              ref={ref}
              // {...props1}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={{}}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={renderCell}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={[paraGray.darkpara]}>New Pin</Text>
          </View>
          <View
            style={{marginTop: 10, marginBottom: 20, paddingHorizontal: 20}}>
            <CodeField
              autoFocus
              ref={ref}
              // {...props1}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={values}
              onChangeText={setValues}
              cellCount={CELL_COUNT}
              rootStyle={{}}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={renderCells}
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
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value1}
              onChangeText={setValue1}
              cellCount={CELL_COUNT}
              rootStyle={{}}
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
            onPress={ChangePIN}>
            <Text style={paraGray.whitelarge}>CHANGE PIN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default ChangeMPIN;

const styles = StyleSheet.create({
  cell: {
    color: 'white',
    textAlign: 'center',
  },
});
