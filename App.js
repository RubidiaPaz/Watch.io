import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       
      <Stack.Navigator initialRouteName='Registro'>
        {/* screens */}
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name='Registro' component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

