import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');

export default function App({ navigation }) {

    const [fontsLoaded] = useFonts({
        'UberMove': require('./assets/UberMoveBold.otf') 
      });

  return (
    <LinearGradient
  colors={['rgba(2, 200, 10, 0.9)', '#102B2D', '#0E0E0E']} // Green with reduced opacity, then transition to other colors
  start={{ x: 0, y: 0 }} // Start the gradient from the top-left corner
  end={{ x: 0, y: 0.2 }}   // End the gradient at the bottom-right corner for an even blend
  locations={[0, 0, 5]} // Adjusts how quickly the colors blend into each other
  style={styles.container}
>
      <ImageBackground
        source={require('./assets/bg.jpg')}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <Text style={styles.title}>Let's get you in</Text>

        <View style={styles.buttonContainer}>
          {/* Google Button */}
          <TouchableOpacity style={styles.SloginButton} onPress={() => navigation.navigate('Dashboard')}>
            <Text style={styles.sgloginButtonText}>Continue with Google</Text>
            <Image
              source={require('./assets/gugil.png')}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* Facebook Button */}
          <TouchableOpacity style={styles.SloginButton} onPress={() => navigation.navigate('Dashboard')}>
            <Text style={styles.sloginButtonText}>Continue with Facebook</Text>
            <Image
              source={require('./assets/fisbuk.png')}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* Apple Button */}
          <TouchableOpacity style={styles.SaloginButton} onPress={() => navigation.navigate('Dashboard')}>
            <Text style={styles.saloginButtonText}>Continue with Apple</Text>
            <Image source={require('./assets/apul.png')} style={styles.socialIcon2} resizeMode="contain"/>
          </TouchableOpacity>
        </View>

        <Text style={styles.Littletitle}>--- Or ---</Text>

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginButtonText}>Log in with password</Text>
        </TouchableOpacity>

        <Text style={styles.Little}>Don't have an account yet?</Text>
        <TouchableOpacity onPress={() => console.log('Sign up button pressed!')}>
          <Text style={styles.linkText}> Sign Up</Text>
        </TouchableOpacity>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imageBackground: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    opacity: 0.2,
  },
  title: {
    fontSize: width * 0.08, // Adjusts based on screen width
    fontWeight: 'bold',
    marginTop: height * 0.1,
    marginBottom: height * 0.02,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'UberMove',
  },
  buttonContainer: {
    marginVertical: height * 0.02,
  },
  SloginButton: {
    width: width * 0.8, // Adjusts to 80% of the screen width
    height: height * 0.07,
    backgroundColor: 'black',
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: height * 0.015,
    alignSelf: 'center',
  },
  SaloginButton: {
    width: width * 0.8,
    height: height * 0.07,
    backgroundColor: 'black',
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: height * 0.015,
    alignSelf: 'center',
  },
  sgloginButtonText: {
    fontSize: width * 0.045, // Responsive font size
    color: '#fff',
    fontFamily: 'UberMove',
  },
  sloginButtonText: {
    fontSize: width * 0.045,
    color: '#fff',
    fontFamily: 'UberMove',
  },
  saloginButtonText: {
    fontSize: width * 0.045,
    color: '#fff',
    fontFamily: 'UberMove',
  },
  socialIcon: {
    width: width * 0.12,
    height: height * 0.03,
    position: 'absolute',
    left: width * 0.05, // Adjust position relative to button width
  },
  socialIcon2: {
    width: width * 0.12,
    height: height * 0.08,
    position: 'absolute',
    left: width * 0.05,
  },

  Littletitle: {
    fontSize: width * 0.04,
    color: '#fff',
    textAlign: 'center',
    marginVertical: height * 0.01,
    
  },
  loginButton: {
    width: width * 0.8,
    height: height * 0.06,
    backgroundColor: '#34C759',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: height * 0.015,
  },
  loginButtonText: {
    fontSize: width * 0.045,
    color: '#fff',
    fontFamily: 'UberMove',
  },
  Little: {
    fontSize: width * 0.04,
    color: '#fff',
    textAlign: 'center',
    marginTop: height * 0.015,
  },
  linkText: {
    fontSize: width * 0.04,
    color: '#3A9647',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
