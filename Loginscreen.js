import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Modal} from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

export default function Loginscreen({navigation}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const correctUsername = 'Kuyamik';
  const correctPassword = 'Pighati';

  const handleLogin = () => {
    if (username === correctUsername && password === correctPassword) {
      setAlertMessage('Login Successful! Welcome!');
      setModalVisible(true);
      // Navigate to the Home screen
      navigation.navigate('Dashboard');
    } else {
      setAlertMessage('Login Failed. Please check your credentials.');
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const [fontsLoaded] = useFonts({
    'UberMove': require('./assets/UberMoveBold.otf') 
  });

  if (!fontsLoaded) {
    return null; // If fonts are not loaded, return null or a loading indicator.
  }


return (
<LinearGradient
  colors={['rgba(2, 200, 10, 0.9)', '#102B2D', '#0E0E0E']} // Green with reduced opacity, then transition to other colors
  start={{ x: 0, y: 0 }} // Start the gradient from the top-left corner
  end={{ x: 0, y: 0.2 }}   // End the gradient at the bottom-right corner for an even blend
  locations={[0, 0, 5]} // Adjusts how quickly the colors blend into each other
  style={styles.container}
>

<Image
source={require('./assets/Topimage.png')}
style={{ width: 200, height: 200, marginBottom: 10 }}
/>

<Text style={styles.title}>Log in to your Account</Text>
<TextInput
style={styles.input}
placeholder=" Enter Email" placeholderTextColor="#888" value={username} onChangeText={setUsername}
/>
<TextInput
style={styles.input}
placeholder=" Enter Password" placeholderTextColor="#888" value={password} onChangeText={setPassword}
secureTextEntry={true}
/>
<TouchableOpacity>
<Text style={styles.linkText}>Forgot password?</Text>
</TouchableOpacity>


<TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
<Text style={styles.loginButtonText}>Log in</Text>
</TouchableOpacity>

<Modal transparent={true} visible={isModalVisible} animationType="slide">
  {/* blur ipiks*/}
  <View style={styles.modalOverlay}>
    {/* Modal content */}
    <View style={styles.modalView}>
      <Text style={styles.modalText}>{alertMessage}</Text>
      <TouchableOpacity style={styles.button} onPress={closeModal}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>
<Text style={styles.Littletitle}>--- or Log in with ---</Text>

<View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, left: 23,}}>
<View style={{ borderRadius: 25, overflow: 'hidden', margin: 10 }}>
<TouchableOpacity onPress={() => navigation.navigate("Social-log")} >
<ImageBackground
source={require('./assets/gugil.png')}
style={{ width: 45, height: 45}}
imageStyle={{ resizeMode: 'contain' }}
>
</ImageBackground>
</TouchableOpacity>
</View>

<View style={{ borderRadius: 25, overflow: 'hidden', margin: 10 }}>
<TouchableOpacity  onPress={() => navigation.navigate("Social-log")}>
<ImageBackground
source={require('./assets/fisbuk.png')}
style={{ width: 45, height: 45 }}
imageStyle={{ resizeMode: 'contain' }}
>
</ImageBackground>
</TouchableOpacity>
</View>

<View style={{ borderRadius: 25, overflow: 'hidden', margin: 10 }}>
<TouchableOpacity  onPress={() => navigation.navigate("Social-log")}>
<ImageBackground
source={require('./assets/apul.png')}
style={{  left: -20, top: -20, width: 90, height: 90 }}
imageStyle={{ resizeMode: 'contain' }}
>
</ImageBackground>
</TouchableOpacity>
</View>
</View>


</LinearGradient>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
},

img: {
marginright: 10,
},

title: {
fontSize: 24,
fontWeight: 'bold',
marginTop: 20,
marginBottom: 20,
color: '#fff',
fontFamily: 'UberMove',
},

input: {
width: 300,
height: 53,
backgroundColor: '#1E1E1E',
color: '#fff',
marginTop: 10,
marginBottom: 5,
padding: 10,
borderRadius: 90,
fontFamily: 'UberMove',
},

linkText: {
fontSize: 13,
color: '#3A9647',
textDecorationLine: 'underline',
marginBottom: 33,
marginTop: 33,
fontFamily: 'UberMove',
},

loginButton: {
width: 300,
height: 53,
backgroundColor: '#34C759',
justifyContent: 'center',
alignItems: 'center',
borderRadius: 100,
marginBottom: 10,

},

loginButtonText: {
fontSize: 18,
color: '#fff',
fontFamily: 'UberMove',
},

Littletitle: {
fontSize: 13,
color: '#fff',
marginTop: 30,
marginBottom: -5,
fontFamily: 'UberMove',
}, 
modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0, 5, 0, 0.7)', // Semi-transparent black background
  justifyContent: 'center',
  alignItems: 'center',
},
modalView: {
  top: -50,
  width: 300,
  backgroundColor: 'white',
  borderRadius: 16,
  padding: 20,
  alignItems: 'center',
  elevation: 5,

},
modalText: {
  fontSize: 18,
  marginBottom: 20,
  textAlign: 'center',
  fontFamily: 'UberMove',
},
button: {
  backgroundColor: '#34C759',
  padding: 10,
  width: 190,
  borderRadius: 16,
},
buttonText: {
  color: 'white',
  fontSize: 16,
  textAlign: 'center',
  fontFamily: 'UberMove',
},


});