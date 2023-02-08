import React, {useState} from "react";
import { View, TouchableHighlight,Text, StyleSheet,TouchableOpacity } from "react-native";
import Suggestions from "../component/Suggestions";
import Questions from "../data/Questions.json"
function Goodsuggestions () {
  const [ isPress, setIsPress ] = useState(false);
   const [backgroundColor, setbackgroundColor] =useState('black')
   const [backgroundColor1, setbackgroundColor1] =useState('red')
   const [press, setpress] =useState(false)
   const data = Questions.questions;

  const onChangecolor =() => {
   
     if(!press){
      setbackgroundColor('red')
      setpress(true)
      
     
     }else{
      setbackgroundColor('black')
      setpress(false)
     }
  };
    return (
      <View>
       <Suggestions text="Royal Express ၏ဝန်ဆောင်မှုကိုနှစ်ခြိုက်စွာအသုံးပြုရခြင်း
၏အဓိကအကြောင်းအရင်းမှာ"/>
    <View style={styles.container1}>

{data.map((item,index) =>
(

<TouchableOpacity style={{backgroundColor: backgroundColor, padding: 10,alignItems:'center',height:60, borderRadius:30, margin:10}} onPress={onChangecolor}>
  <Text style={{color:'white', fontSize:20}}>{item.name}</Text>
</TouchableOpacity>







))}

</View>

    {/* <View style={styles.container2}>
      <TouchableOpacity style={{backgroundColor: backgroundColor, padding: 10,alignItems:'center',height:60, borderRadius:30}} onPress={onChangecolor}>
        <Text style={{color:'white', fontSize:20}}>ပစ္စည်းပို့ဆောင်မှုလျင်မြန်ချောမွေ့ခြင်း</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: backgroundColor, padding: 10,alignItems:'center',height:60, borderRadius:30}} onPress={onChangecolor}>
        <Text style={{color:'white', fontSize:20}}>ပစ္စည်းပို့ဆောင်မှုလျင်မြန်ချောမွေ့ခြင်း</Text>
      </TouchableOpacity>

      
    </View> */}
    {/* <View style={styles.container3}>
      <TouchableOpacity style={{backgroundColor: backgroundColor, padding: 10,alignItems:'center',height:60, borderRadius:30}} onPress={onChangecolor}>
        <Text style={{color:'white', fontSize:20}}>ပစ္စည်းပို့ဆောင်မှုလျင်မြန်ချောမွေ့ခြင်း</Text>
      </TouchableOpacity>



      
    </View> */}
              

      </View>
    )
}
const styles = StyleSheet.create({
  container1: {
    flexDirection:'row',
    flexWrap:'wrap',
    flex:1,
    justifyContent:'space-between',
    padding:10,

  },
  container2: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    marginTop:60,
  },
  container3: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    marginTop:60,
  },
  btnNormal: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 30,
    width: 100,
  }
});
export default Goodsuggestions;