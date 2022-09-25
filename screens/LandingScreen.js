import { View, Text,Image, SafeAreaView, Button} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import loginImages from '../assets/loginImages';


const LandingScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <SafeAreaView className="h-full w-full bg-black">

      <View className="flex-row mt-10 space-x-12">
        {/*div de camara y greyman la parte izquierda*/}
        <View className="ml-12">
          <View className="">
            <Image source={loginImages.videoCamera} className="h-16 w-16" tintColor="red"/>
          </View>
          {/*Imagen de Spiderman */}
          <Image source={loginImages.spiderMan} className="h-48 w-32 mt-20 rounded-xl"/>
        </View>

        {/*parte derecha*/}
        <View className="space-y-5">
            <Image source={loginImages.blackAdam} className="h-48 w-36 mt-2 rounded-xl"/>
          {/*Imagen de bladeRunner */}
          <Image source={loginImages.bladeRunner} className="h-48 w-36 rounded-xl"/>
        </View>
      </View>

      <View className="items-center mt-10">
        <Text className="font-bold text-3xl text-white">{`El entretemiento que 
        tu necesitas`}</Text>
        <Text className="font-bold text-sm text-white mt-5">{`Descarga y disfruta cuando quieras, 
        sin conexión en todo el mundo`}</Text>
        <View className="border-2 border-red-600 text-white font-bold py-2 px-4 rounded-full border-solid mt-5">
          <Button title="Iniciar Sesión" color='#000000' backgroundColor= 'transparent' onPress={()=>navigation.navigate('Login')}/>
        </View>
      </View>

      

    </SafeAreaView>
  )
}

export default LandingScreen