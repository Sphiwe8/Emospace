import * as React from 'react';
import { 
 TextInput,
 View, 
 StyleSheet, 
 Image,
 Text,
 TouchableOpacity,
 } from 'react-native';

export default function Emotions({navigation}) {

   const [text, onChangeText] = React.useState("");
  const [password, onChangePassword] = React.useState(null);

  const happy = () => {
    navigation.navigate('Cause');
  };

  return (

    
    <View style={styles.container}>  
    
    <Text style={styles.header} >
    Hi user
    </Text>

    <Text style={styles.paragraph} >
    How are you feeling today?
    </Text>

        <View style={styles.imageContainer}>
            
            <TouchableOpacity onPress={()=> navigation.navigate('Cause' , {feeling:"Happy"})}>
            <View  style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/Happy.png')} />
            <Text style={styles.imageText}>
            Happy
            </Text>
            </View>
            </TouchableOpacity>
            

            <TouchableOpacity   onPress={()=> navigation.navigate('Cause' , {feeling:"Loved"})}>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/love.png')} />
            <Text style={styles.imageText}>
            Love
            </Text>
            </View>
            </TouchableOpacity>
            

            <TouchableOpacity   onPress={()=> navigation.navigate('Cause' , {feeling:"Sad"})}>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/Sad.png')} />
            <Text style={styles.imageText}>
            Sad
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Cause' , {feeling:"OK"})} >
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/ok.png')} />
            <Text style={styles.imageText}>
            OK
            </Text>
            </View>
            </TouchableOpacity>

        </View>

        <View style={styles.imageContainer}>

        <TouchableOpacity onPress={()=> navigation.navigate('Cause' , {feeling:"Confuse"})} >
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/confused.png')} />
            <Text style={styles.imageText}>
            Confuse
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Cause' , {feeling:"Sleepy"})}>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/Sleeping.png')} />
            <Text style={styles.imageText}>
            Sleepy
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Cause' , {feeling:"Angry"})}>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/Angry.png')} />
            <Text style={styles.imageText}>
            Angry
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Cause' , {feeling:"Crying"})}>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/Crying.png')} />
            <Text style={styles.imageText}>
            Crying
            </Text>
            </View>
            </TouchableOpacity>

        </View>

        <View style={styles.imageContainer}>

        <TouchableOpacity onPress={()=> navigation.navigate('Cause' , {feeling:"Excited"})}>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/excited.png')} />
            <Text style={styles.imageText}>
            Excited
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Cause' , {feeling:"Cute"})}>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/cute.png')} />
            <Text style={styles.imageText}>
            Cute
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Cause' , {feeling:"Hopeful"})}>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/hopefull.png')} />
            <Text style={styles.imageText}>
            Hopeful
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Cause' , {feeling:"Sick"})}>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../emojiAssets/sick.png')} />
            <Text style={styles.imageText}>
            Sick
            </Text>
            </View>
            </TouchableOpacity>

        </View>

    
        
    


  

      
    </View>
   
  );
} 

const styles = StyleSheet.create({
  container: {
    padding:30,
    height:'100%',
    
     
  },

  paragraph:{
    fontSize:22,
    fontWeight:'400',
    textAlign:'center',
    color:'#2FA4FF',

  },


  imageContainer:{
justifyContent:'space-between',
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
marginTop:10,


  },

  emoji:{
    alignItems:'center',
    justifyContent:'center',
  },

  happy:{
width:80,
height:80,
marginTop:35,
margin:4,
alignSelf:'center',

  },

  imageText:{
    fontSize:18,
    fontWeight:'500',
    color:'#797979',


  },
  
 

  header: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '500',
    color: '#2FA4FF',
    
    

  },

  




  
});