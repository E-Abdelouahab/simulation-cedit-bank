import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Button, Image, TextInput, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons'; 

export default function ActivationAccount(props) {

    const [value, setValue] = useState()

    const load = async () => {
        try{
           const data = await AsyncStorage.getItem('data')
          if(data){
              console.log('data is exists');
          }

          const data1 = JSON.parse(data)
          setValue(data1)
         

        }catch(err){
            console.log(err);
        }
    }
    
    useEffect(() => {
        load()
    }, [])


    console.log(value);
 
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal:5 }}>
                <Image source={require('./../assets/card.png')} style={{  resizeMode: "center", height: 60,width: 100}}/>
            </View>
            <View>
                <Text style={{color: '#ee3b45', fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>VALIDATION DE MES COORDONNÉES</Text>
                <Text style={{textAlign: 'center'}}>Vérifer, puis valider vos informations</Text>
            </View>

            <View style={{paddingHorizontal: 5, paddingVertical: 10}}>
                <Text>Nom :</Text>
                <View style={{flexDirection: 'row'}}>
                   <View style={{width: 370}}>
                        <TextInput 
                            value={value.lastName}
                            placeholder="Nom"
                            style={{borderWidth: 1, borderColor: "rgb(240, 240, 240)", paddingHorizontal: 10, paddingVertical: 10}}/>
                   </View>
                   <View style={{width: 30}}>
                        <TouchableOpacity style={{backgroundColor: 'gray', alignItems: 'center', paddingVertical: 13, width: 50, borderRadius: 100}}>
                            <AntDesign name="edit" size={24} color="white" />
                        </TouchableOpacity>
                   </View>
                </View>
            </View>

            <View style={{paddingHorizontal: 5, paddingVertical: 10}}>
            <Text>Prenom :</Text>
            <View style={{flexDirection: 'row'}}>
               <View style={{width: 370}}>
                    <TextInput 
                        value={value.firstName}
                        placeholder="Nom"
                        style={{borderWidth: 1, borderColor: "rgb(240, 240, 240)", paddingHorizontal: 10, paddingVertical: 10}}/>
               </View>
               <View style={{width: 30}}>
                    <TouchableOpacity style={{backgroundColor: 'gray', alignItems: 'center', paddingVertical: 13, width: 50, borderRadius: 100}}>
                        <AntDesign name="edit" size={24} color="white" />
                    </TouchableOpacity>
               </View>
            </View>
        </View>

        <View style={{paddingHorizontal: 5, paddingVertical: 10}}>
        <Text>Phone :</Text>
        <View style={{flexDirection: 'row'}}>
           <View style={{width: 370}}>
                <TextInput 
                value={value.phone}
                    placeholder="Nom"
                    style={{borderWidth: 1, borderColor: "rgb(240, 240, 240)", paddingHorizontal: 10, paddingVertical: 10}}/>
           </View>
           <View style={{width: 30}}>
                <TouchableOpacity style={{backgroundColor: 'gray', alignItems: 'center', paddingVertical: 13, width: 50, borderRadius: 100}}>
                    <AntDesign name="edit" size={24} color="white" />
                </TouchableOpacity>
           </View>
        </View>
    </View>

    <View style={{paddingHorizontal: 5, paddingVertical: 10}}>
    <Text>Email :</Text>
    <View style={{flexDirection: 'row'}}>
       <View style={{width: 370}}>
            <TextInput 
                value={value.email}
                placeholder="Nom"
                style={{borderWidth: 1, borderColor: "rgb(240, 240, 240)", paddingHorizontal: 10, paddingVertical: 10}}/>
       </View>
       <View style={{width: 30}}>
            <TouchableOpacity style={{backgroundColor: 'gray', alignItems: 'center', paddingVertical: 13, width: 50, borderRadius: 100}}>
                <AntDesign name="edit" size={24} color="white" />
            </TouchableOpacity>
       </View>
    </View>
</View>

       
<TouchableOpacity style={{flexDirection: 'row',justifyContent: 'center', backgroundColor: '#ee3b45', paddingVertical: 10}}>
     <Text style={{color: 'white'}}>Allon-y !</Text>
</TouchableOpacity>

<TouchableOpacity style={{flexDirection: 'row',justifyContent: 'center', backgroundColor: '#ee3b45', paddingVertical: 10 , marginVertical: 10}}
              onPress={() => props.history.push('/')}>
     <Text style={{color: 'white'}}>Go Home </Text>
</TouchableOpacity>

        </View>
    )
}


