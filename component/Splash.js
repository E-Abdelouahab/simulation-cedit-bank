import React from "react";
import { ImageBackground,StyleSheet  } from 'react-native';
import { useHistory } from "react-router-native";


export default function Splash() {
    const history = useHistory();

    setTimeout(() => {
        history.push('/register')
    }, 3000);


    return (
        <ImageBackground
        style={styles.imageBackground}
         source={require('../assets/splash2.png')}>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground : {
        flex : 1,
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'space-around',
        paddingVertical : 100
    }

  });