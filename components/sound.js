
import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity,TouchableHighlight } from 'react-native';
import { Card } from 'react-native-paper';
import pause from '../assets/pause.png';
import play from '../assets/play-circle-outline.png';
import music from '../assets/musical-notes.png';
import menu from '../assets/menu-2.png';
import { Audio } from 'expo-av';



export default function Sounds() {
  const [sound, setSound] = React.useState();


  const [songs, setSong] = React.useState([
    {
      title: "Rain",
      song: require('../assets/hello.mp3')
    },

    {
      title: "Forest",
      song: require('../assets/hello2.mp3')
    },

    {
      title: "Sunny day",
      song: require('../assets/hello3.mp3')
    },

    {
      title: "Farm",
      song:  require('../assets/hello4.mp3')
    },

    {
      title: "Big city",
      song:  require('../assets/hello5.mp3')
    },

    {
      title: "Universe",
      song: require('../assets/hello6.mp3')
    },
  ])

  async function playSound(song) {
    console.log(songs.title);
    const { sound } = await Audio.Sound.createAsync(song)
    
    setSound(sound);

    console.log('Playing Song');
    await sound.playAsync();
  }

  async function Pause(song) {
    console.log(songs.title);
    const { sound } = await Audio.Sound.createAsync('')
    
    setSound('');

    console.log('Song PAUSED');
   // await sound.playAsync();
  }


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
      <Text style={styles.text}>Playlist</Text>
      <Text style={styles.text1}>10 Sounds</Text>


      <View style={styles.musicContainer}>
        <ScrollView>
          {songs.map((song) => (
            <Card style={styles.card2} onPress={() =>playSound(song.song)} >
              <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 8, }}>
                <Image source={music} style={{ width: 30, height: 35, marginLeft: 15, }} />
                <Image source={menu} style={{ width: 25, height: 35, marginLeft: -15, }} />
                
              </View>
              <Text style={styles.songName}>
                {song.title}
              </Text>
            </Card>
          ))}



        </ScrollView>
      </View>











    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },

  musicContainer: {
    marginTop: 70,
  },
  card1: {
    width: '100%',
    height: 170,
    backgroundColor: '#4DA5C0',

  },
  card2: {
    marginTop: 20,
    width: '97%',
    height: 60,
    background: '#777777',


  },

  songName: {
    marginTop: -35,
    marginLeft: 70,
    letterSpacing: 3,
    fontSize: 28,
    fontWeight: '300'

  },



  heading: {
    position: 'absolute',
    alignSelf: 'center',
    textAlign: 'center',
    top: 20,
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 44,
    color: '#FFFFFF',
  },
  paragraph: {
    position: 'absolute',
    width: 270,
    top: 70,
    alignSelf: 'center',
    fontWeight: '300',
    fontSize: 22,
    color: '#585757'
  },
  text: {
    position: 'absolute',
    width: 114,
    height: 34,
    left: 15,
    top: 180,

    fontWeight: '300',
    fontSize: 26,
    lineHeight: 31,
    color: '#6C6767'
  },
  text1: {
    position: 'absolute',
    width: 110,
    height: 15,
    left: 15,
    top: 210,

    fontWeight: '300',
    fontSize: 13,
    lineHeight: 16,
    color: '#554F4F'
  },



});