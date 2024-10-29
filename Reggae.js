import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import Slider from '@react-native-community/slider';


const { width, height } = Dimensions.get('window');

export default function Dashboard({navigation}) {
  
  const [fontsLoaded] = useFonts({
    'UberMove': require('./assets/UberMoveBold.otf') 
  });

  if (!fontsLoaded) {
    return null; // If fonts are not loaded, return null or a loading indicator.
  }

  return (
    <LinearGradient
    colors={['rgba(2, 200, 10, 0.9)', '#102B2D', '#0E0E0E']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 0.2 }}
    locations={[0, 0, 1]}
    style={styles.container}
  >


    <SafeAreaView style={styles.container}>

    <View style={styles.nav}>

    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
    <AntDesign name="arrowleft" size={24} color="#0bb949" />
    </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.welcomeback}> Reggae Music </Text>
        </View>

        <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={35} color="#0bb949" />

      </View>
      <ScrollView style={{ flex: 1}}>
      

      <View style={styles.cntnt2}>
      

        <View>          
            <Image source={require('./assets/reggae.jpg')} style={styles.cntn2img}/>
        </View> 
        <View style={styles.slidetxt}>
          <Text style={styles.slidetxt}>00:00</Text>
          <Text style={styles.slidetxt2}>00:00</Text>
          </View>
        <Slider
            style={{width: width * 0.9, height: 40, marginLeft: 15, marginTop: 5}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#0bb949"
            maximumTrackTintColor="#ffffff"
          />

      
        <View style={{flexDirection: 'row', marginLeft: 32, marginTop: 10}}>         
        <TouchableOpacity>
        <FontAwesome name="download" size={18} color="#0bb949"  style={{marginRight: 12, top: 9, }} />
        </TouchableOpacity>

        <TouchableOpacity>
        <FontAwesome6 name="shuffle" size={18} color="#0bb949"  style={{marginRight: 12, top: 9,marginLeft: 12}} />
        </TouchableOpacity>

        <TouchableOpacity>
        <AntDesign name="stepbackward" size={25} color="#0bb949" style={{marginRight: 14, top: 9, }} />
        </TouchableOpacity>

        <TouchableOpacity>
        <AntDesign name="play" size={45} color="#0bb949" style={{marginLeft: 10, marginRight: 10, left: 3}} />
        </TouchableOpacity>

        <TouchableOpacity>
        <AntDesign name="stepforward" size={25} color="#0bb949" style={{marginLeft: 14, top: 9, }} />
        </TouchableOpacity>

        <TouchableOpacity>
        <MaterialCommunityIcons name="playlist-music" size={24} color="#0bb949" style={{marginRight: 12, top: 6,marginLeft: 12}} />
        </TouchableOpacity>

        <TouchableOpacity>
        <Entypo name="add-to-list" size={24} color="#0bb949"  style={{marginRight: 12, top: 6, }} />
        </TouchableOpacity>
        
        </View>
        


         
          <View style={styles.descriptioncontainer}>
          <View title = "Grieg: Peer Gynt Suite No. 1, Op. 46: I. Morning Mood" style={styles.genredes}>
          <View style={styles.genre}>
          <Text style={styles.description}>Reggae is a genre of music that originated in Jamaica in the late 1960s, characterized by its laid-back rhythms, offbeat accents, and socially conscious lyrics. It evolved from earlier styles like ska and rocksteady, blending African, Caribbean, and American influences. Reggae often features bass-heavy grooves, guitar strumming on the offbeats, and melodic vocals, with themes ranging from love and unity to political and social issues.Iconic artists like Bob Marley, Peter Tosh, and Burning Spear have been central to the development of reggae, which has also given rise to subgenres like dub, roots reggae, and dancehall. The genre has a deep connection to Rastafarian culture and spirituality, conveying messages of peace, resistance, and cultural pride. Reggae's influence extends beyond music, impacting global culture, fashion, and social movements.</Text>
          <Text style={styles.description}></Text>
          </View>    
          </View>
          </View>  
      </View>

      <View style={styles.cntnt}>

            <Text style={styles.musicfont}>Music</Text>

            <ImageBackground source={require('./assets/guitar.jpg')} style={styles.textcnt}  borderRadius={16} imageStyle={{ opacity: 0.4 }} >
            <View title = "Grieg: Peer Gynt Suite No. 1, Op. 46: I. Morning Mood" style={styles.genredes}>
              <Text style={styles.contentxt}  width={350} >Discover a diverse world of music genres. From pop to rock, jazz to hip-hop, find the perfect sound for every mood and moment!</Text>
              </View>
              
              <TouchableOpacity style={styles.btn}>
                  <Text style={styles.buttonText}>Go to contents →</Text>

              </TouchableOpacity>
            </ImageBackground>
            </View>

            <View style={{ height: 110 }} />
      </ScrollView >

      <View title = "footer" style={styles.footer}>

      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Foundation name="home" size={23} color="#1DB954" style={{ left: 4.5, top: 13 }} /> 
            <View>
            <Text style={styles.footerText}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <FontAwesome name="users" size={18} color="#1DB954" style={{ left: 18, top: 15 }}/>
          <View>
          <Text style={{ color: 'white', fontFamily: 'UberMove', fontSize: width * 0.04, textAlign: 'center', left: 5, top: 19,}}>About</Text>
            </View>
          </TouchableOpacity>

          </View>

    </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  // (The same styles as you have)
});


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems:'center',
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

    marginLeft: -70,
  },
  welcomeback: {
    color: '#ffffff',
    fontFamily: 'UberMove',
    fontSize: width * 0.06, 
    right: width * 0.01,// Scaled font size
    left: 45,
  },
  
  
  cntnt: {
    width: '100%',
    paddingHorizontal: '5%',
    marginTop: height * 0.04,
  },
  musicfont: {
    color: '#1DB954',
    fontFamily: 'UberMove',
    fontSize: width * 0.09,
    marginBottom: 7,
  },
  textcnt: {
    height: height * 0.2,
    width: '100%',
    borderRadius: 16,
    justifyContent: 'center',
    padding: 0,
    
  },
  contentxt: {
    color: 'white',
    fontFamily: 'UberMove',
    fontSize: width * 0.03,
    marginLeft: width * 0.02,
    textAlign: 'left',
  },

cntn2img:  {

width: 300,
height: 300,
borderRadius: 8,  
marginTop: 20,
left: 24, 

},
  
  slidetxt: {
    color: 'white',
    fontFamily: 'UberMove',
    fontSize: width * 0.03,
    marginLeft: width * 0.02,
    textAlign: 'left',
    flexDirection: 'row',
    marginTop: 40,
    left : 8,
  },

  slidetxt2: {
    color: 'white',
    fontFamily: 'UberMove',
    fontSize: width * 0.03,
    marginLeft: 230,
    textAlign: 'left',
    flexDirection: 'row',
    marginTop: 40,
    left : 5,
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
  
  descriptioncontainer: {
    width: '93%',
    paddingHorizontal: '5%',
    marginTop: height * 0.04,
    backgroundColor: "#03EE5F",
    marginLeft: 15,
    borderRadius: 20,
  },
  
  description: {
    lineHeight: 35,
    color: '#3b3b3b',
    fontFamily: 'UberMove',
    fontSize: width * 0.045,
    marginRight: width * 0,
    textAlign: 'justify',
    left: 0,
    marginTop: 20,

  },

  cntnt: {
    width: '100%',
    paddingHorizontal: '5%',
    marginTop: height * 0.04,
  },
  musicfont: {
    color: '#FFFFFF',
    fontFamily: 'UberMove',
    fontSize: width * 0.09,
    marginBottom: 7,
  },
  textcnt: {
    height: height * 0.2,
    width: '100%',
    borderRadius: 16,
    justifyContent: 'center',
    padding: 0,
    
  },
  contentxt: {
    color: 'white',
    fontFamily: 'UberMove',
    textAlign: 'justify',
    fontSize: width * 0.03,
    marginLeft: width * 0.02,
    marginRight: width * 0.01,
    maxWidth: width * 0.8, 
    numberOfLines: 3, 
    ellipsizeMode: "tail" 
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    top: height * 0.03,
    left: 3,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: width * 0.03,
    color: '#000000',
    fontFamily: 'UberMove',
  },
  
  
});