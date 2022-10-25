import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Login } from './components/auth';
import BottomNav from './components/BottomNav';
import Controller from './components/Controller';
import Player from './components/MusicPlayer'
import Signup from './components/Signup';
import ProfileID from './components/ProfileID';

import Home from './components/home';
import Profile from './components/Profile';



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Emotional from './components/EmotionalFacts';
import Popular from './components/Popular';
import General from './components/GeneralFacts';
import Emotions from './components/Emotions';
import Cause from './components/Cause';

import Create from './components/CreatePassword';
import Signin from './components/Signin';
import Welcome from './components/WelcomePage';
import   Quotes from './components/MotiveQuotes' ;
import WriteJournal from './components/WriteJounal';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>

    <Stack.Screen name="WelcomePage" options={{headerShown:false}} component={Welcome} /> 
     <Stack.Screen name="Signin" options={{headerShown:false}} component={Signin} /> 
    <Stack.Screen name="Signup" options={{headerShown:false}} component={Signup} /> 
    <Stack.Screen name="CreatePassword" component={Create} />
    <Stack.Screen options={{headerShown:false}} name="Home" component={BottomNav} />
    <Stack.Screen name="Cause" component={Cause} />
    <Stack.Screen name="Popular" component={Popular} /> 
    <Stack.Screen name="Player" component={Player} />
    <Stack.Screen name="Quotes" component={Quotes} /> 
    <Stack.Screen name="WriteJournal" component={WriteJournal} />
    <Stack.Screen name="Profile" component={Profile} />

  </Stack.Navigator>

</NavigationContainer>


  
);
}

