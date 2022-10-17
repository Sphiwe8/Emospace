import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../components/home';
import Screen2 from '../components/Cause';
import Screen1 from '../components/Emotions';




const Drawer = createDrawerNavigator();


const Stack = createNativeStackNavigator();


function DrawerRoutes() {
  return (
    <Drawer.Navigator useLegacyImplementation>

      <Drawer.Screen name="" component={Home} />
      <Drawer.Screen name="Emotions" component={Screen1} />
      <Drawer.Screen name="Cause" component={Screen2} />

    </Drawer.Navigator>
    
  );
}






 function App() {
 

  return (
    <NavigationContainer>
      <Stack.Navigator>
         
                <Stack.Screen name="home" component={DrawerRoutes} />
          
      </Stack.Navigator>
    </NavigationContainer>

  
  );
 }
 
 export default App;