import React, {useState} from "react";
import {AppRegistry, StyleSheet, Text, View, Image, Animated,TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';
import Mainquestions from "../component/Mainquestions";
import { Rating, AirbnbRating, Button } from 'react-native-elements';
import verygood from '../assets/images/verygood.png'
import Badsuggestions from "./Badsuggestions";
import Continuebtn from "../component/Continuebtn";
import logo from '../assets/images/logo.png'
import Questions from "../data/Questions.json"
import Suggestions from "../component/Suggestions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


function RErating({ navigation,route }) {
    const [ratingcount, setratingcount] = useState(1);
    const good = Questions.questions;
    const bad = Questions.badquestions;

    const [keywordsList,setkeywordsList] =useState([]);
    const [reResult,setReresult]=useState([]);
    const { container, selectedKeywordStyle, buttonStyle, textStyle } = styles;
    const ratingCompleted=(rating)=> {
        console.log("Rating is: " + rating)
           setratingcount(rating)

      }

         const toggleKeyword = (keyword) => {

    let list = keywordsList;
    let index = -1;
    if ((index = keywordsList.indexOf(keyword)) != -1) {
      list.splice(index, 1);
    } else {
      list.push(keyword);
    }
    setkeywordsList([...keywordsList])
  };


    

    const onSubmit=  (e) =>{

      e.preventDefault();

      navigation.navigate('Counterrating', {
        "reratingcount": ratingcount,
        "reratingdata": keywordsList,
        "loginbranch": route.params.loginbranch,

      });
           }
 const reactionicons = ratingcount === 5 ? <View><Image source={require("../assets/images/verygood.png")} style={styles.img} />
      <Text style={styles.reactionlable}>အရမ်းကောင်းပါတယ်</Text>
      </View>
      :ratingcount === 4 ? <View><Image source={require("../assets/images/justlike.png")} style={styles.img} /> 
      <Text style={styles.reactionlable}>ကောင်းပါတယ်</Text>
      </View>
      :ratingcount === 3 ? <View><Image source={require("../assets/images/normal.png")} style={styles.img} /> 
      <Text style={styles.reactionlable}>အသင့်အတင့်</Text>
      </View>
      :ratingcount === 2 ? <View><Image source={require("../assets/images/notbad.png")} style={styles.img} /> 
      <Text style={styles.reactionlable}>မကောင်းပါ</Text>
      </View>
      :<View><Image source={require("../assets/images/angry.png")} style={styles.img} /> 
       <Text style={styles.reactionlable}>လုံး၀မကောင်းပါ</Text>
       </View>
        const suggestion = ratingcount >= 3 ? 
       <View>

       <Suggestions text="Royal Express ၏ဝန်ဆောင်မှုကိုနှစ်ခြိုက်စွာအသုံးပြုရခြင်း
       ၏အဓိကအကြောင်းအရင်းမှာ"/>
      <KeyboardAwareScrollView>
<View style={{padding:22}}>
       <View style={styles.container1}>
 { good.map((item,index) =>
(
    <TouchableOpacity
            style={keywordsList.find((element) => element == item) ? selectedKeywordStyle : buttonStyle}
            onPress={() => toggleKeyword(item)}
            key={item.id}
          >

            <Text style={textStyle}>{item.name}</Text>
          </TouchableOpacity>
       ))}
       </View>
       <TextInput
      placeholder="အခြား" 
        style={styles.input}
      /> 
      </View>
             </KeyboardAwareScrollView>

       </View>
        :
        <View>
 
        <Suggestions text="Royal Express ၏ဝန်ဆောင်မှုကိုနှစ်ခြိုက်စွာအသုံးပြုရခြင်း
  ၏အဓိကအကြောင်းအရင်းမှာ"/>
         <KeyboardAwareScrollView>
 
 <View style={{padding:22}}>
        <View style={styles.container1}>
        { bad.map((item,index) =>
     (
         // <View style={styles.container1}>
         <TouchableOpacity
         // style={buttonStyle}
                 style={keywordsList.find((element) => element == item) ? selectedKeywordStyle : buttonStyle}
                 onPress={() => toggleKeyword(item)}
                 key={item.id}
               >

                 <Text style={textStyle}>{item.name}</Text>
                 
               </TouchableOpacity>
           //  <Goodsuggestions name={item.name}/>
           //  </View>
            ))}
            </View>
       <TextInput
      placeholder="အခြား" 
        style={styles.input}
      /> 
      </View>
             </KeyboardAwareScrollView>

       </View>
 


    return (
                 <ScrollView style={{backgroundColor:'white',flex: 1}}>
                    
        <Mainquestions mainquestion= "Royal Express ၏ ဝန်ဆောင်မှုအပေါ် မည်သို့ထင်မြင်ယူဆချက်ရှိပါသလဲ" />
       
         <View style={{alignItems:'center'}}>
         {reactionicons}

         </View>
        <Rating
        type="custom"
  ratingColor='#F41111'
  ratingBackgroundColor='#ffff'
  ratingCount={5}
  imageSize={70}
  startingValue={1}
  minValue={1}
  onFinishRating={ratingCompleted}
  style={{ paddingVertical: 10 }}
  defaultRating={1}

/>
         {suggestion}




        {/* <AirbnbRating
  count={5}
  reviews={["Terrible", "Bad", "Meh", "OK",verygood ]}
  defaultRating={5}
  size={30}
/>   */}
<Continuebtn 
 onPress={onSubmit}  

  // onPress={() => navigation.push('Counterrating')}  
 />

   </ScrollView>
    )
}
const styles=StyleSheet.create({

 img:{
     width:130,
     height:130,
 },
 reactionlable:{
    fontSize:20,
    fontWeight:'900'
 },

 container1: {
  flexDirection:'row',
    flexWrap:'wrap',
    flex:1,
    justifyContent:'space-between',

  },
  buttonStyle: {
    // width: "30%",
    backgroundColor: "gray",
    height:60, 
    borderRadius:30, 
    margin:10
  },
  selectedKeywordStyle: {
    // width: "30%",
    backgroundColor: "red",
    height:60, 
    borderRadius:30, 
    margin:10
  },
  textStyle: {
    fontSize: 20,
    padding: 8,
    textAlign: "center",
    color:"white",
  },
  input: {
    height: 70,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom:40
    },
  
});
export default RErating