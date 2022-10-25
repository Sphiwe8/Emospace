import { React, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

import { db } from './configFile/config'
import { getQuotes } from './database/firestore';

export default function Popular() {

  useEffect(() => {


  })
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular</Text>
      <ScrollView>
        <View style={styles.box1}>

          <Image style={styles.hand} source={require('../assets/Hand.png')} />

          <Text style={styles.paragraph}>
            Left handed people are more likely to suffer from ADHD
          </Text>
        </View>

        <View style={styles.box2}>

          <Image style={styles.hand} source={require('../assets/health.png')} />
          <Text style={styles.paragraph}>
            Introverts loves nature, music,books,movies, pets ect.
          </Text>
        </View>


        <View style={styles.box3}>
          <Image style={styles.hand} source={require('../assets/Meeting.png')} />
          <Text style={styles.paragraph}>
            Friendship is good for your health. Believe it or not, people with larger networds live longer
          </Text>
        </View>
      </ScrollView>


    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  heading: {
    fontWeight: '800',
    color: '#4E4E4E',
    fontSize: 30,
    margin: 20,
    textAlign: 'center'
  },
  box1: {
    width: 300,
    height: 177,
    marginLeft: 45,
    backgroundColor: '#FFC4C4',
  },

  box2: {
    width: 300,
    height: 177,
    marginLeft: 45,
    backgroundColor: '#EE6983',
    marginTop: 20
  },
  box3: {
    width: 300,
    height: 177,
    marginLeft: 45,
    backgroundColor: '#9FC9F3',
    marginTop: 20,
  },
  hand: {
    width: 60,
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
  },
  paragraph: {
    margin: 12,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
});