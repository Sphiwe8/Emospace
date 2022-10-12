import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Welcome from './components/WelcomePage';







export default function App() {
  return (

    
    <View>
      <Welcome />
    </View>
         

);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
