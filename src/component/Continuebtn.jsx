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
        // onPress={() => navigation.push('MainRating')}
        buttonStyle={{
          backgroundColor: '#F41111',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30,
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
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginVertical: 20,
      marginTop:40,
    },

  });
  
export default Continuebtn;