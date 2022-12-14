import * as React from 'react';
import { 
 TextInput,
 View, 
 StyleSheet, 
 Image,
 Text,
 TouchableOpacity,
 } from 'react-native';
 import WriteJournal from '../components/WriteJounal';
export default function Cause({navigation, route}) {

   const [text, onChangeText] = React.useState("");
  const [password, onChangePassword] = React.useState(null);


  return (

    
    <View style={styles.container}>  
    <Text>I feel {route.params.feeling}</Text>
    
    <Text style={styles.header} >
   So user
    </Text>

    <Text style={styles.paragraph} >
    What made you feel this way?
    </Text>

        <View style={styles.imageContainer}>
            
            <TouchableOpacity onPress={()=> navigation.navigate('WriteJournal', {feeling:route.params.feeling, cause:" Family"})}>
            <View  style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Family.png')} />
            <Text style={styles.imageText}>
            Family
            </Text>
            </View>
            </TouchableOpacity>
            

            <TouchableOpacity onPress={()=> navigation.navigate('WriteJournal', {feeling:route.params.feeling, cause:" Friends"})} >
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Friends.png')} />
            <Text style={styles.imageText}>
            Friends
            </Text>
            </View>
            </TouchableOpacity>
            

            <TouchableOpacity onPress={()=> navigation.navigate('WriteJournal', {feeling:route.params.feeling, cause:"Date"}  )}>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Tango.png')} />
            <Text style={styles.imageText}>
            Date
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('WriteJournal' , {feeling:route.params.feeling, cause:"School"})} >
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/School.png')} />
            <Text style={styles.imageText}>
            School
            </Text>
            </View>
            </TouchableOpacity>

        </View>

        <View style={styles.imageContainer}>

        <TouchableOpacity onPress={()=> navigation.navigate('WriteJournal', {feeling:route.params.feeling, cause:"Work"})}>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Work.png')} />
            <Text style={styles.imageText}>
            Work
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('WriteJournal', {feeling:route.params.feeling, cause:"Children"})}>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Children.png')} />
            <Text style={styles.imageText}>
            Children
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('WriteJournal',{feeling:route.params.feeling, cause:"Bully"})}>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Bully.png')} />
            <Text style={styles.imageText}>
            Bully
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('WriteJournal', {feeling:route.params.feeling, cause:"Groove"})}>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Groove.png')} />
            <Text style={styles.imageText}>
            Groove
            </Text>
            </View>
            </TouchableOpacity>

        </View>

        <View style={styles.imageContainer}>
<TouchableOpacity onPress={()=> navigation.navigate('WriteJournal', {feeling:route.params.feeling, cause:"Home"})}>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/House.png')} />
            <Text style={styles.imageText}>
            Home
            </Text>
            </View>
            </TouchableOpacity>


        <TouchableOpacity onPress={()=> navigation.navigate('WriteJournal', {feeling:route.params.feeling, cause:"Sleep"})}>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Sleep.png')} />
            <Text style={styles.imageText}>
            Sleep
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('WriteJournal', {feeling:route.params.feeling, cause:"Exercise"})}>
            <View style={styles.emoji}>
            <Image style={styles.happy} source={require('../causeAssets/Deadlift.png')} />
            <Text style={styles.imageText}>
            Exercise
            </Text>
            </View>
            </TouchableOpacity>

            

            <TouchableOpacity onPress={()=> navigation.navigate('WriteJournal', {feeling:route.params.feeling, cause:"Church"})}>
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
width:75,
height:75,
marginTop:38,
margin:6,
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

 




  home:{
    width:50,
    height:40,
    marginTop:7,
  },

 




  
});