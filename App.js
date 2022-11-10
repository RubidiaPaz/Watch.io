import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import PagoScreen from "./screens/PagoScreen";
import PagoExitosoScreen from "./screens/pagoExitosoScreen";
import SelecionDePlan from "./screens/SelecionDePlan";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import MovieDetails from "./screens/MovieDetails";
import Splash from "./screens/Splash";
import AdminPerfil from "./screens/AdminPerfil";
import PeliculaScreen from "./screens/PeliculasScreen";
import SeriesScreen from "./screens/SeriesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* screens */}
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Inicio" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegisterScreen} />
        <Stack.Screen name="AdminPerfil" component={AdminPerfil} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
        <Stack.Screen name="pago" component={PagoScreen} />
        <Stack.Screen name="pagoExitoso" component={PagoExitosoScreen} />
        <Stack.Screen name="SelecionDePlan" component={SelecionDePlan} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
        <Stack.Screen name="PeliculasScreen" component={PeliculaScreen} />
        <Stack.Screen name="Series" component={SeriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
