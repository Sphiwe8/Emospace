import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import BottomNav from './components/BottomNav';
import Controller from './components/Controller';
import Player from './components/MusicPlayer';






export default function App() {
  return (
<View>

  <Player />

  </View>
);
}
const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#ecf0f1',
    height:'100%',
  },
});
