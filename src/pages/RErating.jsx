import React, {useState} from "react";
import {AppRegistry, StyleSheet, Text, View, Image, Animated} from 'react-native';
import Mainquestions from "../component/Mainquestions";
import { Rating, AirbnbRating } from 'react-native-elements';
import verygood from '../assets/images/verygood.png'
import Goodsuggestions from "./Goodsuggestions";
function RErating({ navigation }) {
    const [ratingcount, setratingcount] = useState(0);
    const ratingCompleted=(rating)=> {
        console.log("Rating is: " + rating)
           setratingcount(rating)

      }
      const clapIcon = ratingcount === 5 ? <Image source={require("../assets/images/verygood.png")} style={styles.img} />
      :ratingcount === 4 ? <Image source={require("../assets/images/justlike.png")} style={styles.img} /> 
      :ratingcount === 3 ? <Image source={require("../assets/images/normal.png")} style={styles.img} />
      :ratingcount === 2 ? <Image source={require("../assets/images/notbad.png")} style={styles.img} />
       : <Image source={require("../assets/images/angry.png")} style={styles.img} />

    return (
     <View style={{backgroundColor:'white'}}>
        <Mainquestions mainquestion= "Royal Express ၏ ဝန်ဆောင်မှုအပေါ် မည်သို့ထင်မြင်ယူဆချက်ရှိပါသလဲ" />
       
         <View style={{alignItems:'center'}}>
         {clapIcon}

         </View>
        <Rating
  type='custom'
  ratingColor='#F41111'
  ratingBackgroundColor='#ffff'
  ratingCount={5}
  imageSize={50}
  onFinishRating={ratingCompleted}

  style={{ paddingVertical: 10 }}
/>

<Goodsuggestions/>
        {/* <AirbnbRating
  count={5}
  reviews={["Terrible", "Bad", "Meh", "OK",verygood ]}
  defaultRating={5}
  size={30}
/>   */}
   </View>
    )
}
const styles=StyleSheet.create({

 img:{
     width:100,
     height:100,
 },

});
export default RErating