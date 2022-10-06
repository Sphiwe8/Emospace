import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './componets/Login';
import Signup from './componets/Signup';
import Welcome from './componets/WelcomePage';
<<<<<<< HEAD
import Sounds from './componets/Sound';
import Quotes from './componets/MotiveQuotes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Screen1 from './components/Screen1';
=======
import Emotions from './componets/Emotions';
import Cause from './componets/Cause';
>>>>>>> c7eb6201ff70811cc74034d46479fd4fb83ea277





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
<<<<<<< HEAD
    <NavigationContainer>
    <Stack.Navigator>
    
      
          <Stack.Screen name="sounds" component={DrawerRoutes} />
            <Stack.Screen name="quotes" component={Quotes} />
            <Stack.Screen name="" component={DrawerRoutes} />
       
         
    </Stack.Navigator>
  </NavigationContainer>
=======
    <View style={styles.container}>
      <Cause />
     
      <StatusBar style="auto" />
    </View>
>>>>>>> c7eb6201ff70811cc74034d46479fd4fb83ea277
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
