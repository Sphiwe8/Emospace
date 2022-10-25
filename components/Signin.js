import * as React from 'react';
import { 
 TextInput,
 View, 
 StyleSheet, 
 Image,
 Text,
 TouchableOpacity,
 ActivityIndicator
 } from 'react-native';

 import { useNavigation } from '@react-navigation/core';
import { auth } from './configFile/config'
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword} from "firebase/auth";

export default function Signin() {

   const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState('');

  const navigation = useNavigation()
  
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])



  const handleLogin = () => {
    
    if (email == "" && password ==""){
      alert('Please enter your password and email' )

    } else {
      signInWithEmailAndPassword(auth ,email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
       
        console.log('Logged in with:', user.email);

       
      })
      .catch(error => alert(error.message))
    }
     
  }

  const signup = () => {
    navigation.navigate('Signup');
  };

  const create = () => {
    navigation.navigate('CreatePassword');
  };
   

  return (

    
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/tiny.png')} />


    <Text style={styles.header} >
    Login
    </Text>

    <View style={styles.inputs} >

    

<View style={styles.username} >

<Text style={styles.user} >
    Email Address
    </Text>

     <TextInput
       placeholder="Enter Email"
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
       
      />
 
      </View>

      
      <View style={styles.username} >
      <Text style={styles.user} >
    Enter Password
    </Text>
      <TextInput
        style={styles.input}
        secureTextEntry 
        onChangeText={(password) => setPassword(password)}
        placeholder="Password"
        keyboardType="password"
      />

      </View>
      
      </View>

      <View>
      <TouchableOpacity onPress={create}>      
<Text style={styles.link}>
      Forgot password?
      </Text>
</TouchableOpacity>


      <TouchableOpacity style={styles.button1} onPress={handleLogin} >      
<Text style={styles.buttonText1}>
      Log in
      </Text>
</TouchableOpacity>


  <Text style={styles.linkText}>
  Don't have an Account?
  </Text>


<TouchableOpacity onPress={signup}>      
<Text style={styles.link}>
      Sign up
      </Text>
</TouchableOpacity>



      </View>

      



      
      
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
    marginTop:25,
    
    
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

  linkText:{
    fontSize:17,
    margin:5,
    textAlign:'center',
    alignSelf:'center',
    }, 
    
      link:{
    fontSize:17,
    margin:10,
    color:'#4DA5C0',
    textAlign:'center',
      },

  

  inputs:{
    marginTop:40,
  },

    button1: {
    margin: 20,
width: 220,
height: 50,
backgroundColor:'#2FA4FF',
alignSelf:'center',
marginTop:60,
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
    margin: 5,
    width:'80%',
    borderWidth: 1,
    padding: 10,
    borderColor: '#2fa4ff',
    alignSelf:'center',
  },

});