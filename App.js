import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
<View>
  <BottomNav/>
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
