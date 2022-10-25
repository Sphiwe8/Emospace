import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import leftQuote from '../assets/quote-left.png';
import rightQuote from '../assets/quote-right.png';
import { Card } from 'react-native-paper';




export default function Quotes({ route, navigation }) {
  return (


    <View style={styles.container}>
      <Text style={styles.text}>Motivational Quotes</Text>

      <View style={styles.box}>

        <Image source={rightQuote} style={{ width: 40, height: 50, marginLeft: 160 }} />
        <Image source={leftQuote} style={{ width: 65, height: 50, marginLeft: 100, marginTop: -15 }} />
      </View>
      <ScrollView>
        <View style={styles.box1}>
          

          {route.params.qoutes.map((data) => (
            <Card style={styles.card1}>


              <Text >
                {data.message}
              </Text>

              <View >
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btntext}>
                    Read More
                  </Text>
                </TouchableOpacity>
              </View>
            </Card >
          ))}






        </View>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    height: '100%',
  },
  box1: {
    marginRight: '40%'
  },
  card1: {
    width: '160%',
    margin: '5%',

  },
  card2: {
    width: '160%',
    margin: '5%'

  },
  card3: {
    width: '160%',
    margin: '5%'

  },
  card4: {
    width: '160%',
    margin: '5%'

  },

  btn: {
    backgroundColor: '#FF0000',
    height: 35,
    width: 90,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 5,
    marginLeft: 250,

  },
  btn1: {
    backgroundColor: '#2FA4FF',
    height: 35,
    width: 80,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 200,

  },
  btn2: {
    backgroundColor: '#008000',
    height: 35,
    width: 80,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 200,

  },
  btn3: {
    backgroundColor: '#FFA500',
    height: 35,
    width: 80,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 200,

  },

  btntext: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center',
  },


  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 30,
    color: '#4E4E4E',
    textAlign: 'center',
    lineHeight: 39,
  },
  text1: {
    marginTop: 5,
    width: 100,
    fontWeight: '600',
    fontSize: 32,
    color: '#FF0000',
  },
  text2: {
    marginTop: 5,
    width: 100,
    fontWeight: '600',
    fontSize: 32,
    color: '#2FA4FF',
  },
  text3: {
    marginTop: 5,
    width: 100,
    fontWeight: '600',
    fontSize: 32,
    color: '#008000',
  },
  text4: {
    marginTop: 5,
    width: 150,
    fontWeight: '600',
    fontSize: 32,
    color: '#FFA500',
  },

});