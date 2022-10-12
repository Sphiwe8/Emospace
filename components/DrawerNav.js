import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Motivation from '../components/MotiveQuotes';
import Journal from '../components/Journal';
import Emotional from '../components/EmotionalFacts';
import Popular from '../components/Popular';
import Home from '../components/home';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerRoutes() {
    return (
      <Drawer.Navigator useLegacyImplementation>
  
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Motivational Quotes" component={Motivation} />
        <Drawer.Screen name="My Journal" component={Journal} />
         <Drawer.Screen name="Popular" component={Popular} />
          <Drawer.Screen name="Emotional Facts" component={Emotional} />
           
      </Drawer.Navigator>
      
    );
  }



  export default DrawerRoutes