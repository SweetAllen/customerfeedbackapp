// import React, {useState} from "react";
// import { View, TouchableHighlight,Text, StyleSheet,TouchableOpacity, TextInput, ScrollView,  KeyboardAvoidingView,
//   TouchableWithoutFeedback,Platform,Keyboard,SafeAreaView,StatusBar
// } from "react-native";
// import { Button } from "react-native-elements";
// import Suggestions from "../component/Suggestions";
// import Questions from "../data/Questions.json"
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// function Goodsuggestions (props) {
//   const [ isPress, setIsPress ] = useState(false);
//    const [backgroundColor, setbackgroundColor] =useState('black')
//    const [backgroundColor1, setbackgroundColor1] =useState('red')
//    const [press, setpress] =useState(false)
//    const [status, setstatus] =useState(false)
//    const [keywordsList,setkeywordsList] =useState([]);
//    const { container, selectedKeywordStyle, buttonStyle, textStyle } = styles;
//    const {name} =props
//    const data = Questions.questions;

//   //  const toggleKeyword = (keyword) => {
//   //   console.log(keyword)
//   //   // setkeywordsList([...keywordsList])
//   //   let list = keywordsList;
//   //   let index = -1;
//   //   if ((index = keywordsList.indexOf(keyword)) != -1) {
//   //     list.splice(index, 1);
//   //   } else {
//   //     list.push(keyword);
//   //   }
//   //   setkeywordsList([...keywordsList,list])
//   // };

//     return (
// <View>
//  <Suggestions text="Royal Express ၏ဝန်ဆောင်မှုကိုနှစ်ခြိုက်စွာအသုံးပြုရခြင်း
//  ၏အဓိကအကြောင်းအရင်းမှာ"/>

// {/* <ScrollView
// pagingEnabled
// showsHorizontalScrollIndicator={false}
// > */}
     
//      {/* <KeyboardAwareScrollView > */}

//      <View style={{padding:22}}>

//     {/* <View style={styles.container1}> */}

//     {/* {data.map((item,index) =>
// ( */}


//     <TouchableOpacity
//     style={buttonStyle}
//             // style={keywordsList.find((element) => element == item) ? selectedKeywordStyle : buttonStyle}
//             // onPress={() => toggleKeyword(item)}
//             // key={item.id}
//           >
//             <Text style={textStyle}>{name}</Text>
//           </TouchableOpacity>

// {/* ))} */}


// {/* </View> */}
// {/* 
      // <TextInput
      // placeholder="အခြား" 
      //   style={styles.input}
      // /> 
// {/* 
// <View style={styles.btnContainer}>
// <Button
//         title="ဆက်သွားရန်"
//         // onPress={() => navigation.push('MainRating')}
//         buttonStyle={{
//           backgroundColor: '#F41111',
//           borderWidth: 2,
//           borderColor: 'white',
//           borderRadius: 25,
//         }}
//         containerStyle={{
//           width: 180,
//           marginHorizontal: 10,
//           marginVertical: 10,
//         }}
//         titleStyle={{ fontWeight: 'bold' }}
//       />
   
// </View> */}
//       </View>

//       {/* </KeyboardAwareScrollView> */}
// {/* <ScrollView> */}


  
//   {/* </ScrollView>

//   </ScrollView> */}


//     {/* <View style={styles.container2}>
//       <TouchableOpacity style={{backgroundColor: backgroundColor, padding: 10,alignItems:'center',height:60, borderRadius:30}} onPress={onChangecolor}>
//         <Text style={{color:'white', fontSize:20}}>ပစ္စည်းပို့ဆောင်မှုလျင်မြန်ချောမွေ့ခြင်း</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={{backgroundColor: backgroundColor, padding: 10,alignItems:'center',height:60, borderRadius:30}} onPress={onChangecolor}>
//         <Text style={{color:'white', fontSize:20}}>ပစ္စည်းပို့ဆောင်မှုလျင်မြန်ချောမွေ့ခြင်း</Text>
//       </TouchableOpacity>

      
//     </View> */}
//     {/* <View style={styles.container3}>
//       <TouchableOpacity style={{backgroundColor: backgroundColor, padding: 10,alignItems:'center',height:60, borderRadius:30}} onPress={onChangecolor}>
//         <Text style={{color:'white', fontSize:20}}>ပစ္စည်းပို့ဆောင်မှုလျင်မြန်ချောမွေ့ခြင်း</Text>
//       </TouchableOpacity>



      
//     </View> */}
              

//       </View>
      
//     )
// }

// const styles = StyleSheet.create({
  // input: {
  //   height: 70,
  //   margin: 12,
  //   borderWidth: 1,
  //   padding: 10,
  //   marginBottom:40
  // },
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     flexWrap: "wrap",
//     paddingTop: 50,
//     flex:1,
//   },
//   textStyle: {
//     fontSize: 20,
//     padding: 8,
//     textAlign: "center",
//     color:"white",
//   },
//   buttonStyle: {
//     // width: "30%",
//     backgroundColor: "gray",
//     height:60, 
//     borderRadius:30, 
//     margin:10
//   },
//   selectedKeywordStyle: {
//     // width: "30%",
//     backgroundColor: "red",
//     height:60, 
//     borderRadius:30, 
//     margin:10
//   },

 
 
//   container1: {
//     flexDirection:'row',
//     flexWrap:'wrap',
//     flex:1,
//     justifyContent:'space-between',

//   },
//   inner: {
//     padding: 24,
//     flex: 1,
//     justifyContent: 'space-around',
//   },
//  btnContainer: {
//     backgroundColor: 'white',
//     marginTop: 12,
//     alignItems:'center'
//   },
//   // container1: {
//   //   flexDirection:'row',
//   //   flexWrap:'wrap',
//   //   flex:1,
//   //   justifyContent:'space-between',
//   //   padding:10,

//   // },
//   // container2: {
//   //   flex: 1,
//   //   flexDirection:'row',
//   //   justifyContent:'space-between',
//   //   padding:10,
//   //   marginTop:60,
//   // },
//   // container3: {
//   //   flex: 1,
//   //   flexDirection:'row',
//   //   justifyContent:'space-between',
//   //   padding:10,
//   //   marginTop:60,
//   // },
//   // btnNormal: {
//   //   borderColor: 'blue',
//   //   borderWidth: 1,
//   //   borderRadius: 10,
//   //   height: 30,
//   //   width: 100,
//   // },
//   // btnPress: {
//   //   borderColor: 'blue',
//   //   borderWidth: 1,
//   //   height: 30,
//   //   width: 100,
//   // }
// });
// export default Goodsuggestions;