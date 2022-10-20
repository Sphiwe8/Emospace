import * as React from 'react';
import { 
 TextInput,
 View, 
 StyleSheet, 
 Image,
 Text,
 TouchableOpacity,
 } from 'react-native';
import { Login } from './auth';
import { auth } from './configFile/config'

export default function Signin() {

   const [createpassword, setCreatepassword] = React.useState("");
  



  return (

    
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/tiny.png')} />


    <Text style={styles.header} >
    Create New Password
    </Text>

    <View style={styles.inputs} >

    

<View style={styles.username} >

<Text style={styles.user} >
    Create Password
    </Text>

     <TextInput
       placeholder="Enter new password"
        style={styles.input}
        onChangeText={(createpassword) => setCreatepassword(createpassword)}
       
      />

      </View>

      
   
      
      </View>

      

       <TouchableOpacity style={styles.button1}  >      
<Text style={styles.buttonText1}>
      Create
      </Text>
</TouchableOpacity>


      
      
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    backgroundColor:'#fff',
    height:'100%',
      
    
    
  },
  
  logo: {
    alignSelf:'center',
    height: 80,
    width: 180,
    marginTop:-25,
    
    
  },

  header: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '500',
    color: '#2FA4FF',
    
    

  },

  user:{
    fontSize: 17,
    fontWeight: '300',
    paddingLeft: 45,


  },

  inputs:{
    marginTop:20,
  },

    button1: {
    margin: 20,
width: 220,
height: 50,
backgroundColor:'#2FA4FF',
alignSelf:'center',
marginTop:40,
borderRadius:20,

  },

    buttonText1:{
    textAlign: 'center',
    alignSelf:'center',
    marginTop: 8,
    fontSize: 22,
    fontWeight:'500',
    color:'#fff'
  },

  username:{
marginTop:30,
  },

     input: {
    height: 50,
    margin: 12,
    width:'80%',
    borderWidth: 1,
    padding: 10,
    borderColor: '#2fa4ff',
    alignSelf:'center',
  },




  
});