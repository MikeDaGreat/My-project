
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login  from './Loginscreen';
import Dashboard from './Dashboard';
import SocialLog from './Social-log';
import About from './About';
import Classical from './Classical';
import Rock from './Rock.js';
import Hiphop from './Hiphop.js';
import Reggae from './Reggae.js';
import Edm from './Edm.js';
 


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Social-log" component={SocialLog} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Classical" component={Classical} />
        <Stack.Screen name="Rock" component={Rock} />
        <Stack.Screen name="Hiphop" component={Hiphop} />
        <Stack.Screen name="Reggae" component={Reggae} />
        <Stack.Screen name="Edm" component={Edm} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}
