import React,{useState, useRef} from "react";
import {AppRegistry, StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { Button } from "react-native-elements";
import Continuebtn from "../../component/Continuebtn";
import survey from '../../assets/images/survey.png'
import Header from "../../component/Header";
import RadioButtonRN from "radio-buttons-react-native";
import PhoneInput from "react-native-phone-number-input";
import logo from '../../assets/images/logo.png'
function Phone({ navigation, route }) {
    
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const phoneInput = useRef(null);


    React.useEffect(() => {
      console.log( route.params)
     }, []);


    return (
         
        <View>
            <Image
  source={logo}
  style={{width: 250, height: 40}}
/>
        <View style={{alignSelf:'center', marginTop:'50%'}}>
        <PhoneInput
               ref={phoneInput}
               defaultValue={value}
            defaultCode="MM"
            layout="first"
            onChangeText={(text) => {
                setValue(text);
              }} 
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
         
            withDarkTheme
            withShadow
            autoFocus
          />
          
      </View>
      <View style={{alignItems:'center', marginTop:'60%'}}>
      <Button
        title="တင်သွင်းရန်"
        onPress={() => navigation.push('Thankyou')} 
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
      />
      </View>
      </View>
   
 

    );
  };
  const styles = StyleSheet.create({
    
    
paragraph:{
    borderRadius:3,
    padding:5,
    borderWidth:1,
    borderColor:'blue',
    margin:50,
    flexDirection: 'row',
    justifyContent: 'center'
    },
  
   
    
    
  });


export default Phone;






