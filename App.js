import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import PagoScreen from "./screens/PagoScreen";
import PagoExitosoScreen from "./screens/pagoExitosoScreen";
import SelecionDePlan from "./screens/SelecionDePlan";
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       
      <Stack.Navigator initialRouteName='Registro'>
        {/* screens */}
        <Stack.Screen name="Inicio" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='Registro' component={RegisterScreen} />
        <Stack.Screen name='Perfil' component={ProfileScreen} />
        <Stack.Screen name="pago" component={PagoScreen} />
        <Stack.Screen name="pagoExitoso" component={PagoExitosoScreen} />
        <Stack.Screen name="SelecionDePlan" component={SelecionDePlan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

