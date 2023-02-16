import React, {useState} from "react";
import {AppRegistry, StyleSheet, Text, View, Image, Animated} from 'react-native';
import Mainquestions from "../component/Mainquestions";
import { Rating, AirbnbRating } from 'react-native-elements';
import verygood from '../assets/images/verygood.png'
import Goodfeedback from "./Counterfeedback/Goodfeedback";
import Badfeedback from "./Counterfeedback/Badfeedback";
import Continuebtn from "../component/Continuebtn";
function Counterrating({ navigation }) {
    const [ratingcount, setratingcount] = useState(0);
    const ratingCompleted=(rating)=> {
        console.log("Rating is: " + rating)
           setratingcount(rating)

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

       const suggestion = ratingcount >= 3 ? <Goodfeedback/>
        : <Badfeedback/>
 
 

    return (
                 <View style={{backgroundColor:'white'}}>
        <Mainquestions mainquestion= "မြောက်ဥက္ကလာကောင်တာ၏ ဝန်ဆောင်မှုအပေါ် မည်သို့ထင်မြင်ယူဆချက်ရှိပါသလဲ" />
       
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
<Continuebtn  onPress={() => navigation.push('Usersurvey')}  />

   </View>
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
 }
});
export default Counterrating;