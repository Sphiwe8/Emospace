import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet, View} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Emotions from '../components/Emotions';
import Cause from '../components/Cause';
import Journal from '../components/Journal';
import Signup from '../components/Signup';
import Popular from '../components/Popular';
import General from '../components/GeneralFacts';

import Emotional from '../components/EmotionalFacts';

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (

    
    <NavigationContainer>
        
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Emotions} 
       options={{
        tabBarLabel: 'Home', 
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      />

      <Tab.Screen name="Music" component={General} 
      options={{
        tabBarLabel: 'Music',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="music" color={color} size={26} />
        ),
      }}
     
      />

<Tab.Screen name="Journal" component={Journal} 
      options={{
        tabBarLabel: 'plus',
        tabBarIcon: ({ color }) => (
            <View style={styles.plus}>
          <MaterialCommunityIcons name="plus" color={color} size={40}  />
          </View>
        ),
      }}
      />

<Tab.Screen name="Video" component={Emotional} 
       options={{
        tabBarLabel: 'video',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="video" color={color} size={26} />
        ),
      }}
      />


<Tab.Screen name="Profile" component={Popular} 
       options={{
        tabBarLabel: 'profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="image" color={color} size={26} />
        ),
      }}
      />



    </Tab.Navigator>
    
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
    plus: {
        width:40,
        height:40,
        backgroundColor:'#9FC9F3',
        borderRadius:20,
     
      },

    });

export default BottomNav;