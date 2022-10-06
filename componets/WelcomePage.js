import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function WelcomePage() {
  return (


    <View style={styles.container}>

    
      <Image style={styles.logo} source={require('../assets/icon.png')} />

      <Text style={styles.paragraph}>
        Welcome to Emospace. Sign up to start your Journey with us or if you already have an account with, than just Log in . Proudly designed by Mlab.
      </Text>

      <TouchableOpacity style={styles.button1} >
      <Text style={styles.buttonText1}>
      SIGN UP
      </Text>
      </TouchableOpacity>

      <Text style={styles.or}>
      OR
      </Text>

      <TouchableOpacity style={styles.button2} >
      <Text style={styles.buttonText2}>
      LOG IN
      </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
  },

  logo: {
    height: 158,
    width: 188,
  marginTop:'50%',
 
  },

  paragraph: {
    margin: 15,
    marginTop: 20,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    color:'#000'
  },

  button1: {
    margin: 15,
width: 220,
height: 50,
backgroundColor:'#7A8727',
borderRadius:15,
  },

  buttonText1:{
    textAlign: 'center',
    alignSelf:'center',
    marginTop: 8,
    fontSize: 20,
    fontWeight:'500',
    color:'#fff'
  },

  or:{
    fontWeight:'300',
    fontSize:17,
    color:'#000',
  },

   button2: {
    margin: 15,
width: 220,
height: 50,
backgroundColor:'#428BA1',
borderRadius:15,
  },

    buttonText2:{
    textAlign: 'center',
    alignSelf:'center',
    marginTop: 8,
    fontSize: 20,
    fontWeight:'500',
    color:'#fff'
  },

});