import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { Text, View,StyleSheet,Image  } from 'react-native';
import music from '../assets/musical-notes.png';
import menu from '../assets/menu-2.png';


export default function Sounds() {
  return (
    <View style={styles.container}>
  <Card style={styles.card1}>
 
     
 <Text style={styles.heading}>
 Therapeutic Sounds
 </Text>
  <Text style={styles.paragraph}>
Help for focus,healing,relax or sleep. Mix sounds together
 </Text>
</Card>
<Text  style={styles.text}>Playlist</Text>
<Text  style={styles.text1}>10 Sounds</Text>

<Card  style={styles.card2}>
<Image source={ music} style={{ width: 30, height: 35,marginLeft: 5,marginTop: 5}}/>
<Image source={ menu} style={{ width: 25, height: 35,marginLeft: 275,marginTop: -32}}/>
<Text  style={styles.text2}>Beach Waves And Birds</Text>
</Card>


<Card  style={styles.card3}>
<Image source={ music} style={{ width: 30, height: 35,marginLeft: 5,marginTop: 5}}/>
<Image source={ menu} style={{ width: 25, height: 35,marginLeft: 275,marginTop: -32}}/>
<Text  style={styles.text2}>Fire</Text>
</Card>


<Card  style={styles.card4}>
<Image source={ music} style={{ width: 30, height: 35,marginLeft: 5,marginTop: 5}}/>
<Image source={ menu} style={{ width: 25, height: 35,marginLeft: 275,marginTop: -32}}/>
<Text  style={styles.text2}>Big City</Text>
</Card>


<Card  style={styles.card5}>
<Image source={ music} style={{ width: 30, height: 35,marginLeft: 5,marginTop: 5}}/>
<Image source={ menu} style={{ width: 25, height: 35,marginLeft: 275,marginTop: -32}}/>
<Text  style={styles.text2}>Farm</Text>
</Card>


<Card  style={styles.card6}>
<Image source={ music} style={{ width: 30, height: 35,marginLeft: 5,marginTop: 5}}/>
<Image source={ menu} style={{ width: 25, height: 35,marginLeft: 275,marginTop: -32}}/>
<Text  style={styles.text2}>Rain</Text>
</Card>


<Card  style={styles.card7}>
<Image source={ music} style={{ width: 30, height: 35,marginLeft: 5,marginTop: 5}}/>
<Image source={ menu} style={{ width: 25, height: 35,marginLeft: 275,marginTop: -32}}/>
<Text  style={styles.text2}>Forest</Text>
</Card>


<Card  style={styles.card8}>
<Image source={ music} style={{ width: 30, height: 35,marginLeft: 5,marginTop: 5}}/>
<Image source={ menu} style={{ width: 25, height: 35,marginLeft: 275,marginTop: -32}}/>
<Text  style={styles.text2}>Sunny Day</Text>
</Card>
 


    
    
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },
card1:{
  width: '100%',
  height: '170px',
  backgroundColor: '#4DA5C0'
},
card2:{
position:'absolute',
width: '97%',
height: '50px',
top: '235px',
justifyContent: 'center',
background: '#777777',


},
card3:{
position:'absolute',
width: '97%',
height: '50px',
top: '296px',
justifyContent: 'center',
background: '#777777'
},
card4:{
position:'absolute',
width: '97%',
height: '50px',
top: '357px',
justifyContent: 'center',
background: '#777777'
},
card5:{
position:'absolute',
width: '97%',
height: '50px',
top: '419px',
justifyContent: 'center',
background: '#777777'
},
card6:{
position:'absolute',
width: '97%',
height: '50px',
top: '481px',
justifyContent: 'center',
background: '#777777'
},
card7:{
position:'absolute',
width: '97%',
height: '50px',
top: '543px',
justifyContent: 'center',
background: '#777777'
},
card8:{
position:'absolute',
width: '97%',
height: '50px',
top: '605px',
justifyContent: 'center',
background: '#777777'
},




heading:{
position: 'absolute',
width: '396px',
height: '38px',
left: '25px',
top: '20px',
fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: 600,
fontSize: '30px',
lineHeight: '44px',
color: '#FFFFFF'
},
paragraph:{
position: 'absolute',
width: '250px',
height: '66px',
left: '40px',
top: '70px',
fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: 300,
fontSize: '20px',
lineHeight: '24px',
justifyContent: 'center',
color: '#585757'
},
text:{
position: 'absolute',
width: '114px',
height: '34px',
left: '15px',
top: '180px',
fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: 300,
fontSize: '26px',
lineHeight: '31px',
color: '#6C6767'
},
text1:{
position: 'absolute',
width: '110px',
height: '15px',
left: '15px',
top: '210px',
fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: 300,
fontSize: '13px',
lineHeight: '16px',
color: '#554F4F'
},
 text2:{
   position: 'absolute',
width: '250px',
height: '40px',
left: '43px',
top: '10px',
fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: 300,
fontSize: '20px',
lineHeight: '29px',
color: '#000000'
 }


});