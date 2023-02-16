import React from "react";
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import Continuebtn from "../component/Continuebtn";
import Onboardingimg from '../assets/images/onboarding.png'
import Header from "../component/Header";

function Onboardingpage({ navigation }) {

 
    return (
        <View style={styles.main}>
         <View>
         <Header/>

         </View>
      <View style={styles.container}>

<Image
  source={Onboardingimg}
  style={{width: 400, height: 400, alignSelf:'center'}}
/>
        <Text style={styles.introtext}>ပိုမိုကောင်းမွန်သောဝန်ဆောင်မှုမျာပေးနိုင်ရန်သင့်၏အကြံပြုချက်ကိုမျှဝေပေးပါ</Text>


    
      </View>
      <Continuebtn  onPress={() => navigation.push('RErating')}  />
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
      justifyContent: 'center',
      marginTop:-50
    },
    introtext: {
      fontSize: 30,
      fontWeight:'bold',
      textAlign: 'center',
      marginTop: -60,
      
    },
  });


export default Onboardingpage;
