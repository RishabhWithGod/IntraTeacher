import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableHighlight, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import data from './cor/data';
import SingleSelect from '../Lectures/SingleSelect';

export default class TimeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
          carouselItems: [{ title: "10:00 Am" },
          
          { title: "11:00 Am" },
          { title: "12:00 Am" },
          { title: "1:00 Am" }, 
          { title: "2:00 Am" }
        ]
    }
  }
  _renderItem({ item, index }) {
    return (
      <View  >
         <SingleSelect/>
        {/* <Text style={styles.chipsItem}>{item.title}</Text> */}
      </View>)
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableHighlight onPress={() => { this.carousel._snapToItem(this.state.activeIndex - 1) }}>
          <FontAwesome name="angle-left" size={40} color="#000000" />
        </TouchableHighlight>
        <View>
          <Carousel
            ref={ref => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={250}
            itemWidth={250}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({ activeIndex: index })}
           
         >
            
          </Carousel>
        </View>
        <TouchableHighlight onPress={() => { this.carousel._snapToItem(this.state.activeIndex + 1) }}>
          <FontAwesome name="angle-right" size={40} color="#000000" />
        </TouchableHighlight>

      </SafeAreaView>);
  }
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:'center',
    marginTop: 15,
    // paddingHorizontal:25,
    // justifyContent: 'space-between',


  },
  chipsItem: {
        flexDirection:"row",
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor: "#D3D3D3",
        // borderRadius:20,
        padding:8,
        paddingHorizontal:80, 
        marginHorizontal:10,
        // width:"50%",
        
      },
});
