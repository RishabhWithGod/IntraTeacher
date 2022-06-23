
// ---------------ScreenShot & Image to Pdf------------------
import React, { useCallback, useState, useRef } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  RefreshControl,
} from 'react-native';


const Notification = () => {

  // -------------screenShot--------------------
  const full = useRef();
  const [preview, setPreview] = useState(null);
  const [itemsCount, setItemsCount] = useState(10);
  const [refreshing, setRefreshing] = useState(false);

  const onCapture = useCallback(() => {
    full.current.capture().then(uri => setPreview({ uri }));
    myAsyncPDFFunction();
  }, []);

  // --------------------Image to Pdf---------------------
  const myAsyncPDFFunction = async () => {
    try {
      const options = {
        imagePaths:['/path/to/image1.png','/path/to/image2.png'],
        name:'PDFName',
        // maxSize: { // optional maximum image dimension - larger images will be resized
        //   width: 900,
        //   height: Math.round(deviceHeight() / deviceWidth() * 900),
        // },
        quality: .7, // optional compression paramter
        targetPathRN: "/storage/emulated/0/Download/", // only for android version 9 and lower
        //for versions higher than 9 it is stored in (Download/img-to-pdf/)
      };
      const pdf = await RNImageToPdf.createPDFbyImages(options);
      
      console.log(pdf.filePath);
    } catch(e) {
      console.log(e);
    }
  }
  
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.root}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            setTimeout(() => {
              setItemsCount(itemsCount + 10);
              setRefreshing(false);
            }, 5000);
          }}
        />
      }
    >
      <SafeAreaView>
        <ViewShot ref={full} style={styles.container}>
          <Btn onPress={onCapture} label="Shoot Me" />

          <Image
            fadeDuration={0}
            resizeMode="contain"
            style={styles.previewImage}
            source={preview}
          />

          {/* {Array(itemsCount)
            .fill(null)
            .map((_, index) => ({
              key: index,
              text: `${index + 1}`,
              color: `hsl(${(index * 13) % 360}, 50%, 80%)`,
            }))
            .map(({ key, text, color }) => {
              return ( */}
                <View style={styles.item} >
                  <Text style={styles.itemText}>jhh</Text>
                </View>
                
              
            {/* })} */}
        </ViewShot>
      </SafeAreaView>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  root: {
    paddingVertical: 20,
  },
  content: {
    backgroundColor: '#fff',
  },
  item: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 22,
    color: '#666',
  },
  previewImage: {
    height: 200,
    backgroundColor: 'black',
  },
});

Notification.navigationProps = {
  title: 'Viewshoot',
};

export default Notification;


// import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import RNViewShot from "react-native-view-shot";


// const Notification = () => {
//   // const {name, bookname, stream, date, rdate} = props.route.params,
//   const onImageLoad = () => {
//   RNViewShot.takeSnapshot(viewRef, {
//     format: "jpeg",
//     quality: 0.8
//   })
  
//   .then(
//     uri => console.log("Image saved to", uri),

//     error => console.error("Oops, snapshot failed", error)
//   );
//   }
  
//  return(
//       <View>
//         <TouchableHighlight onPress={onImageLoad}>
//           <Text>Create PDF</Text>
//         </TouchableHighlight>
//       </View>
//     )
  
// }
// export default Notification


// // ----------------AddModal------------------

// import React, { useState } from "react";
// import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

// const Notification = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };
// export default Notification;
// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }
// });

//----------Search filter-------------
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
// import SearchInput, { createFilter } from 'react-native-search-filter';

// const Notification = (props) => {

//   const emails = [
//     { id: '1', name: 'Vikas Yadav', stream: 'FYBCOM' },
//     { id: '2', name: 'Vikas Gupta', stream: 'TYBCOM' },
//   ]

//   const KEYS_TO_FILTERS = ['name', 'stream'];

//   const [state, setState] = useState({ searchTerm: '' });

//   const filteredEmails = emails.filter(createFilter(state.searchTerm, KEYS_TO_FILTERS))

//   const searchUpdated = (term) => {
//     setState({ searchTerm: term })
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.search}>

//         <View
//           style={{
//             flexDirection: "row",
//             alignbooks: "center",
//             backgroundColor: "#FFFFFF",
//             width: "100%",
//             height: 50,
//             borderColor: "#D3D3D3",
//             paddingHorizontal: 0,
//             borderWidth: 2,
//             marginTop: 15,
//             borderRadius: 10,

//           }}>

//           <TextInput
//             placeholder="Search by Names./Contact number"
//             placeholderTextColor="#808080"
//             onChangeText={(term) => { searchUpdated(term) }}
//             style={{
//               marginLeft: 2,
//               marginTop: 2,
//               backgroundColor: "#FFFFFF",
//               width: "90%",
//               height: 40,
//               fontSize: 12,
//               fontFamily: 'Montserrat-Regular',
//             }}
//           />
//           <Feather style={{ marginTop: 6, }} name="search" size={29} color="#000000" />
//         </View>
//       </View>

//       <ScrollView>
//         {filteredEmails.map((data, index) => {
//           return (
//             <View>
//               <TouchableOpacity key={index} style={{
//                 flexDirection: "row",
//                 alignbooks: "center",
//                 // backgroundColor: "#D3D3D3",
//                 width: "90%",
//                 height: 50,
//                 // borderColor: "#D3D3D3",
//                 alignSelf: "center",
//                 // borderWidth: 2,
//                 marginTop: 30,
//                 borderRadius: 5,
//                 justifyContent: 'space-between',

//               }}
//                 onPress={() => { props.navigation.navigate('BookDetail', { name: data.name, stream: data.stream }) }}
//               >
//                 <Text style={{
//                   color: '#000000',
//                   fontSize: 18,
//                   fontFamily: 'Montserrat-Regular',

//                 }}>{data.name}</Text>
//                 <Text style={{
//                   color: '#000000',
//                   fontSize: 18,
//                   fontFamily: 'Montserrat-Regular',

//                 }}>{data.stream}</Text>
//               </TouchableOpacity>
//             </View>
//           )
//         })}
//       </ScrollView>
//     </View>
//   );

// }
// export default Notification;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'flex-start'
//   },
//   search: {
//     height: 60,
//     width: "100%",
//     flexDirection: "row",
//     alignbooks: "center",
//     paddingHorizontal: 15,
//     justifyContent: "space-between",
//     borderWidth: 0,
//     borderColor: "#E4E4E4",

//   },
//   emailItem: {
//     borderBottomWidth: 0.5,
//     borderColor: 'rgba(0,0,0,0.3)',
//     padding: 10
//   },
//   emailstream: {
//     color: 'rgba(0,0,0,0.5)'
//   },
//   searchInput: {
//     padding: 10,
//     borderColor: '#CCC',
//     borderWidth: 1
//   }
// });

// ----------Add more View------------------

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   TouchableOpacity,
//   Image,
//   Animated,
//   ScrollView,
//   StyleSheet,
//   View,
//   Text,
//   TextInput
//  } from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AddmoreOptions from './MCQs/AddmoreOptions';

// export default class Notification extends Component {

//   constructor() {
//     super();

//     this.state = { valueArray: [], disabled: false }
//     this.index = 2;
//     this.animatedValue = new Animated.Value(0);
//   }

//   addMore = () => {
//     this.animatedValue.setValue(0);
//     let newlyAddedValue = { index: this.index }
//     this.setState({ disabled: true, valueArray: [...this.state.valueArray, newlyAddedValue] }, () => {
//       Animated.timing(
//         this.animatedValue,
//         {
//           toValue: 1,
//           duration: 500,
//           useNativeDriver: true
//         }
//       ).start(() => {
//          this.index = this.index + 1;
//         this.setState({ disabled: false });
//       });
//     });
//   }

//   render() {
//     const animationValue = this.animatedValue.interpolate(
//       {
//         inputRange: [0, 1],
//         outputRange: [-59, 0]
//       });

//     let newArray = this.state.valueArray.map((item, key) => {
//       if ((key) == this.index) {
//         return (
//           <Animated.View key={key} >
//             <Text style={styles.headerText}>Row {item.index}</Text>
//             <TextInput
//                 placeholder="ENTER QUESTION HERE"
//                 placeholderTextColor="#808080"
//                 style={{
//                   marginLeft: 0,
//                   backgroundColor: "#FFFFFF",
//                   width: "90%",
//                   height: 40,
//                   fontSize:13,
//                   fontFamily: 'Montserrat-Regular',
//                 }}
//               />
//           </Animated.View>
//         );
//       }
//       else {
//         return (
//           <View key={key} >
//             <Text style={styles.headerText}>Question :- {item.index}

//             </Text>
//             <TextInput
//                 placeholder="ENTER QUESTION HERE"
//                 placeholderTextColor="#808080"
//                 style={{
//                   marginLeft: 0,
//                   backgroundColor: "#FFFFFF",
//                   width: "90%",
//                   height: 40,
//                   fontSize:13,
//                   fontFamily: 'Montserrat-Regular',
//                 }}
//               />
//               <AddmoreOptions/>
//           </View>
//         );
//       }
//     });

//     return (
//       <ScrollView>
//       <View style={styles.container} >

//           <View style={{ flex: 1, padding: 4 }}>
//             {
//               newArray
//             }
//           </View>

//         <TouchableOpacity style={{
//               flexDirection: "row",
//               alignItems: "center",
//               backgroundColor: "#E5E5E5",
//               width: "80%",
//               height: 50,
//               borderColor: "#E5E5E5",
//               alignSelf: "center",
//               borderWidth: 2,
//               marginTop: "10%",
//               marginBottom: 20,
//               bottom: 0,
//               borderRadius: 5,
//               justifyContent: 'center',
//               // elevation: 3,

//             }}
//               activeOpacity={0.8}
//               disabled={this.state.disabled}
//               onPress={this.addMore}
//             >
//              <Text style={{
//                 color: '#000000',
//                 fontSize:18,
//             fontFamily: 'Montserrat-SemiBold',

//               }}>ADD More Questions
//               <MaterialCommunityIcons
//                 name="plus"
//                 size={20}
//                 color="#000000"
//               />
//               </Text>

//             </TouchableOpacity>

//       </View>
//       </ScrollView>
//     );

//   }
// }

// const styles = StyleSheet.create(
//   {
//     container: {
//       flex: 1,
//     },
//     viewHolder: {
//       height: 55,
//       backgroundColor: '#000000',
//       justifyContent: 'center',
//       alignItems: 'center',
//       margin: 4
//     },
//     headerText: {
//       color: '#000000',
//       fontSize: 25
//     },
//     buttonDesign: {
//       position: 'absolute',
//       right: 25,
//       bottom: 25,
//       borderRadius: 30,
//       width: 60,
//       height: 60,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     buttonImage: {
//       resizeMode: 'contain',
//       width: '100%',
//     }
//   });

// -----------Table View----------------
// import React, { Component } from 'react';
// import { StyleSheet, View, ScrollView } from 'react-native';
// import { Table, TableWrapper, Row } from 'react-native-table-component';

// export default class Notification extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tableHead: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9'],
//       widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200]
//     }
//   }

//   render() {
//     const state = this.state;
//     const tableData = [];
//     for (let i = 0; i < 30; i += 1) {
//       const rowData = [];
//       for (let j = 0; j < 9; j += 1) {
//         rowData.push(`${i}${j}`);
//       }
//       tableData.push(rowData);
//     }

//     return (
//       <View style={styles.container}>
//         <ScrollView horizontal={true}>
//           <View>
//             <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
//               <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
//             </Table>
//             <ScrollView style={styles.dataWrapper}>
//               <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
//                 {
//                   tableData.map((rowData, index) => (
//                     <Row
//                       key={index}
//                       data={rowData}
//                       widthArr={state.widthArr}
//                       style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
//                       textStyle={styles.text}
//                     />
//                   ))
//                 }
//               </Table>
//             </ScrollView>
//           </View>
//         </ScrollView>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//   header: { height: 50, backgroundColor: '#537791' },
//   text: { textAlign: 'center', fontWeight: '100' },
//   dataWrapper: { marginTop: -1 },
//   row: { height: 40, backgroundColor: '#E7E6E1' }
// });

// --------------------------------------

// import React from 'react';
// import { StyleSheet, Text, Image, View, SafeAreaView, TouchableHighlight, TouchableOpacity } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// // import data from './cor/data';

// export default class Notification extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//           carouselItems: [{ title: "10:00 Am" },

//           { title: "11:00 Am" },
//           { title: "12:00 Am" },
//           { title: "1:00 Am" },
//           { title: "2:00 Am" }
//         ]
//     }
//   }
//   _renderItem({ item, index }) {
//     return (
//       <View  style={styles.chipsItem}>
//         <Text>{item.title}</Text>
//         {/* <Text>{item.body}</Text> */}
//       </View>)
//   }
//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <TouchableHighlight onPress={() => { this.carousel._snapToItem(this.state.activeIndex - 1) }}>
//           <FontAwesome name="angle-left" size={40} color="#000000" />
//         </TouchableHighlight>
//         <View>
//           <Carousel
//             ref={ref => this.carousel = ref}
//             data={this.state.carouselItems}
//             sliderWidth={250}
//             itemWidth={250}
//             renderItem={this._renderItem}
//             onSnapToItem={index => this.setState({ activeIndex: index })}

//          >

//           </Carousel>
//         </View>
//         <TouchableHighlight onPress={() => { this.carousel._snapToItem(this.state.activeIndex + 1) }}>
//           <FontAwesome name="angle-right" size={40} color="#000000" />
//         </TouchableHighlight>

//       </SafeAreaView>);
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf:'center',
//     // paddingHorizontal:25,
//     // justifyContent: 'space-between',

//   },
//   chipsItem: {
//         flexDirection:"row",
//         backgroundColor:'#fff',
//         // borderRadius:20,
//         padding:8,
//         paddingHorizontal:80,
//         marginHorizontal:10,
//         // width:"50%",
//       },
// });

// =-=----------------------------
// import React, { useEffect } from 'react';
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   ScrollView,
//   Animated,
//   Image,
//   TouchableOpacity,
//   Dimensions,
//   Platform,
// } from "react-native";

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Fontisto from 'react-native-vector-icons/Fontisto';

// const Notification = () => {

//   const initialMapState = {

//     categories: [
//       {
//         name: 'Fastfood Center',
//         icon: <MaterialCommunityIcons style={styles.chipsIcon} name="food-fork-drink" size={18} />,
//       },
//       {
//         name: 'Restaurant',
//         icon: <Ionicons name="ios-restaurant" style={styles.chipsIcon} size={18} />,
//       },
//       {
//         name: 'Dineouts',
//         icon: <Ionicons name="md-restaurant" style={styles.chipsIcon} size={18} />,
//       },
//       {
//         name: 'Snacks Corner',
//         icon: <MaterialCommunityIcons name="food" style={styles.chipsIcon} size={18} />,
//       },
//       {
//         name: 'Hotel',
//         icon: <Fontisto name="hotel" style={styles.chipsIcon} size={15} />,
//       },
//   ],

//   };

//   const [state, setState] = React.useState(initialMapState);

//   return (
//     <View style={styles.container}>

//       <ScrollView
//         horizontal
//         scrollEventThrottle={1}
//         showsHorizontalScrollIndicator={false}
//         height={50}
//         style={styles.chipsScrollView}
//         contentInset={{ // iOS only
//           top:0,
//           left:0,
//           bottom:0,
//           right:20
//         }}
//         contentContainerStyle={{
//           paddingRight: Platform.OS === 'android' ? 20 : 0
//         }}
//       >
//         {state.categories.map((category, index) => (
//           <TouchableOpacity key={index} style={styles.chipsItem} >
//             {category.icon}
//             <Text>{category.name}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//     </View>
//   );
// };

// export default Notification;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   chipsScrollView: {
//     position:'absolute',
//     top:Platform.OS === 'ios' ? 90 : 80,
//     paddingHorizontal:10
//   },
//   chipsIcon: {
//     marginRight: 5,
//   },
//   chipsItem: {
//     flexDirection:"row",
//     backgroundColor:'#fff',
//     borderRadius:20,
//     padding:8,
//     paddingHorizontal:20,
//     marginHorizontal:10,
//     height:35,
//     shadowColor: '#ccc',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.5,
//     shadowRadius: 5,
//     elevation: 10,
//   },

//   cardImage: {
//     flex: 3,
//     width: "100%",
//     height: "100%",
//     alignSelf: "center",
//   },
//   textContent: {
//     flex: 2,
//     padding: 10,
//   },
//   cardtitle: {
//     fontSize: 12,
//     // marginTop: 5,
//     fontWeight: "bold",
//   },
//   cardDescription: {
//     fontSize: 12,
//     color: "#444",
//   },
//   markerWrap: {
//     alignItems: "center",
//     justifyContent: "center",
//     width:50,
//     height:50,
//   },
//   marker: {
//     width: 30,
//     height: 30,
//   },
//   button: {
//     alignItems: 'center',
//     marginTop: 5
//   },
//   signIn: {
//       width: '100%',
//       padding:5,
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 3
//   },
//   textSign: {
//       fontSize: 14,
//       fontWeight: 'bold'
//   }
// });

/// ----------------multiple selected button-----------------
/*
 * @Author: Young
 * DSHARP
 * @flow
 * @Date: 2018-04-07 10:51:10
 * @Last Modified by: Young
 * @Last Modified time: 2018-08-31 14:03:18
 */
// import React, { Component } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import _ from "lodash";
// import { SelectMultipleButton, SelectMultipleGroupButton } from 'react-native-selectmultiple-button';

// const ios_blue = "#D3D3D3";
// const multipleData = ["School", "College", "Degree",];
// const multiplesData = ["1st", "2nd", "3rd",];
// const radioData = ["Female", "Male", "Other", "Rather not say"];

// export default class SimpleButton extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       multipleSelectedData: [],
//       multipleSelectedDataLimited: []
//     };
//   }

//   render() {
//     return (
//       <View>
//         <Text style={{ color: '#000000', marginLeft: 15, marginTop: 20, fontSize: 20 }}>
//           Faculty
//         </Text>
//         {/* <Text style={{ color: ios_blue, marginLeft: 10 }}>
//           I like {_.join(this.state.multipleSelectedDataLimited, ", ")}
//         </Text> */}
//         <View
//           style={{
//             flexWrap: "wrap",
//             flexDirection: "row",
//             paddingHorizontal: 15,
//             justifyContent: "space-between",
//           }}
//         >
//           {multipleData.map(interest => (
//             <SelectMultipleButton
//               key={interest}
//               buttonViewStyle={{
//                 marginTop: 15,
//                 borderRadius: 8,
//                 height: 40,
//                 width: "30%",
//                 justifyContent: "center",
//                 borderWidth: 0,
//               }}
//               textStyle={{
//                 fontSize: 15
//               }}
//               highLightStyle={{
//                 borderColor: "gray",
//                 backgroundColor: "rgba(229, 229, 229, 0.35)",
//                 textColor: "#000000",
//                 borderTintColor: ios_blue,
//                 backgroundTintColor: ios_blue,
//                 textTintColor: "#000000"
//               }}
//               value={interest}
//               selected={this.state.multipleSelectedDataLimited.includes(
//                 interest
//               )}
//               singleTap={valueTap =>
//                 this._singleTapMultipleSelectedButtons_limited(interest)
//               }
//             />
//           ))}
//         </View>

//         <Text style={{ color: '#000000', marginLeft: 15, marginTop: 10, fontSize: 20 }}>
//           Standard
//         </Text>
//         {/* <Text style={{ color: ios_blue, marginLeft: 10 }}>
//           I like {_.join(this.state.multipleSelectedDataLimited, ", ")}
//         </Text> */}
//         <View
//           style={{
//             flexWrap: "wrap",
//             flexDirection: "row",
//             paddingHorizontal: 15,
//             justifyContent: "space-between",
//           }}
//         >
//           {multiplesData.map(interest => (
//             <SelectMultipleButton
//               key={interest}
//               buttonViewStyle={{
//                 marginTop: 15,
//                 borderRadius: 8,
//                 height: 40,
//                 width: "30%",
//                 justifyContent: "center",
//                 borderWidth: 0,
//               }}
//               textStyle={{
//                 fontSize: 15
//               }}
//               highLightStyle={{
//                 borderColor: "gray",
//                 backgroundColor: "rgba(229, 229, 229, 0.35)",
//                 textColor: "#000000",

//                 borderTintColor: ios_blue,
//                 backgroundTintColor: ios_blue,
//                 textTintColor: "#000000"
//               }}
//               value={interest}
//               selected={this.state.multipleSelectedDataLimited.includes(
//                 interest
//               )}
//               singleTap={valueTap =>
//                 this._singleTapMultipleSelectedButtons_limited(interest)
//               }
//             />
//           ))}
//         </View>

//       </View>
//     );
//   }

//   _singleTapRadioSelectedButtons(valueTap, gender) {
//     // Alert.alert('', valueTap)
//     this.setState({
//       radioSelectedData: gender
//     });
//   }

//   _singleTapMultipleSelectedButtons(interest) {
//     if (this.state.multipleSelectedData.includes(interest)) {
//       _.remove(this.state.multipleSelectedData, ele => {
//         return ele === interest;
//       });
//     } else {
//       this.state.multipleSelectedData.push(interest);
//     }

//     this.setState({
//       multipleSelectedData: this.state.multipleSelectedData
//     });
//   }

//   _singleTapMultipleSelectedButtons_limited(interest) {
//     if (this.state.multipleSelectedDataLimited.includes(interest)) {
//       _.remove(this.state.multipleSelectedDataLimited, ele => {
//         return ele === interest;
//       });
//     } else {
//       if (this.state.multipleSelectedDataLimited)
//         this.state.multipleSelectedDataLimited.push(interest);
//       // ----------------------For Length----------------------------
//       // if (this.state.multipleSelectedDataLimited.length < 3)
//       // this.state.multipleSelectedDataLimited.push(interest);
//     }

//     this.setState({
//       multipleSelectedDataLimited: this.state.multipleSelectedDataLimited
//     });
//   }
// }

// const styles = StyleSheet.create({
//   welcome: {
//     margin: 10,
//     marginTop: 30,
//     color: "gray"
//   }
// });

// ---------------------Time Coursel-------------------------
// import React from "react";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

// const getItems = () =>
//   Array(20)
//     .fill(0)
//     .map((_, ind) => ({ id: `element-${ind}` }));

// function Notification() {
//   const [items, setItems] = React.useState(getItems);
//   const [selected, setSelected] = React.useState([]);
//   const [position, setPosition] = React.useState(0);

//   const isItemSelected = (id) => !!selected.find((el) => el === id);

//   const handleClick = (id) => ({ getItemById, scrollToItem }) => {
//     const itemSelected = isItemSelected(id)

//     setSelected((currentSelected) =>
//       itemSelected
//         ? currentSelected.filter((el) => el !== id)
//         : currentSelected.concat(id)
//     );
//   }

//   return (
//         <ScrollMenu
//           LeftArrow={LeftArrow}
//           RightArrow={RightArrow}
//         >
//           {items.map(({ id }) => (
//             <Card
//               itemId={id} // NOTE: itemId is required for track items
//               title={id}
//               key={id}
//               onClick={handleClick(id)}
//               selected={isItemSelected(id)}
//             />)
//           )}

//         </ScrollMenu>
//   );
// }

// function LeftArrow() {
//   const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

//   return (
//     <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
//       Left
//     </Arrow>
//   );
// }

// function RightArrow() {
//   const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

//   return (
//     <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
//       Right
//     </Arrow>
//   );
// }

// function Card({
//   onClick,
//   selected,
//   title,
//   itemId
// }) {
//   const visibility = React.useContext(VisibilityContext)

//   return (
//     <div
//       onClick={() => onClick(visibility)}
//       style={{
//         width: "160px",
//       }}
//       tabIndex={0}
//     >
//       <div className="card">
//         <div>{title}</div>
//         <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
//         <div>selected: {JSON.stringify(!!selected)}</div>
//       </div>
//       <div
//         style={{
//           height: "200px",
//         }}
//       />
//     </div>
//   );
// }

// export default Notification;
