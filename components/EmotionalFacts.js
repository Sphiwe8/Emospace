import * as React from 'react';
import { Text, View, StyleSheet ,Image,ScrollView} from 'react-native';



 function Emotional() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
Emotional Fact
      </Text>

 <Image style={styles.brain} source={require('../assets/brain.png')} />
 <ScrollView>
<View style={styles.box}>
<Text style={{marginLeft:20,marginTop:5,fontWeight:'700'}}>LOVE FACT</Text>
<Text style={styles.paragraph}>
“Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.” – Washington Irving
</Text>
</View>

<View style={styles.box1}>
<Text style={{marginLeft:20,marginTop:5,fontWeight:'700'}}>FEAR FACT</Text>
<Text style={styles.paragraph}>
“Don't be afraid of your fears. They're not there to scare you. They're there to let you know that something is worth it.”― C. JoyBell C.
</Text>
</View>

<View style={styles.box2}>
<Text style={{marginLeft:20,marginTop:5,fontWeight:'700'}}>SAD FACT</Text>
<Text style={styles.paragraph}>
“We never taste happiness in perfection, our most fortunate successes are mixed with sadness.” — Pierre Corneille
</Text>
</View>

<View style={styles.box3}>
<Text style={{marginLeft:20,marginTop:5,fontWeight:'700'}}>DOUBT FACT</Text>
<Text style={styles.paragraph}>
“Don’t ever doubt yourselves or waste a second of your life. It’s too short, and you’re too special.” – Ariana Grande
</Text>
</View>

</ScrollView>

    </View>
  );
}
export default Emotional
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
 textAlign:'center',
margin: 10


},
brain:{
alignSelf:'center',
marginBottom:20,
marginRight:10
  },
  box:{
width:290,
height:130,
backgroundColor:'#FD2121',
borderRadius:15,

  },
   paragraph: {
    margin: 19,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    color:'#FFFFFF'
  },
    box1:{
width:290,
height:130,
marginTop:20,
backgroundColor:'#2FA4FF',
borderRadius:15,

  },
      box2:{
width:290,
height:130,
marginTop:20,
backgroundColor:'#008000',
borderRadius:15,

  },
        box3:{
width:290,
height:130,
marginTop:20,
backgroundColor:'#FFA500',
borderRadius:15,

  },

});