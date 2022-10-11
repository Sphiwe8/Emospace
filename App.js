import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './componets/Login';
import Signup from './componets/Signup';
import Welcome from './componets/WelcomePage';
import Emotions from './componets/Emotions';
import Cause from './componets/Cause';
import BottomNav from './componets/BottomNav';
import Sound from './componets/sound';

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
