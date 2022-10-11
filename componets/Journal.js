import * as React from 'react';
import { 
 TextInput,
 View, 
 StyleSheet, 
 Image,
 Text,
 TouchableOpacity,
 } from 'react-native';

export default function Journey() {



  return (

    
    <View style={styles.container}>

<View style={styles.headerContainer}>
    <Text style={styles.header} >
    MOOD JOURNAL
    </Text>
</View>

<View style={styles.messageContainer}>

<View style={styles.date}>
    <Text style={styles.paragraphDate} >
    Tuesday, 06 September 2022, 11:26
    </Text>
</View>

<View style={styles.message}>
    <Text style={styles.paragraphMessage} >
    I feel happy because of my family. They encouraged me.
    </Text>
</View>


   </View>



      
      
    </View>
  );
} 

const styles = StyleSheet.create({
    container: {
        paddingTop:20,
        height:'100%',
        
         
      },

      paragraphDate:{
        fontSize:20,
        fontWeight:'500',
        marginLeft:10,


      },
    
      paragraphMessage:{
        fontSize:22,
        fontWeight:'300',
        color:'#fff',
        marginLeft:10,
       
        
    
      },

      messageContainer:{
        margin:13,
        marginTop:30,
        backgroundColor:'#EA8D8D',
        width:'90%',
        height:130,
        justifyContent:'center',
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,

        



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