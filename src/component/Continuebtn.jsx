import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
function Continuebtn({title,onPress}) {

    const handlePress = () => {
       
      };
    return (
        <View style={styles.buttonsContainer}>

        <Button
        title="ဆက်သွားရန်"
        onPress={onPress}
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
    )
}
const styles = StyleSheet.create({
  
    buttonsContainer: {
      width: '100%', 
      height: '10%', 
      backgroundColor: 'white', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },

  });
  
export default Continuebtn;