
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Emotional from './components/EmotionalFacts';
import General from './components/GeneralFacts';
import Popular from './components/Popular'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './componets/Login';
import Signup from './componets/Signup';
import Welcome from './componets/WelcomePage';
import Emotions from './componets/Emotions';
import Cause from './componets/Cause';






const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerRoutes() {
  return (
    <Drawer.Navigator useLegacyImplementation>

      <Drawer.Screen name="" component={Sounds} />
      <Drawer.Screen name="Stores" component={Screen1} />
     
    </Drawer.Navigator>
    
  );
}
export default function App() {
  return (
    <View style={styles.container}>

     <Emotional/>

 

      <Cause />
     
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    justifyContent: 'center',

    backgroundColor: '#ecf0f1',
    padding: 8,
=======
    backgroundColor: '#fff',
    
>>>>>>> 74fd1ed226d7672bd7145123617e534b28d126fb
  },

});