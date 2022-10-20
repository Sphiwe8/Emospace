
import { NavigationContainer } from '@react-navigation/native';
import Home from '../components/home';
import Emotional from '../components/EmotionalFacts';
import Popular from '../components/Popular';
import General from '../components/GeneralFacts';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Emotional} />
      <Stack.Screen name="Profile" component={Popular} />
      <Stack.Screen name="Settings" component={General} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation