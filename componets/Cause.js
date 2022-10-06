import * as React from 'react';
import { 
 TextInput,
 View, 
 StyleSheet, 
 Image,
 Text,
 TouchableOpacity,
 } from 'react-native';

export default function Cause() {

   const [text, onChangeText] = React.useState("");
  const [password, onChangePassword] = React.useState(null);


  return (

    
    <View style={styles.container}>  
    
    <Text style={styles.header} >
   So user
    </Text>

    <Text style={styles.paragraph} >
    What made you feel this way?
    </Text>

        <View style={styles.imageContainer}>
            
            <TouchableOpacity>
            <View  style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Family.png')} />
            <Text style={styles.imageText}>
            Happy
            </Text>
            </View>
            </TouchableOpacity>
            

            <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Friends.png')} />
            <Text style={styles.imageText}>
            Love
            </Text>
            </View>
            </TouchableOpacity>
            

            <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Tango.png')} />
            <Text style={styles.imageText}>
            Date
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/School.png')} />
            <Text style={styles.imageText}>
            School
            </Text>
            </View>
            </TouchableOpacity>

        </View>

        <View style={styles.imageContainer}>

        <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Work.png')} />
            <Text style={styles.imageText}>
            Work
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Children.png')} />
            <Text style={styles.imageText}>
            Children
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Bully.png')} />
            <Text style={styles.imageText}>
            Bully
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Groove.png')} />
            <Text style={styles.imageText}>
            Groove
            </Text>
            </View>
            </TouchableOpacity>

        </View>

        <View style={styles.imageContainer}>
<TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/House.png')} />
            <Text style={styles.imageText}>
            Home
            </Text>
            </View>
            </TouchableOpacity>


        <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Sleep.png')} />
            <Text style={styles.imageText}>
            Sleep
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Deadlift.png')} />
            <Text style={styles.imageText}>
            Exercise
            </Text>
            </View>
            </TouchableOpacity>

            

            <TouchableOpacity>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Church.png')} />
            <Text style={styles.imageText}>
            Church
            </Text>
            </View>
            </TouchableOpacity>

        </View>

    
        
    


  

      
    </View>
   
  );
} 

const styles = StyleSheet.create({
  container: {
    padding:60,
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
marginTop:40,


  },

  emoji:{
    alignItems:'center',
    justifyContent:'center',
  },

  happy:{
width:90,
height:90,
marginTop:40,
margin:2,
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