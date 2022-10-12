import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './componets/Login';
import Signup from './componets/Signup';
import Welcome from './componets/WelcomePage';
import Emotions from './componets/Emotions';
import Cause from './componets/Cause';
<<<<<<< HEAD
import Sounds from './componets/sound';
import Quotes from './componets/MotiveQuotes';
=======
import BottomNav from './componets/BottomNav';
import Sound from './componets/sound';
>>>>>>> fd810a180bd8840c81d187db3d2d70a0c42c66a4




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
