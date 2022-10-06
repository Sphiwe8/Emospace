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
      <Cause />
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
