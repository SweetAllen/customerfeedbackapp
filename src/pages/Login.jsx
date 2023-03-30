import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import { useAuth } from "../context/StorageContex";
import { Input, Button , Image,Text} from 'react-native-elements';
import logo from '../assets/images/logo.png'
// import logo from '../assets/images/logo.png'

  function Login({ navigation, route }) {

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const { logIn } = useAuth();
  const [error, setError] = React.useState("");


  const onPressLogin = async (e)=>{
  //  console.log(text)
  //  console.log(number)

  e.preventDefault();
  setError("");
  try {
    await logIn(text,number);
    navigation.navigate('Onboardingpage', {
      "loginbranch": text,
    });
  } catch (err) {
    console.log("error", +err)
    setError(err.message);
  }

  }
  return (
    <SafeAreaView style={{justifyContent:'center', flex:1, alignItems:'center'}}>
<Image
  source={logo}
  style={{width: 400, height: 40, marginBottom:'10%'}}
/>
<Input
        style={styles.input}

      placeholder="Username"
      leftIcon={{ type: 'font-awesome', name: 'user' }}
      onChangeText={value => onChangeText(value)}
      />

<Input
        style={styles.input}

      placeholder="Password"
      leftIcon={{ type: 'font-awesome', name: 'eye' }}
      onChangeText={value => onChangeNumber(value)}
      />
{error &&   <Text style={{color:'red'}}>{error}</Text> }
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="userbane"

        value={text}
      /> */}
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="password"
        keyboardType="numeric"
      /> */}
      {/* <Button
  onPress={onPressLogin}
  title="Login"
  color="#841584"
/> */}


<View style={{marginTop:'10%'}}>
            <Button
              title="LOG IN"
              onPress={onPressLogin}

              buttonStyle={{
                backgroundColor: '#F41111',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
              }}
              titleStyle={{ fontWeight: 'bold' }}
            />
            </View>
            <Text style={{marginTop:'5%'}}>Publish Version1(1.0.0)</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    width:10,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;