import React from "react";
import { View ,Text, StyleSheet } from "react-native";
  const Suggestions = ({text}) =>{
    return <View>
      <Text style={styles.textstyle}>{text}</Text>
      
    </View>
  }
  const styles = StyleSheet.create({
   
    textstyle: {
      fontSize: 25,
      marginTop: 10,
       paddingLeft:20,
      // textAlign:'center'
    },
  });
  export default Suggestions;