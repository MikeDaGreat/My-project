import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const { width, height } = Dimensions.get('window');

export default function Dashboard({ navigation }) {
  
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

    <SafeAreaView style={styles.container}>


    <View style={styles.nav}>

      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <AntDesign name="arrowleft" size={24} color="#0bb949" />
      </TouchableOpacity>

          <View style={styles.textContainer}>
            <Text style={styles.welcomeback}> About us </Text>
          </View>

          <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={35} color="#0bb949" />

        </View>

      <ScrollView style={{ flex: 1}}>

     

      <View style={styles.cntnt1}>
        
      <Text style={styles.Headerfont} width={300} right={9}>Making good progress</Text>
      <Text style={styles.Description} width={345}>
        The team has created a music-themed UI design using React Native. The design is all about music, with a color scheme of 60% black, 30% white, and 10% green. The black background gives it a sleek look, the white parts make text easy to read, and the green adds a fresh touch. This design is inspired by a popular green-themed app. The focus is on simplicity and user-friendliness, so users can easily find their way around the app. Its made to be intuitive and enjoyable, even for first-time users. The content explores different music genres, their origins, and their popularity around the world. Its not just about listening to music but also learning more about its history and roots. Welcome to Group 3s Music UI app, where we bring together music, style, and an easy-to-use design!
      </Text>
      </View>

      <View style={styles.cntnt2}>
      <Text style={styles.musicfont}>Our Group</Text>

        <View style={styles.cntgenre}> 

          <View title = "classical" style={styles.genreItem}>
          <View title = "text div" style={styles.cntalgn}>
          <Text style={styles.titlecnt}>John Carlo E. Salva</Text>
          <Text style={styles.desccnt}>UI / UX Programmer, I designed the app's overall layout and user experience, ensuring it was both visually appealing and easy to navigate.</Text>
          </View>
          <TouchableOpacity> 
            <Image source={require('./assets/Salva.jpg')} style={styles.cntn2img}/>
          </TouchableOpacity> 
          </View>

          <View title = "Rock" style={styles.genreItem}>
          <View style={styles.cntalgn}>
          <Text style={styles.titlecnt}>Christian Mike B. Pagasian</Text>
          <Text style={styles.desccnt}>UI Programmer,  I developed the app's login page, ensuring a secure and user-friendly experience.</Text>
          </View>
          <TouchableOpacity> 
            <Image source={require('./assets/kuyamik.jpg')} style={styles.cntn2img}/>
          </TouchableOpacity> 
          </View>

          <View title = "Hip-Hop" style={styles.genreItem}>
          <View style={styles.cntalgn}>
          <Text style={styles.titlecnt}>Dindo Jr. Muring</Text>
          <Text style={styles.desccnt}>UI Programmer, I created the app's content pages, including the music genre exploration.</Text>
          </View>
          <TouchableOpacity> 
            <Image source={require('./assets/dindo.jpg')} style={styles.cntn2img}/>
          </TouchableOpacity> 
          </View>

          <View title = "Reggae" style={styles.genreItem}>
          <View style={styles.cntalgn}>
          <Text style={styles.titlecnt}>Engel Llanto</Text>
          <Text style={styles.desccnt}>User Persona, conducted research to understand user needs and ensure the app met their expectations.</Text>
          </View>
          <TouchableOpacity> 
            <Image source={require('./assets/engel.jpg')} style={styles.cntn2img}/>
          </TouchableOpacity> 
          </View>

          <View title = "EDM" style={styles.genreItem}>
          <View style={styles.cntalgn}>
          <Text style={styles.titlecnt}>Adrian Vine A. Cruz</Text>
          <Text  style={styles.desccnt}>Color Theory expert. I carefully selected colors that were both attractive and modern. </Text>
          </View>
          <TouchableOpacity> 
            <Image source={require('./assets/vine.jpg')} style={styles.cntn2img}/>
          </TouchableOpacity> 
          </View>

          <View title = "EDM" style={styles.genreItem}>
          <View style={styles.cntalgn}>
          <Text style={styles.titlecnt}>John Steven Solsona</Text>
          <Text  style={styles.desccnt}>I played the part of Typography and Spacing. I carefully selected appropriate fonts and ensured that the text was easy to read and visually appealing.</Text>
          </View>
          <TouchableOpacity> 
            <Image source={require('./assets/solsona.jpg')} style={styles.cntn2img}/>
          </TouchableOpacity> 
          </View>
        
        </View>
      </View>


      </ScrollView>

      <View title = "footer" style={styles.footer}>

      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Foundation name="home" size={23} color="#1DB954" style={{ left: 4.5, top: 13 }} /> 
          <View>
          <Text style={styles.footerText}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <FontAwesome name="users" size={18} color="#1DB954" style={{ left: 10, top: 15.5 }}/>
        <View>
        <Text style={{ color: 'white', fontFamily: 'UberMove', fontSize: width * 0.04, textAlign: 'center', left: -4, top: 19,}}>About</Text>
          </View>
        </TouchableOpacity>

        </View>

    </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 25,
  },
  nav: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%', // Adjusted for consistent padding
    paddingBottom: 10,
  },
  navimg: {
    width: width * 0.15, // Adjusted size based on screen width
    height: width * 0.15,
    borderRadius: (width * 0.15) / 2,
  },
  textContainer: {
    marginLeft: 20,
  },
  welcomeback: {
    color: '#1DB954',
    fontFamily: 'UberMove',
    fontSize: width * 0.1, 
    right: width * 0.04,// Scaled font size
  },
  username: {
    color: 'white',
    fontFamily: 'UberMove',
    fontSize: width * 0.04,
  },
  button: {
    backgroundColor: '#000000',
    padding: width * 0.02,
    borderRadius: 8,
  },
  linesContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  line1: {

    width: width * 0.1,
    height: 3,
    backgroundColor: '#1DB954',
    marginVertical: 1,
  },
  line2: {
    left: width * 0.03,
    width: width * 0.07,
    height: 3,
    backgroundColor: '#1DB954',
    marginVertical: 3,
  },
  line3: {
    left: width * 0.05,
    width: width * 0.05,
    height: 3,
    backgroundColor: '#1DB954',
    marginVertical: 1,
  },
  musicfont: {
    color: '#1DB954',
    fontFamily: 'UberMove',
    fontSize: width * 0.09,
    marginBottom: 7,
  },
  cntnt1: {
      left: width * 0.06,
      paddingVertical: height * 0.07 ,
      
  },
  Description: {
    paddingTop: height * 0.01,
    textAlign: 'left',
    right: width * 0.02,
    alignContent: 'center',
    color: '#FFFFFF',
    fontFamily: 'UberMove',
    fontSize: width * 0.04,
    marginBottom: 7,
    lineHeight: 34,
  },
  Headerfont: {
    color: '#FFFFFF',
    fontFamily: 'UberMove',
    fontSize: width * 0.09,
    marginBottom: 7,
  },
 
  cntnt2: {
    width: '100%',
    paddingHorizontal: '5%',
    top: height * -0.05,
    marginTop: height * 0.01,
  },
  cntgenre: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: height * 0.04,
  },
    cntn2img:  {
    top: height * -0.07,
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 90,  
    marginTop: -22,

  },
  titlecnt: {
    color: '#1DB954',
    fontFamily: 'UberMove',
    fontSize: width * 0.05,
    left: -23,
    paddingTop: height * 0.01,
    paddingBottom: height * 0.01,
  },
  desccnt: {
    textAlign: 'justify',
    lineHeight: 22,
    letterSpacing: 0.5,
    color: 'white',
    fontFamily: 'UberMove',
    fontSize: width * 0.035,
    left: -20,
  },
  cntalgn: {
    marginLeft: 110,
    width: '70%',
  },
  
  footer: {
    height: height * 0.1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    left: width * 0.01,
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0,
    top: 695,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    glowColor: 'white',
    borderRadius: 10,
    
   

  },
  footerText: {
    color: 'white',
    fontFamily: 'UberMove',
    fontSize: width * 0.04,
    textAlign: 'center',
    left: width * -0.02,
    top: 14,
   
  
  },

});