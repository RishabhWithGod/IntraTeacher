// import component
import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

const StreamDropDown = () => {
  DropDownPicker.setListMode('SCROLLVIEW')
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    {label: 'FY', value: 'Faculty Name'},
    {label: 'SY', value: 'Name'},
    {label: 'TY', value: 'Names'},
  ])
  return (
    <View>
      <Text style={styles.labeltxt}>Stream</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder='Select Stream'
        multiple={true}
        min={0}
        max={5}
        searchable={true}
        // autoScroll={true}
        // dropDownDirection="TOP"
        style={{
          width: '90%',
          alignSelf: 'center',
          backgroundColor: '#E5E5E5',
          borderColor: '#E5E5E5',
          marginTop: 10,
        }}
        textStyle={{
          fontSize: 13,
          fontFamily: 'Montserrat-Regular',
        }}
        dropDownContainerStyle={{
          width: '90%',
          alignSelf: 'center',
          backgroundColor: '#E5E5E5',
          borderColor: '#E5E5E5',
        }}
      />
    </View>
  )
}
export default StreamDropDown

const styles = StyleSheet.create({
  labeltxt: {
    color: '#000000',
    marginLeft: 15,
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
})
