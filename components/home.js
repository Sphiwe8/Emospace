import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,TextInput,Image,} from 'react-native';
import { Card } from 'react-native-paper';
import Swiper from "react-native-web-swiper";



export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Psychological Facts</Text>
      <View style={styles.box}>
       <View style={{flex:1}}>
                  <Swiper
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
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#c9ffff)"}}>
                          <Text style={styles.qoutes}>"It takes about 66 days<br/> for an average individual<br/> to make something a daily habit."</Text>
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(20,200,20,0.3)"}}>
                          <Text style={styles.qoutes}>“We cannot solve problems<br/> with the kind of thinking we employed <br/>when we came up with them.”</Text>
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(200,20,20,0.3)"}}>
                          <Text style={styles.qoutes}>"Its never too late to make a change"</Text>
                      </View>
                       <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fc7f03"}}>
                          <Text style={styles.qoutes}>“Learn as if you will live forever,<br/> live like you will die tomorrow.” <br/>— Mahatma Gandhi</Text>
                      </View>
                       <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fcc603"}}>
                          <Text style={styles.qoutes}>Slide 5</Text>
                      </View>
                       <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#03fcf4"}}>
                          <Text style={styles.qoutes}>Slide 6</Text>
                      </View>
                       <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fc03db"}}>
                          <Text>Slide 7</Text>
                      </View>
                       <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fc0356"}}>
                          <Text style={styles.qoutes}>Slide 8</Text>
                      </View>
                       <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#88fc03"}}>
                          <Text style={styles.qoutes}>Slide 9</Text>
                      </View>
                    
                   
    
                      
                  </Swiper>
              </View>
      
      </View>


      <View style={styles.mainbox}>
        <View style={styles.box1}>
          <Image
            style={styles.icon}
            source={require('../Categorize.png')}
          />
          <Text style={styles.text1}>Catagories</Text>
        </View>

        <View style={styles.box2}>
          <Image style={styles.icon} source={require('../Star.png')} />
          <Text style={styles.text1}>Popular </Text>
        </View>

        <View style={styles.box3}>
          <Image
            style={styles.icon}
            source={require('../generall.png')}
          />

          <Text style={styles.text2}>General</Text>
        </View>
      </View>

      <Text style={styles.subheader}>Emotions</Text>

      <View style={styles.mainborder}>
        <View style={styles.border1}>
          <Image style={styles.img} source={require('../Love.png')} />
          <Text style={styles.imgtext}>LOVE </Text>
        </View>

        <View style={styles.border2}>
          <Image style={styles.img} source={require('../fear.png')} />
          <Text style={styles.imgtext}>FEAR </Text>
        </View>
      </View>
      <View style={styles.mainborder}>
        <View style={styles.border3}>
          <Image style={styles.img} source={require('../sad.png')} />
          <Text style={styles.imgtext}>SAD </Text>
        </View>

        <View style={styles.border4}>
          <Image style={styles.img} source={require('../doubt.png')} />
          <Text style={styles.imgtext}>DOUBT</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  box: {
    width: 330,
    height: 235,
    marginLeft: 2,
    marginTop: 10,
    backgroundColor: '#2FA4FF',
  },
  box1: {
    width: 94,
    height: 58,
    marginTop: 20,
    backgroundColor: '#7FB77E',
    borderRadius: 5,
  },
  box2: {
    width: 94,
    height: 58,
    marginTop: 20,
    backgroundColor: '#EC7272',
    borderRadius: 5,
  },
  box3: {
    width: 94,
    height: 58,
    marginTop: 20,
    backgroundColor: '#E0A435',
    borderRadius: 5,
  },
  text1: {
    fontWeight: '500',
    fontSize: 13,
    marginTop: 30,
    textAlign: 'center',
  },
  text2: {
    fontWeight: '500',
    fontSize: 13,
    marginTop: 20,
    textAlign: 'center',
  },
  subheader: {
    fontWeight: '600',
    fontSize: 22,
    color: '#4E4E4E',
    marginTop: 50,
  },
  mainborder: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  
  },
  border1: {
    width: 150,
    height: 100,
    backgroundColor: '#E7E3E3',
    boxShadow: '25',
    borderRadius: 10,
  },
  border2: {
    width: 150,
    height: 100,
    backgroundColor: '#E7E3E3',
    boxShadow: '25',
    borderRadius: 10,
  },

  border3: {
    width: 150,
    height: 100,
    backgroundColor: '#E7E3E3',
    boxShadow: '25',
    borderRadius: 10,
  },
  border4: {
    width: 150,
    height: 100,
    backgroundColor: '#E7E3E3',
    boxShadow: '25',
    borderRadius: 10,
  },
  icon: {
    marginLeft: 15,
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
    marginLeft:60,
    marginTop:5,

  },
  qoutes: {
     alignSelf: 'center',
    fontWeight: '600',
    fontSize: 14,
    marginTop:2,
     color: 'white',

  },
});
