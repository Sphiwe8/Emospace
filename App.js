import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Emotional from './components/EmotionalFacts';
import General from './components/GeneralFacts';
import Popular from './components/Popular'

export default function App() {
  return (
    <View style={styles.container}>
     <Emotional/>

 
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

});