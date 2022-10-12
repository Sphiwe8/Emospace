import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,TextInput,Image,} from 'react-native';
import { Card, Avatar, Button } from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';



const Profile = () => {
   const [Pic, setPic] = React.useState('');

  const setToastMsg = msg => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER)
  }

  const uploadImage = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    }

    launchImageLibrary(options, response => {
      if(response.didCancel){
        setToastMsg('Cancelled image selection')
      }else if(response.errorCode == 'Permission'){
      setToastMsg('Permission not satisfied')
      }else if(response.errorCode == 'Permission'){
        setToastMsg(response.errorMessage)
      }else if(response.assets[0].fileSize > 2097152){
        Alert.alert('Maximum image size exceeded', 'Please choose image under 2 MB', [{text: 'OK'}])
      }else{
        setPic(response.assets[0].base64)
      }
    })
  }

  const removeImage = () => {
    setPic('')
    setToastMsg('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.maintext}>CREATE PROFILE</Text>
      <Text style={styles.subtext}> Please add an image to</Text>
      <Text style={styles.subtext}> your Profile</Text>

      <View>
      

       <Avatar.Image style={styles.img}
          size={250}
          source={{ uri: 'data:image/png;base64,' + Pic }}
        />

        <TouchableOpacity  mode="contained" onPress={() => uploadImage()}style={styles.add} >
         <Image source={require('../assets/Plus.png')}/>  
        </TouchableOpacity>

      </View>

      <View style={styles.box}>
      <Text style={styles.text}> USER NAME</Text>

      <TextInput
        placeholder="Enter User Name"
        style={styles.input}
        onChangeText={(name) => setName(name)}
      />

      <Image style={styles.icon} source={require('../assets/Edit.png')} />

      <Text style={styles.text}> GENDER</Text>

      <TextInput
        placeholder="Select Gender"
        style={styles.input}
        onChangeText={(gender) => setGender(gender)}
      />

      <Image style={styles.icon} source={require('../assets/Gender.png')} />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text2}> Create</Text>
      </TouchableOpacity>
      
      </View>

    </View>
  );
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maintext: {
    
    fontWeight:'300',
    fontSize:32,
    textAlign: 'center',
    marginTop: 15,
  },
  subtext: {
    
    fontWeight: '300',
    fontSize:24,
    textAlign: 'center',
    marginTop:1,
    color: '#797979',
  },
img:{
  marginLeft:40,
  backgroundColor:'#2FA4FF',


},
add:{
  marginLeft:210,
  marginTop:-60,

},

  input: {
    width: 300,
    height: 51,
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: '#2FA4FF',
    color: 'gray',
    margin:10,

   
  },
  text: {
    
    fontWeight: '400',
    fontSize:18,
    marginLeft:36,
    marginTop:40,
   
  },
  icon: {
    marginLeft: 270,
    marginTop: -45,
    width: 20,
    height: 20,
  },
  btn: {
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#2FA4FF',
    marginTop: 50,
    alignSelf: 'center',
  },
  text2: {
    
    fontWeight: '400',
    fontSize:24,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 10,
  },
});