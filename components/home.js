import { React, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Swiper from "react-native-web-swiper";
import { db } from './configFile/config'
import { getQuotes } from './database/firestore';
import { auth } from './configFile/config';
import { useNavigation } from '@react-navigation/core';
import { collection, getDocs } from "firebase/firestore";
import  loveQoutes from '../databaseQoutes/love'
import  sillyQoutes from '../databaseQoutes/silly'
import  shameQoutes from '../databaseQoutes/shame'
import  okQoutes from '../databaseQoutes/Ok'



export default function Home({navigation}) {



  const [psychologicalFacts, setPsychologicalFacts] = useState([
    {
      message: "Testing"
    },

    {
      message: "checking"
    },




  ])


  const  worried=  [
    {
      message:"im worried"
    },

    {
      message:"im worried to  much"
    }


  ]

  let list = [];
 
  //"Psychology Facts


  useEffect(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Psychology Facts'));
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setPsychologicalFacts(list);
      console.log(list);
    }
    catch (error) { }
  }, []);

  const emotional = () => {
    navigation.navigate('EmotionalFacts');
  };

  const popular = () => {
    navigation.navigate('Popular');
  };

  const general = () => {
    navigation.navigate('General');
  };

  const nextpage = ()=>{
    //Quotes
    navigation.navigate('Quotes');
  }

  

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Signin")
      })
      .catch(error => alert(error.message))
  }



  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Psychological Facts</Text>
        <View style={styles.box}>
          <View style={{ flex: 1 }}>
            <Swiper style={styles.swiper}
              Horizontal
              loop
              timeout={5.5}
              from={1}
              minDistanceForAction={0.1}
              controlsProps={{
                dotsTouchable: true,
                prevPos: 'left',
                nextPos: 'right',
                nextTitle: '>',
                nextTitleStyle: { color: 'white', fontSize: 24, fontWeight: '500' },
                PrevComponent: ({ onPress }) => (
                  <TouchableOpacity onPress={onPress}>
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                      {'<'}
                    </Text>
                  </TouchableOpacity>
                ),
              }}
            >


              {psychologicalFacts.map((data) => (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#c9ffff)" }}>
                  <Text style={styles.qoutes}>{data.message}</Text>
                </View>
              ))}










            </Swiper>
          </View>

        </View>


        <View style={styles.mainbox}>
          <TouchableOpacity onPress={emotional}>
            <View style={styles.box1}>
              <Image
                style={styles.icon}
                source={require('../assets/Categorize.png')}
              />
              <Text style={styles.factsText}>Catagories</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={popular}>
            <View style={styles.box2}>
              <Image style={styles.icon} source={require('../assets/Star.png')} />
              <Text style={styles.factsText}>Popular</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={general}>
            <View style={styles.box3}>
              <Image
                style={styles.icon}
                source={require('../assets/generall.png')}
              />

              <Text style={styles.factsText}>General</Text>
            </View>
          </TouchableOpacity>

        </View>

        <Text style={styles.subheader}>Emotions</Text>


        <View style={styles.mainborder}>
          <TouchableOpacity  onPress={()=> navigation.navigate('Quotes' , {qoutes:loveQoutes})}>
            <View style={styles.border1}  >
              <Image style={styles.img} source={require('../assets/loved.png')} />
              <Text style={styles.imgtext}>LOVE</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity    onPress={()=> navigation.navigate('Quotes' , {qoutes:worried})}>
            <View style={styles.border2}>
              <Image style={styles.img} source={require('../assets/worried.png')} />
              <Text style={styles.imgtext}>WORRIED </Text>
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.mainborder}>
          <TouchableOpacity  onPress={()=> navigation.navigate('Quotes' , {qoutes:shameQoutes})}>
            <View style={styles.border3}>
              <Image style={styles.img} source={require('../assets/shame.png')} />
              <Text style={styles.imgtext}>SHAME</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={()=> navigation.navigate('Quotes' , {qoutes:sillyQoutes})}>
            <View style={styles.border4}>
              <Image style={styles.img} source={require('../assets/silly.png')} />
              <Text style={styles.imgtext}>SILLY</Text>
            </View>

          </TouchableOpacity>
        </View>


        <View style={styles.mainborder}>
          <TouchableOpacity onPress={()=> navigation.navigate('Quotes' , {qoutes:okQoutes})}>
            <View style={styles.border3}>
              <Image style={styles.img} source={require('../assets/pain.png')} />
              <Text style={styles.imgtext}>PAIN</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.border4}>
              <Image style={styles.img} source={require('../assets/OK.png')} />
              <Text style={styles.imgtext}>OK</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.mainborder}>
          <TouchableOpacity>
            <View style={styles.border3}>
              <Image style={styles.img} source={require('../assets/trust.png')} />
              <Text style={styles.imgtext}>TRUST</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.border4}>
              <Image style={styles.img} source={require('../assets/angry.png')} />
              <Text style={styles.imgtext}>ANGRY</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.mainborder}>
          <TouchableOpacity>
            <View style={styles.border3}>
              <Image style={styles.img} source={require('../assets/humor.png')} />
              <Text style={styles.imgtext}>HUMOR</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.border4}>
              <Image style={styles.img} source={require('../assets/embarrest.png')} />
              <Text style={styles.imgtext}>EMBARREST</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleSignOut} style={styles.button2}>
          <Text style={styles.buttonText2}>
            SIGN OUT
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  header: {
    width: 245,
    height: 30,
    marginLeft: 10,
    marginTop: 50,
    fontWeight: '500',
    fontSize: 24,
    fontStyle: 'normal',
  },
  mainbox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',

  },
  box: {
    width: '90%',
    height: 235,
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#2FA4FF',
  },

  button2: {
    margin: 10,
    width: 190,
    height: 40,
    backgroundColor: '#DD5353',
    justifyContent: 'center',
    alignSelf: 'center',

  },

  buttonText2: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 8,
    fontSize: 17,
    fontWeight: '500',
    color: '#fff'
  },


  box1: {
    width: 84,
    height: 58,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: '#7FB77E',
    borderRadius: 5,

  },
  box2: {
    width: 84,
    height: 58,
    marginTop: 20,
    backgroundColor: '#EC7272',
    borderRadius: 5,
  },
  box3: {
    width: 84,
    height: 58,
    marginTop: 20,
    backgroundColor: '#E0A435',
    borderRadius: 5,


  },

  factsText: {
    fontWeight: '500',
    fontSize: 13,
    marginTop: 20,
    textAlign: 'center',
  },

  subheader: {
    fontWeight: '600',
    fontSize: 24,
    color: '#4E4E4E',
    marginTop: 50,
    marginLeft: 20,
  },
  mainborder: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 8,
    margin: 25,

  },
  border1: {
    width: 150,
    height: 110,
    backgroundColor: '#E7E3E3',
    borderRadius: 10,
  },
  border2: {
    width: 150,
    height: 110,
    backgroundColor: '#E7E3E3',
    borderRadius: 10,
  },

  border3: {
    width: 150,
    height: 110,
    backgroundColor: '#E7E3E3',
    borderRadius: 10,
  },
  border4: {
    width: 150,
    height: 110,
    backgroundColor: '#E7E3E3',
    boxShadow: '25',
    borderRadius: 10,
  },
  icon: {
    alignSelf: 'center',
    marginTop: 10,

  },
  img: {
    alignSelf: 'center',
    marginTop: 20,
    width: 56,
    height: 56,
  },
  imgtext: {
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,

  },
  qoutes: {
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 14,
    marginTop: 2,
    color: 'white',

  },
});
