import React, { useRef, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  Dimensions,
  Animated,
  StyleSheet,
} from "react-native";

import songs from "./data";
import Controller from "./Controller";
import { async } from "@firebase/util";
import { Audio } from 'expo-av';

const { width, height } = Dimensions.get("window");

export default function Player({route, navigation}) {
  const scrollX = useRef(new Animated.Value(0)).current;

  const slider = useRef(null);
  const [songIndex, setSongIndex] = useState(0);
  

  // for tranlating the album art
  const position = useRef(Animated.divide(scrollX, width)).current;

  useEffect(async () => {

    console.log(songs.title);
    const { sound } = await Audio.Sound.createAsync(route.params.title)
    setSound(sound);
    console.log('Playing Song');
    await sound.playAsync();
  }, []);

  const goNext = () => {
    slider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };
  const goPrv = () => {
    slider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };

  const renderItem = ({ index, item }) => {
    return (
      <Animated.View
        style={{
          alignItems: "center",
          width: width,
          transform: [
            {
              translateX: Animated.multiply(
                Animated.add(position, -index),
                -100
              ),
            },
          ],
        }}
      >
        <Animated.Image
          source={route.params.image}
          style={{ width: 320, height: 320, borderRadius: 5 }}
        />
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
    
      <View>

      <Animated.View
        style={{
          alignItems: "center",
          width: width,
          
        }}
      >
        <Animated.Image
          source={route.params.image}
          style={{ width: 320, height: 320, borderRadius: 5 }}
        />
      </Animated.View>

        
        <Text style={styles.title}>{route.params.song}</Text>
        <Text style={styles.artist}>{route.params.artist}</Text>
      </View>

      <Controller onNext={goNext} onPrv={goPrv} />
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: "center",
    textTransform: "capitalize",
  },
  artist: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "capitalize",
  },
  container: {
    justifyContent: "space-evenly",
    height: height,
    maxHeight: 500,
    marginTop:'20%'
    
    
  },
});