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
 import { createUserWithEmailAndPassword,  signInWithEmailAndPassword} from "firebase/auth";

 import { auth } from './configFile/config'


export default function Signup() {
  const [firstname, setFirstName] = React.useState('');
  const [lastname, setLastName] = React.useState('');
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

  const handleSignUp = () => {
    
      createUserWithEmailAndPassword(auth ,email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        <ActivityIndicator size="small" color="#0000ff" />
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const login = () => {
    navigation.navigate('Signin');
  };

  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/tiny.png')} />


    <Text style={styles.header} >
    Sign Up
    </Text>

    <View style={styles.inputs} >

    <View style={styles.username} >

<Text style={styles.user} >
    First Name
    </Text>

     <TextInput
       placeholder="Enter your First Name"
        style={styles.input}
        onChangeText={(firstname) => setFirstName(firstname)}/>
      </View>

      <View style={styles.username} >

<Text style={styles.user} >
    Last Name
    </Text>

     <TextInput
       placeholder="Enter your Last Name"
        style={styles.input}
        onChangeText={(lastname) => setLastName(last)}/>
      </View>



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
    Create Password
    </Text>
      <TextInput
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry 
        placeholder="Password"
        keyboardType="password"
      />

      </View>
      
      </View>

<View>

<TouchableOpacity style={styles.button1}  onPress={handleSignUp}>      
<Text style={styles.buttonText1}>
      Sign up
      </Text>
</TouchableOpacity>

<Text style={styles.linkText}>
      Already have an Account?
      </Text>


<TouchableOpacity>      
<Text style={styles.link} onPress={login}>
      Log in
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
    marginTop:70,
    alignSelf:'center',
    height: 80,
    width: 180,
    
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
  
    width:'80%',
    borderWidth: 1,
    padding: 10,
    borderColor: '#2fa4ff',
    alignSelf:'center',
  },




  
});