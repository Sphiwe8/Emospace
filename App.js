import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Welcome from './components/WelcomePage';
import BottomNav from './components/BottomNav';







export default function App() {
  return (

    
    <View style={styles.container}>
      <BottomNav />
    </View>
         

);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    backgroundColor: '#fff',
    paddingTop:20,
    marginTop:'auto',
  },
});
