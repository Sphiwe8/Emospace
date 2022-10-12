import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,TextInput,Image,} from 'react-native';
import { Card } from 'react-native-paper';

export default function Video() {
  return (
    <View style={styles.container}  >
  <Text style={styles.header}> Discovery </Text>
  <Text style={styles.subheader}> Live Videos</Text>

  <View style={styles.box1}>
  </View>
  <View style={styles.subbox1}>
  <Image style={styles.img1} source={require('../assets/Eye.png')} /><Text style={styles.views}> 12k Views</Text>
 <Image style={styles.img2} source={require('../assets/Favorite.png')} /><Text style={styles.likes}> 3680 Likes</Text>

  </View>

  <View style={styles.box2}>
  </View>
  <View style={styles.subbox2}>
  <Image style={styles.img1} source={require('../assets/Eye.png')} /><Text style={styles.views}> 1M Views</Text>
 <Image style={styles.img2} source={require('../assets/Favorite.png')} /><Text style={styles.likes}> 970K Likes</Text>

  </View>


  <View style={styles.box3}>
  </View>
  <View style={styles.subbox3}>
    <Image style={styles.img1} source={require('../assets/Eye.png')} /><Text style={styles.views}> 12k Views</Text>
 <Image style={styles.img2} source={require('../assets/Favorite.png')} /><Text style={styles.likes}> 340K Likes</Text>
  </View>
    
    
    </View>


  ) 
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    width:152,
    height:45,
    marginLeft:10,
    marginTop:30,
    fontWeight:'400',
    fontSize:36,
  },
  subheader:{
    width:139,
    height:34,
    marginLeft:15,
    marginTop:1,
    fontWeight:'300',
    fontSize:22,
  },
  box1:{
    width:313,
    height:170,
    backgroundColor:'red',
    marginTop:10,
  },
  subbox1:{
    width:313,
    height:27,
    background:'#D9D9D9',
  },
    box2:{
    width:313,
    height:170,
    backgroundColor:'#4DA5C0',
    marginTop:10,

  },
  subbox2:{
    width:313,
    height:27,
    background:'#D9D9D9',

  },
    box3:{
    width:313,
    height:170,
    backgroundColor:'#008000',
    marginTop:10, 
  },
  subbox3:{
    width:313,
    height:27,
    background:'#D9D9D9',
  },
  img2:{
    marginLeft:100,
    marginTop:-18,
  },
  views:{
    width:67,
    height:18,
    marginLeft:30,
    marginTop:-20,
    fontWeight:'500',
    fontSize:12,
    color:'#6C6767',
  },
  likes:{
     width:67,
    height:18,
    marginLeft:140,
    marginTop:-20,
    fontWeight:'500',
    fontSize:12,
    color:'#6C6767',
  },

  
});