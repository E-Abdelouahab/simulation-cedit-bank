import React, { useState } from 'react';
import {Dimensions,  Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Slider from "react-native-sliders";

const {height, width} = Dimensions.get('screen');
 



export default function Credit() {

  const [creditAmount, setCreditAmount] = useState(0);
  const [months, setMonths] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [monthlyInsurance, setMonthlyInsurance] = useState(0);
  const [applicationFees, setApplicationFees] = useState(0);
  const [TEG, setTEG] = useState(0);

  const calcAmortissment  = (creditAmount,months) => {

    months = months.value
    creditAmount = creditAmount.value
   
    const a = parseFloat(creditAmount/months)
    const frais = parseFloat(((0.71*months)*50)/months)
    let interGloble = parseFloat((creditAmount*months*20)/1200)
    let iParmonths = parseFloat(interGloble/months)
    let Amortissement = parseFloat((a + iParmonths + frais).toFixed(2))
    let insurance = parseFloat((0.71 * months).toFixed(2));
    let fees = parseFloat((50 * monthlyInsurance).toFixed(2));
    let teg = parseFloat((5 + fees + 0.05 + insurance + 0.52 ).toFixed(2));
    setMonthlyPayment(Amortissement);
    setMonthlyInsurance(insurance);
    setApplicationFees(fees);
    setTEG(teg);
   
  }


   


    return (

      

      <View style={styles.container}>

         <ImageBackground
          style={styles.imageBackground}
          source={require('../assets/bg.jpg')}>
        

          <View style={styles.sliderContainer}>
            <Text style={styles.titleText} >Credit Amount</Text>
            <View style={styles.slider}>
              
                <Slider  
                minimumValue={4000}
                maximumValue={500000}
                onValueChange={value => {
                  value = parseInt(value[0].toFixed(0))
                  setCreditAmount({value} )
                  calcAmortissment(creditAmount,months)
              }}
              />
              
          
            <Text style={styles.titleText} >{creditAmount.value}</Text>
            </View>
            <Text style={styles.titleText} >Months</Text>


            <View style={styles.slider}>
              <Slider 
                minimumValue={12}
                maximumValue={48}
                onValueChange={value => {
                  value = parseInt(value[0].toFixed(0))
                  setMonths( {value} )
                  calcAmortissment(creditAmount,months)
              }}
              />
              <Text style={styles.titleText}>{months.value}</Text>
            </View>
          </View>
          <View style={styles.result}>
            <View style={styles.item}>
            <View style={styles.icon}>
              <Image source={require("../assets/icon1.png")} />
              <Text style={styles.imgIcon}>Credit Amount : {creditAmount.value} DH</Text>
            </View>
            <View style={styles.icon}>
              <Image source={require("../assets/icon2.png")} />
              <Text style={styles.imgIcon}>Months : {months.value} </Text>
            </View>
            <View style={styles.icon}>
              <Image source={require("../assets/icon3.png")} />
              <Text style={styles.imgIcon} >Monthly Insurance : {monthlyInsurance} DH</Text>
            </View>
            </View>
            <View style={styles.item}>
            <View style={styles.icon}>
              <Image source={require("../assets/icon4.png")} />
              <Text style={styles.imgIcon}>Application Fees : {applicationFees} DH</Text>
            </View>
            <View style={styles.icon}>
              <Image source={require("../assets/icon5.png")} />
              <Text style={styles.imgIcon}> Monthly Payment : {monthlyPayment} DH</Text>
            </View>
            <View style={styles.icon}>
              <Image  source={require("../assets/icon6.png")} />
              <Text style={styles.imgIcon} >TEG : {TEG} %</Text>
            </View>
            </View>
          

            
          </View>
          <TouchableOpacity  style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}> Next </Text>
            </TouchableOpacity>
        </ImageBackground>
    </View>
    

    
    
       
    )
}

const styles = StyleSheet.create({
  imageBackground : {
    flex : 1,
    justifyContent : 'space-around',
    width: width,
    alignItems: 'center'
  
},
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    sliderContainer: {

      // elevation: 8,
      // backgroundColor: "#FFF",
      marginTop: 50,
      width: 400,
      paddingLeft: 33,
      padding: 11,
      backgroundColor: 'rgba(0,0,0,0.6)'

    },
    slider: {
        width: 300,
        
    },
    result:{

      flexDirection:'row',
      flexWrap:'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      width:'80%',
      elevation: 8,
      backgroundColor: "#FFF",
      margin: 20,
      
      
    },
    item: {
       
      width:'50%',
      alignItems: 'center',
    },
    icon:{
      flexDirection:'row',
      flexWrap:'wrap',
      alignItems: 'center',
      margin: 40,
      
    },
    imgIcon:{
      marginLeft: 0,
      fontWeight: "bold",
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
    titleText: {
      fontSize: 15,
      fontWeight: "bold",
      color: "#FFF",
    }
    
    
    
  });