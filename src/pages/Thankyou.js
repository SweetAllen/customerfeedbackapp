import React, {useEffect} from "react";
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import Continuebtn from "../component/Continuebtn";
import Onboardingimg from '../assets/images/onboarding.png'
import Header from "../component/Header";
import thanku from '../assets/images/thanku.png'
import logo from '../assets/images/logo.png'
import { CommonActions } from "@react-navigation/native";
function Thankyou({ navigation, route }) {

 
  useEffect (()=>{
    setTimeout(()=>{
      // Add your logic for the transition
      navigation.navigate('Onboardingpage',{ "loginbranch": route.params.loginbranch }) // what to push here?
  }, 5000);
  // navigation.dispatch(
  //   CommonActions.reset({
  //     index: 1,
  //     routes: [
  //       { name: 'Onboardingpage' ,
  //       params: { loginbranch: route.params.loginbranch }
  //     },
       
  //     ],
  //   })
  // );
 },[])

    return (
        <View>
                <Image
  source={logo}
  style={{width: 250, height: 40}}
/>
<Text style={styles.introtext}>အချိန်ပေးမှု အား Royal Express မှ ကျေးဇူးတင်ပါသည်။</Text>

      <View style={styles.container}>

<Image
  source={thanku}
  style={{width: 400, height: 500, alignSelf:'center', marginTop:'120%'}}
/>


    
      </View>
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
      marginTop:'40%'
    },
    introtext: {
      fontSize: 35,
      position:'absolute',
      marginTop:'30%',
      textAlign:'center',
      padding:16
      
    },
  });


export default Thankyou;
