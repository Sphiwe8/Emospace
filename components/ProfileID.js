import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity ,ScrollView,Image} from 'react-native';
import { Card, Avatar, Button} from 'react-native-paper';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';

function ProfileID({navigation}) {

    const nextpage = () => {
        alert("clicked")
        navigation.navigate('Profile');
      };
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={styles.box1}>
        <Avatar.Image style={styles.img} size={250} source={{}} />
        <Text style={styles.text}>Marius Machado</Text>

        <TouchableOpacity style={styles.btn} onPress={nextpage}>
          <Text style={styles.btntext}>Edit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text1}>Most popular</Text>

<ScrollView horizontal={true} >
<Card style={styles.card1}>
 <Image source={pic3} style={{width: 150,
height: 200,}} />
</Card>
<Card style={styles.card2}>
 <Image source={pic2} style={{width: 150,
height: 200,}} />
</Card>
<Card style={styles.card3}>
 <Image source={pic1} style={{width: 150,
height: 200,}} />
</Card>
<Card style={styles.card4}>
 <Image source={pic4} style={{width: 150,
height: 200,}} />
</Card>

</ScrollView>
    </View>
  );
}

export default ProfileID;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  box: {
    backgroundColor: '#2FA4FF',
    width: 355,
    height: 300,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  box1: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    marginTop: -130,
    marginLeft: 27,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  img: {
    marginLeft: 75,
    marginTop: -65,
    backgroundColor: 'grey',
    width: 150,
    height: 150,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    margin: 20,
  },
  btn: {
    width: 150,
    height: 60,
    backgroundColor: '#2FA4FF',
    marginLeft: 76,
    marginTop: 70,
    borderRadius: 20,
  },
  btntext: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    padding: 17,
  },
  text1: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: 20,
  },
  card1:{
width: 150,
height: 200,
margin: 10

  },
    card2:{
width: 150,
height: 200,
margin: 10

  },
    card3:{
width: 150,
height: 200,
margin: 10

  },
      card4:{
width: 150,
height: 200,
margin: 10

  },
});