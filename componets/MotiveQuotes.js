import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity,ScrollView } from 'react-native';
import leftQuote from '../assets/quote-left.png';
import rightQuote from '../assets/quote-right.png';
import { Card } from 'react-native-paper';




export default function Quotes() {
  return (

    
    <View style={styles.container}>
     <Text  style={styles.text}>Motivational Quotes</Text>

     <View style={styles.box}>
    
<Image source={ rightQuote} style={{ width: 40, height: 50,marginLeft: 160}}/>
 <Image source={ leftQuote} style={{ width: 65, height: 50,marginLeft: 100 ,marginTop: -15}}/>
  </View>
  <ScrollView>
<View style={styles.box1}>
<Card style={styles.card1}>
<Text  style={styles.text1}>LOVE</Text>

<Text >“Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.” – Washington Irving
</Text>

<View >
<TouchableOpacity style={styles.btn}>
<Text style={styles.btntext}>
Read More
</Text>
</TouchableOpacity>
    </View>
</Card >

<Card style={styles.card2}>
<Text  style={styles.text2}>FEAR</Text>

<Text >
"The brave man is not he who does not feel afraid, but he who conquers that fear."
--Nelson Mandela
</Text>

<View >
<TouchableOpacity style={styles.btn1}>
<Text style={styles.btntext}>
Read More
</Text>
</TouchableOpacity>
    </View>
</Card >
<Card style={styles.card3}>
<Text  style={styles.text3}>SAD</Text>

<Text >
“Experiencing sadness and anger can make you feel more creative, and by being creative you can get beyond your pain or negativity.
”
--Yoko Ono
</Text>

<View >
<TouchableOpacity style={styles.btn2}>
<Text style={styles.btntext}>
Read More
</Text>
</TouchableOpacity>
    </View>
</Card >
<Card style={styles.card4}>
<Text  style={styles.text4}>DOUBT</Text>

<Text >
“Successful people have fear, successful people have doubts, and successful people have worries. They just don’t let these feelings stop them.” T. Harv Eker

</Text>

<View >
<TouchableOpacity style={styles.btn3}>
<Text style={styles.btntext}>
Read More
</Text>
</TouchableOpacity>
    </View>
</Card >



</View>
</ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor:'#fff',
    height:'100%',
  },
  box1:{
marginRight: '40%'
  },
  card1:{
    width: '160%',
    margin: '5%',

  },
    card2:{
    width: '160%',
    margin: '5%'

  },
   card3:{
    width: '160%',
    margin: '5%'

  },
    card4:{
    width: '160%',
    margin: '5%'

  },

  btn:{
backgroundColor:'#FF0000',
height:35,
width:80,
borderRadius:10,
justifyContent:'center',
marginTop:15,
marginLeft:200,

  },
  btn1:{
backgroundColor:'#2FA4FF',
height:35,
width:80,
borderRadius:10,
justifyContent:'center',
marginTop:15,
marginLeft:200,

  },
btn2:{
backgroundColor:'#008000',
height:35,
width:80,
borderRadius:10,
justifyContent:'center',
marginTop:15,
marginLeft:200,

  },
  btn3:{
backgroundColor:'#FFA500',
height:35,
width:80,
borderRadius:10,
justifyContent:'center',
marginTop:15,
marginLeft:200,

  },

  btntext:{
color:'#fff',
fontWeight:'400',
fontSize:15,
textAlign:'center',
  },


  text:{
fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: '600',
fontSize: 30,
color: '#4E4E4E',
textAlign:'center',
lineHeight: 39,
  },
  text1:{
marginTop: 5,
width: 100,
fontWeight: '600',
fontSize: 32,
color: '#FF0000',
  },
   text2:{
marginTop: 5,
width: 100,
fontWeight: '600',
fontSize: 32,
color: '#2FA4FF',
  },
    text3:{
marginTop: 5,
width: 100,
fontWeight: '600',
fontSize: 32,
color: '#008000',
  },
   text4:{
marginTop: 5,
width: 150,
fontWeight: '600',
fontSize: 32,
color: '#FFA500',
  },

});