import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import PagoScreen from "./screens/PagoScreen";
import PagoExitosoScreen from "./screens/pagoExitosoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* screens */}
        <Stack.Screen name="Login" component={PagoScreen} />
        <Stack.Screen name="pago" component={PagoScreen} />
        <Stack.Screen name="pagoExitoso" component={PagoExitosoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
