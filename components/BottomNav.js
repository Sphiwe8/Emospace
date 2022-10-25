import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet, View} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Emotions from '../components/Emotions';

import Home from '../components/home';

import Profile from '../components/Profile';

import Sounds from '../components/Sound';

import Journal from '../components/Journal';
import ProfileID from './ProfileID';

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (

    <View style={styles.container}>
   
        
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} 
       options={{
        headerShown: false,
        tabBarLabel: 'Home', 
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      />

      <Tab.Screen name="Music" component={Sounds} 
      options={{
        tabBarLabel: 'Music',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="music" color={color} size={26} />
        ),
      }}
     
      />

<Tab.Screen name="Emotions" component={Emotions} 
      options={{
        tabBarLabel: 'plus',
        tabBarIcon: ({ color }) => (
            <View style={styles.plus}>
          <MaterialCommunityIcons name="plus" color={color} size={40}  />
          </View>
        ),
      }}
      />

<Tab.Screen name="Journal" component={Journal} 
       options={{
        tabBarLabel: 'Journal',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="book" color={color} size={26} />
        ),
      }}
      />


<Tab.Screen name="ProfileID" component={ProfileID} 
       options={{
        tabBarLabel: 'profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
      />



    </Tab.Navigator>
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    padding: 8,
    height:'100%',
  }, 
  
  plus: {
        width:40,
        height:40,
        backgroundColor:'#9FC9F3',
        borderRadius:20,
     
      },

    });

export default BottomNav;