import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import PagoScreen from "./screens/PagoScreen";
import PagoExitosoScreen from "./screens/pagoExitosoScreen";
import SelecionDePlan from "./screens/SelecionDePlan";
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import PeliculaScreen from './screens/PeliculasScreen';
import Splash from './screens/Splash';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        {/* screens */}
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Inicio" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegisterScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
        <Stack.Screen name="pago" component={PagoScreen} />
        <Stack.Screen name="pagoExitoso" component={PagoExitosoScreen} />
        <Stack.Screen name="SelecionDePlan" component={SelecionDePlan} />
        <Stack.Screen name="PeliculasScreen" component={PeliculaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

