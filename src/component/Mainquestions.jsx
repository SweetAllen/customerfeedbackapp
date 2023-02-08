import React from "react";
import { View, Text, StyleSheet } from "react-native";
function Mainquestions ({mainquestion}){
    return(
      <View>

        <Text style={styles.textstyle}>{mainquestion}</Text>
      </View>
    )
}
const styles = StyleSheet.create({
   
    textstyle: {
      fontSize: 30,
      fontWeight:'bold',
      marginTop: 10,
      padding :5,
      
    },
  });
export default Mainquestions;