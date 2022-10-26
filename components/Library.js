import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,Image } from 'react-native';
import { Card, Avatar, Button} from 'react-native-paper';
import novel1 from '../assets/novel1.png';
import novel2 from '../assets/novel2.png'
import novel3 from '../assets/novel3.png'
import novel4 from '../assets/novel4.png'
import book1 from '../assets/book1.png';
import book2 from '../assets/book2.png';
import book3 from '../assets/book3.png';
import book4 from '../assets/book4.png';
import book5 from '../assets/book5.png';
import book6 from '../assets/book6.png';
import book7 from '../assets/book7.png';
import book8 from '../assets/book8.png';



function Library(){
  return(
    <View  style={styles.container}>
    <Text  style={styles.heading} >Your<Text  style={styles.heading1} > Interest</Text></Text>

<ScrollView>
   <ScrollView horizontal={true} >
<Card style={styles.card1}>
<Card style={styles.card5}>
 <Image source={novel1}  style={{width: 120,height: 170,}}  />
</Card>
<Text style={styles.text1} >I have lost my way</Text>
<Text  style={styles.text2}> Gayle Forman</Text>
</Card>

<Card style={styles.card2}>
<Card style={styles.card5}>
 <Image source={novel2}  style={{width: 120,height: 170,}}  />
</Card>
<Text style={styles.text1} >Reasons to stay alive</Text>
<Text  style={styles.text2}>Matt Haig</Text>
</Card>


<Card style={styles.card3}>
<Card style={styles.card5}>
 <Image source={novel3}  style={{width: 120,height: 170,}}  />
</Card>
<Text style={styles.text1} >Pride & Prejudice</Text>
<Text  style={styles.text2}>Jane Austen & Georgrette Brown</Text>

</Card>
<Card style={styles.card4}>
<Card style={styles.card5}>
 <Image source={novel4}  style={{width: 120,height: 170,}}  />
</Card>
<Text style={styles.text1} >You're not alone</Text>
<Text  style={styles.text2}>Zachary David Westerback</Text>
</Card>
</ScrollView>

    <Text  style={styles.heading2} >Explore</Text>


   <ScrollView horizontal={true} >
<Card style={styles.card6}>
<Card style={styles.card}>
 <Image source={book1}  style={{width: 110,height: 170,borderRadius: 15}}  />
</Card>
<Text style={styles.text1} >Untamed</Text>
<Text  style={styles.text2}> Glennon  Doyle</Text>
</Card>

<Card style={styles.card7}>
<Card style={styles.card}>
 <Image source={book2}  style={{width: 110,height: 170,borderRadius: 15}}  />
</Card>
<Text style={styles.text1} >Reinvent Yourself</Text>
<Text  style={styles.text2}>Elizabeth Otis</Text>
</Card>


<Card style={styles.card8}>
<Card style={styles.card}>
 <Image source={book3}  style={{width: 110,height: 170,borderRadius: 15}}  />
</Card>
<Text style={styles.text1} >Self Compassion</Text>
<Text  style={styles.text2}>Gloria Steinem</Text>

</Card>
<Card style={styles.card9}>
<Card style={styles.card}>
 <Image source={book4}  style={{width: 110,height: 170,borderRadius: 15}}  />
</Card>
<Text style={styles.text1} >Learn Improve Master</Text>
<Text  style={styles.text2}>Nick Velasquez</Text>
</Card>
</ScrollView>


<ScrollView horizontal={true} >
<Card style={styles.card10}>
<Card style={styles.card}>
 <Image source={book5}  style={{width: 110,height: 170,borderRadius: 15}}  />
</Card>
<Text style={styles.text1} > Anxiety Relief for Teens</Text>
<Text  style={styles.text2}>Regine Galanti</Text>
</Card>

<Card style={styles.card11}>
<Card style={styles.card}>
 <Image source={book6}  style={{width: 110,height: 170,borderRadius: 15}}  />
</Card>
<Text style={styles.text1} >Living with Chronic Depression</Text>
<Text  style={styles.text2}>Jerome Levin</Text>
</Card>


<Card style={styles.card12}>
<Card style={styles.card}>
 <Image source={book7}  style={{width: 110,height: 170,borderRadius: 15}}  />
</Card>
<Text style={styles.text1} >Overcome Depression</Text>
<Text  style={styles.text2}>Jonathan Green</Text>

</Card>
<Card style={styles.card13}>
<Card style={styles.card}>
 <Image source={book8}  style={{width: 110,height: 170,borderRadius: 15}}  />
</Card>
<Text style={styles.text1} >The Keep Of Happy Endings</Text>
<Text  style={styles.text2}>Barbara Davis</Text>
</Card>
</ScrollView>
</ScrollView>


      </View>
        


  )
}
export default Library;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  heading:{
fontFamily: 'Inter',
fontWeight: 'bold',
fontSize: 20,
margin: 10
  },
    heading1:{
fontFamily: 'Inter',
fontWeight: 'bold',
fontSize: 20,
color:'#2FA4FF',
  },
  card1:{
width: 150,
height: 170,
margin: 10,
backgroundColor: '#FFC4C4',
marginTop: 70,
borderBottomLeftRadius: 20,
borderBottomRightRadius: 20,
  },
    card2:{
width: 150,
height: 170,
margin: 10,
backgroundColor: '#9FC9F3',
marginTop: 70,
borderBottomLeftRadius: 20,
borderBottomRightRadius: 20,
  },
    card3:{
width: 150,
height: 170,
margin: 10,
marginTop: 70,
borderBottomLeftRadius: 20,
borderBottomRightRadius: 20,
    backgroundColor: '#749F82',

  },
      card4:{
width: 150,
height: 170,
margin: 10,
marginTop: 70,
    backgroundColor: '#F1A661',
borderBottomLeftRadius: 20,
borderBottomRightRadius: 20,
  },
    card5:{
width: 120,
height: 170,
margin: 10,
marginLeft: 15,
marginTop: -70
  },
      card:{
width: 110,
height: 170,
margin: 10,
marginLeft: 20,
marginTop: -70,
borderRadius: 30
  },
    card6:{
width: 150,
height: 170,
margin: 10,
backgroundColor: '#FF87B2',
marginTop: 70,
borderRadius: 15
  },
    card7:{
width: 150,
height: 170,
margin: 10,
backgroundColor: '#EE6983',
marginTop: 70,
borderRadius: 15
  },
      card8:{
width: 150,
height: 170,
margin: 10,
marginTop: 70,
borderRadius: 15,
    backgroundColor: '#FFD8A9',

  },
        card9:{
width: 150,
height: 170,
margin: 10,
marginTop: 70,
    backgroundColor: '#CCD1E4',
borderRadius: 15
  },
      card10:{
width: 150,
height: 170,
margin: 10,
backgroundColor: '#B1D7B4',
marginTop: 70,
borderRadius: 15
  },
      card11:{
width: 150,
height: 170,
margin: 10,
backgroundColor: '#FFC090',
marginTop: 70,
borderRadius: 15
  },
        card12:{
width: 150,
height: 170,
margin: 10,
marginTop: 70,
borderRadius: 15,
    backgroundColor: '#A2B5BB',

  },
          card13:{
width: 150,
height: 170,
margin: 10,
marginTop: 70,
    backgroundColor: '#DEBA9D',
borderRadius: 15
  },
  text1:{
    color:'white',
    fontFamily: 'Inter',
fontWeight: 'bold',
fontSize: 14,
textAlign: 'center'
  },
  text2:{
    color:'#6B6B6B',
    fontFamily: 'Inter',
fontWeight: 'bold',
fontSize: 14,
textAlign: 'center'
  },
  heading2:{
fontFamily: 'Inter',
fontWeight: 'bold',
fontSize: 20,
margin: 20
  },

});