import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Image, TextInput, CheckBox, TouchableOpacity} from 'react-native'
import firebase from './../firebase'
import {useHistory, Link} from 'react-router-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const database = firebase.firestore();


export default function Register(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
  
    const [isSelected, setSelection] = useState(false);
    const [isChecked, setChecked] = useState(false);


    const submitRegister = async () => {
        
      try {
        if(database){
            database.collection('register').add({
                lastName: lastName,
                firstName: firstName,
                phone: phone,
                email: email
            })
            const data = await AsyncStorage.setItem('data', JSON.stringify({firstName, lastName, phone, email}))
            if(data){
                console.log(data)
            }
            props.history.push('/active-account')
         
        }
      }
      catch(err){
          console.log(err);
      }
    }


    const load = async () => {
        try{
           const data = await AsyncStorage.getItem('data')
          if(data){
              console.log('data is exists');
          }

          const data1 = JSON.parse(data)
          console.log(data1);
         

        }catch(err){
            console.log(err);
        }
    }
    
    // useEffect(() => {
    //     load()
    // }, [])

    
    return (
        <View >
        <View style={{flexDirection:"row" }}>
            <View style={{ backgroundColor:"#ee3b45", width: 50, justifyContent: 'center', marginHorizontal:5 }}>
                <Image source={require('./../assets/id-card.png')} style={{  resizeMode: "center", height: 60,width: 'auto',}}/>
            </View>
            <View style={{width: 350}}>
                <Text style={{color: '#ee3b45', fontWeight:'bold', fontSize: 20}}>MES COORDONNÉES</Text>
                <Text style={{color: '#330073'}}>Renseigner les champs ci-dessous et passer à l'étape suivante !</Text>
            </View>
        </View>

            <View style={{paddingHorizontal: 5, paddingVertical: 10}}>
            <TextInput
            placeholder="Nom"
         style={styles.input}
         value={lastName}
         onChangeText={setLastName}
         />
         
         <TextInput
         placeholder="Prénom"
         style={styles.input}
         value={firstName}
         onChangeText={setFirstName}
         />
         
         <TextInput
         placeholder="Tél..."
         style={styles.input}
         value={phone}
         onChangeText={setPhone}
         />
         
         <TextInput
         placeholder="Email..."
         style={styles.input}
         value={email}
         onChangeText={setEmail}
         />
         </View>
         
    <View style={{paddingHorizontal: 5, paddingVertical: 10}}>
    <Text>Conformément à la loi 09-08, vous disposez d'un droit d'accès, de rectification et d'opposition au traitement de vos données personnelles. Ce traitement a été autorisé par la CNDP sous le n°A-M-158/2020</Text>
    </View>
    
    <View style={{paddingHorizontal: 5, flexDirection: "row", alignItems: 'center'}}>
    <View style={{width: 40, borderWidth: 1, borderColor: 'rgb(240, 240, 240)',paddingVertical: 26, borderTopLeftRadius: 10, borderBottomLeftRadius: 10,justifyContent: 'center', flexDirection: 'row'}}>
    <CheckBox value={isSelected} onValueChange={setSelection}/>
    </View>
    <View style={{width: 360, paddingHorizontal: 5, borderWidth: 1, borderColor: 'rgb(240, 240, 240)',paddingVertical: 13, borderTopRightRadius: 10, borderBottomRightRadius: 10}}>
    <Text style={{fontSize: 12}}>J'AI LU ET ACCEPTÉ LES CONDITIONS GÉNÉRALES D'UTILISATION ET LES MENTIONS LÉGALES NOTAMMENT LA MENTION RELATIVE AUX DONNÉES À CARACTÈRE PERSONNEL</Text>
    </View>
    </View>
    
    <View style={{paddingHorizontal: 5, flexDirection: "row", alignItems: 'center', paddingVertical: 5}}>
    <View style={{width: 40, borderWidth: 1, borderColor: 'rgb(240, 240, 240)',paddingVertical: 13, borderTopLeftRadius: 10, borderBottomLeftRadius: 10,justifyContent: 'center', flexDirection: 'row'}}>
       <CheckBox value={isChecked} onValueChange={setChecked}/>
       </View>
       <View style={{width: 360, paddingHorizontal: 5, borderWidth: 1, borderColor: 'rgb(240, 240, 240)',paddingVertical: 13, borderTopRightRadius: 10, borderBottomRightRadius: 10}}>
       <Text style={{fontSize: 12}}>J'ACCEPTE DE RECEVOIR LES OFFRES PROMOTIONNELLES D'EQDOM </Text>
       </View>
       </View>
       
       <View style={{paddingHorizontal: 10}}>
       <TouchableOpacity style={{flexDirection: 'row',justifyContent: 'center', backgroundColor: '#ee3b45', paddingVertical: 10, borderRadius: 4}}
       onPress={() => {submitRegister()}}>
       <Text style={{color: 'white', fontWeight: 'bold'}}>SIMULE</Text>
       </TouchableOpacity>
       </View>

       </View>
       
       )
}


const styles = StyleSheet.create({
   input: {
      borderWidth: 1,
      borderColor: 'rgb(240, 240, 240)' ,
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginVertical: 5,
      borderRadius: 3
   },
  });