import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './componets/Login';
import Signup from './componets/Signup';
import Welcome from './componets/WelcomePage';
import Journal from './componets/Journal';

export default function App() {
  return (
    <View style={styles.container}>
      <Journal />
     
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
