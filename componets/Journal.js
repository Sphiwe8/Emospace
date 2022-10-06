import * as React from 'react';
import { 
 TextInput,
 View, 
 StyleSheet, 
 Image,
 Text,
 TouchableOpacity,
 } from 'react-native';

export default function Login() {

   const [text, onChangeText] = React.useState("");
  const [password, onChangePassword] = React.useState(null);


  return (

    
    <View style={styles.container}>
    


    <Text style={styles.header} >
    Hi user
    </Text>

      
    </View>
   
  );
} 

const styles = StyleSheet.create({
  container: {
    padding:60,
    height:'100%',
     
  },
  
 

  header: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '500',
    color: '#2FA4FF',
    
    

  },

  




  
});