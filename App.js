import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './componets/Login';
import Signup from './componets/Signup';
import Welcome from './componets/WelcomePage';
import Sounds from './componets/Sound';
import Quotes from './componets/MotiveQuotes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Screen1 from './components/Screen1';





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
    <NavigationContainer>
    <Stack.Navigator>
    
      
          <Stack.Screen name="sounds" component={DrawerRoutes} />
            <Stack.Screen name="quotes" component={Quotes} />
            <Stack.Screen name="" component={DrawerRoutes} />
       
         
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
