import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet, View} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Emotions from '../componets/Emotions';
import Cause from '../componets/Cause';
import Journal from '../componets/Journal';
import Signup from '../componets/Signup';
import Welcome from '../componets/WelcomePage';

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

      <Tab.Screen name="Music" component={Cause} 
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

<Tab.Screen name="Video" component={Signup} 
       options={{
        tabBarLabel: 'video',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="video" color={color} size={26} />
        ),
      }}
      />


<Tab.Screen name="Profile" component={Welcome} 
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