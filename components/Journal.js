import { async } from '@firebase/util';
import { doc } from 'firebase/firestore';
import { React, useEffect, useState } from 'react';
import { 
 TextInput,
 View, 
 StyleSheet, 
 Image,
 Text,
 TouchableOpacity,ScrollView
 } from 'react-native';
 import { db } from './configFile/config'
 import { collection, getDocs } from "firebase/firestore";

export default function Journal() {
  const [myjournal, setMyJournal] = useState([]);

  list = [] ;

  useEffect(async () => {
    getJournals()
   
  }, []);


  const getJournals = (async()=>{
    console.log("im in ")
    try {
      const querySnapshot = await getDocs(collection(db, 'journal'));
      const data = querySnapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()

      }))
      console.log(data)
      setMyJournal(data);
      console.log(myjournal);
    }
    catch (error) { }
  })


  return (

    <ScrollView>
    <View style={styles.container}>

<View style={styles.headerContainer}>
    <Text style={styles.header} >
    MOOD JOURNAL
    </Text>
</View>

{myjournal.length == 0 ? <Text style={styles.journalMessage}>There is nothing Saved to your Journal yet</Text>: <View>
  
  
{myjournal.map((data)=>(
  <View style={styles.messageContainer}>
  <View style={styles.message}>
  <Text style={styles.paragraphDate} >

    </Text>
<Text  style={styles.paragraphMessageQuestion}>How do you feel Today?</Text>
    <Text style={styles.paragraphMessage} >
  I feel <Text style={styles.emotionMessage}>{data.feeling}</Text> because of my <Text style={styles.emotionMessage}>{data.cause}</Text>
    </Text>

    <Text style={styles.paragraphMessage} >
      <Text style={styles.textMessage}>Message:</Text> {data.message}
   
    </Text>
</View>
</View>
))}
  
   </View>}

      
    </View>

    </ScrollView>
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
        marginTop:6,
        fontSize:22,
        fontWeight:'400',
        color:'#fff',
        marginLeft:10,
        
       
        
    
      },

      paragraphMessageQuestion:{
       
        fontSize:20,
        fontWeight:'300',
        color:'#B2B2B2',
        marginLeft:13,
      },

      journalMessage:{
        fontSize:35,
        fontWeight:'600',
        alignSelf:'center',
        textAlign:'center',
        color:'#AAAAAA',
      },

      emotionMessage:{
        fontSize:23,
        fontWeight:'500',
      
      },

      messageContainer:{
        margin:13,
        marginTop:30,
        backgroundColor:'#EA8D8D',
        width:'90%',
        height:'auto',
        justifyContent:'center',
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,

      },

      textMessage:{
        fontWeight:'400',
        fontSize:23,
        color:'#D3E0EA',
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