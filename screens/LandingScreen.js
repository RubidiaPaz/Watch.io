import { View, Text,Image, SafeAreaView, Button} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import loginImages from '../assets/loginImages';
import GradientButton from '../atoms/GradientButton';
import LoginScreen from './LoginScreen';

const LandingScreen = ({ navigation }) => {
 

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="h-full w-full  bg-[#171719]">
      <View className="flex-row mt-20 space-x-10">
        {/*div de camara y greyman la parte izquierda*/}
        <View className="ml-10">
          <View className="">
            <Image source={loginImages.logobn} className="h-12 w-10" />
          </View>
          {/*Imagen de Spiderman */}
          <Image
            source={loginImages.spiderMan}
            className="h-48 w-32 mt-20 rounded-xl"
          />
        </View>

        {/*parte derecha*/}
        <View className="space-y-5">
          <Image
            source={loginImages.blackAdam}
            className="h-48 w-36 mt-2 rounded-xl"
          />
          {/*Imagen de bladeRunner */}
          <Image
            source={loginImages.bladeRunner}
            className="h-48 w-36 rounded-xl"
          />
        </View>
      </View>

      <View className="items-center mt-10">
        <Text className="font-bold text-3xl text-white">{`El entretemiento que 
        tu necesitas`}</Text>
        <Text className="font-bold text-sm text-white mt-5">{`Descarga y disfruta cuando quieras, 
        sin conexión en todo el mundo`}</Text>
        {/*<View className="border-2 border-red-600 text-white font-bold py-2 px-4 rounded-full border-solid mt-5">
          <Button title="Iniciar Sesión" color='#171719' backgroundColor= 'transparent' onPress={()=>navigation.navigate('Login')}/>
  </View>*/}
      </View>

      <View className="text-white text-center text-xl mt-10">
        <GradientButton
          text={"Iniciar Sesión"}
          onPressed={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen