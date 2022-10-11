import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sound from './components/sound';





const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerRoutes() {
  return (
    <Drawer.Navigator useLegacyImplementation>

      <Drawer.Screen name="" component={Sound} />
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
