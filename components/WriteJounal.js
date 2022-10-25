import * as React from 'react';
import { TextInput, View, StyleSheet, Image, Text, TouchableOpacity, } from 'react-native';
import Journal from './Journal';

import { db } from './configFile/config'
import {auth} from './configFile/config'
import { collection, addDoc } from "firebase/firestore";
export default function WriteJournal({ navigation, route }) {

  const [journal, setJournal] = React.useState('');
  
  
  const user = auth.currentUser.uid;

  const addJournal = () => {

  

     const docRef = collection(db, "journal");
     const journals = {
       feeling: route.params.feeling,
       cause: route.params.cause,
        message: journal,
      journalDate:new Date()
   };

     addDoc(docRef, journals).then(() => {
     alert("Added successfully")
   }).catch(() => {
     console.log("error")
     })



console.log(user);



  }
  return (
    <View style={styles.Container}>

      <Text> Your Journal</Text>
      <TextInput placeholder=' Write your Journal ' style={styles.textBox} onChangeText={(journal) => setJournal(journal)}>

      </TextInput>

      <TouchableOpacity style={styles.button} onPress={addJournal}>

        <Text style={styles.buttontext}> Submit</Text>
      </TouchableOpacity>




    </View>



  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    height: '100%'
  },

  textBox: {
    height: 100,

    width: '80%',
    borderWidth: 1,
    padding: 10,
    borderColor: '#2fa4ff',
    alignSelf: 'center',
    justifyContent: "center",
    marginTop: 50,
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#2FA4FF',
    marginTop: 50,
    alignSelf: 'center',
  },
  buttontext: {
    fontWeight: '400',
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 10,
  },
})