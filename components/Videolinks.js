import * as React from 'react';
import {  View, StyleSheet, Text,Image  } from 'react-native';


 function Videolinks() {
  return (
    <View style={styles.container}>
<Text style={styles.heading}>General Facts</Text>


     <View style={styles.box1}>

 <Image style={styles.pic1} source={require('../assets/Grim.png')} />
   <Text style={styles.paragraph}>
      
There are more heart attacks on Monday than any other day
</Text>
     </View>


<View style={styles.box2}>

       <Image style={styles.calendar} source={require('../assets/Calendar.png')} />
     <Text style={styles.paragraph2}>
Workers are most productive on Mondays. You might hate Mondays but its probably your boss, favoutive day
</Text>
    </View>



    <View style={styles.box3}>
       <Image style={styles.law} source={require('../assets/Law.png')} />
     <Text style={styles.paragraph}>
Over 40% of us would confess to crimes we don’t commit.
</Text>
    </View>

</View>


  );
}
export default Videolinks
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 28,
    justifyContent: 'center'
  },

  heading:{
    fontWeight:'800',
    color:'#4E4E4E',
    fontSize:30, 
    margin:20, 
    textAlign:'center'
  },
  box1:{
      width:280,
  height:159,
  marginLeft:7,
  backgroundColor:'#FFC4C4',
  },
  pic1:{
width:50,
height:50,
alignSelf:'center',
marginTop:20,
},
paragraph: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  box2:{
  width:280,
  height:159,
  marginLeft:7,
  backgroundColor:'#EE6983',
  marginTop:20
},
calendar:{
  width:40,
height:50,
alignSelf:'center',
marginBottom:20,
},
paragraph2:{
     fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginTop:-14,
},
box3:{
   width:279,
  height:159,
  marginLeft:7,
  backgroundColor:'#9FC9F3',
  marginTop:20,
},
law:{
  width:50,
height:50,
alignSelf:'center',
marginTop:20,
}

});