import React from "react";
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import { Button } from "react-native-elements";
import Continuebtn from "../../component/Continuebtn";
import survey from '../../assets/images/survey.png'
import Header from "../../component/Header";
import RadioButtonRN from "radio-buttons-react-native";
function Usersurvey({ navigation }) {
    const data = [
        {
          label: 'ပထမဦးဆုံး အကြိမ်အသုံးပြုခြင်းဖြစ်သည်'
         },
         {
          label: 'မကြာခဏအသုံးပြုပါသည်'
         },
         {
            label: 'အမြဲတမ်းအသုံးပြုပါသည်'
           }
        ];
 
    return (
        <View style={styles.main}>
         <View style={{marginTop:'-5%'}}>
         <Header/>

         </View>
      <View style={{marginLeft:'-20%',marginTop:'5%'}}>
      <Text style={styles.introtext}>သင်သည် Royal Express ကို </Text>
      <RadioButtonRN
      activeColor='red'
      textStyle={{fontSize:20}}
      boxStyle={{width:'140%'}}
  data={data}
  selectedBtn={(e) => console.log(e)}
/>
      </View>
      <View style={styles.container}>

<Image
  source={survey}
  style={{width: 200, height: 400,}}
/>


    
      </View>

      {/* <Button
        title="ဆက်သွားရန်"
        onPress={() => navigation.push('Phone')}
        buttonStyle={{
          backgroundColor: '#F41111',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 25,
        }}
        containerStyle={{
          width: 180,
          marginHorizontal: 10,
          marginVertical: 10,
        }}
        titleStyle={{ fontWeight: 'bold' }}
      /> */}
      <Continuebtn  onPress={() => navigation.push('Phone')}  />
      </View>
    );
  };
  const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    container: {
      flex: 1,
      marginTop:'10%',
      marginRight:'-50%',
      zIndex:1
      
    },
    introtext: {
      fontSize: 30,
      fontWeight:'bold',
      marginTop: 20,
    },
  });


export default Usersurvey;
