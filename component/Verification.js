import React, { useState } from "react";
import { Dimensions,StyleSheet, TextInput, Image, TouchableWithoutFeedback, Keyboard, View, Text, TouchableOpacity } from "react-native";


export default function Verification() {

    const {height, width} = Dimensions.get('screen');

  const [code, setCode] = useState("");


  return (
    <TouchableWithoutFeedback  onPress={()=>{Keyboard.dismiss()}}>
   
   
     <View style={styles.continer}>
     <Image
        style={styles.img}
        source={require("../assets/verification.png")}
      />
      <View>
          <Text style={styles.textTitle}>
          VERIFICATION OF YOUR IDENTITY 
          </Text>
          <Text style={styles.subText}>
          You will receive an email and a validation code by Email
          </Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={code}
        value={code}
        placeholder="Validation Code"
      />
        <TouchableOpacity  style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}> Validate </Text>
        </TouchableOpacity>
     
     
     </View>

      
    
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    width: "80%",
  },
  continer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#f7f7f7",
    borderWidth:2,
    width:'100%',
    height: '100%'
    
  },
  img: {
    width: 99,
    height: 99,
  },
  textTitle:{
      fontSize: 29,
      color: '#ee3746',
      textAlign: "center",
      textTransform: "uppercase"
  },
  subText:{
    fontSize: 13,
    textAlign: "center",
    textTransform: "uppercase",
    minHeight:25,
    margin:12,
},
appButtonContainer: {
    elevation: 8,
    // borderTopRightRadius: 10,
    // borderBottomEndRadius: 10,
    backgroundColor: "#e74c3c",
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 20,
    borderRadius:10
    
    
    
  },
  appButtonText: {
    fontSize: 14,
    color: "#FFF",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },

});
