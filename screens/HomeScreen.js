import { View, Text,Image, SafeAreaView, Button} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import loginImages from '../assets/loginImages';


const HomeScreen = () => {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <SafeAreaView className="h-full w-full  bg-black">
      

     
        <View className="flex-row mt-10 space-x-8  ">
          <View className="ml-5">
             <View className=" items-center ">
              <Image className="w-16 h-16 ml-5 mt-5" tintColor='#DC2626' source={loginImages.videoCamera}/>
             </View>
              <Image className="mt-20 ml-2 w-32 h-48 mb-36 rounded-xl" source={loginImages.spiderMan}/>
          </View>
          <View className="mt-20 w-20 h-20 space-y-5">
              <Image className="w-36 h-48 rounded-xl" source={loginImages.blackAdam}/>
              <Image className="w-36 h-48 rounded-xl" source={loginImages.bladeRunner}/>
          </View>

        </View>
        <View className="items-center">
          <Text className="text-white text-3xl font-sans font-bold">Entreteminiento lo</Text>
          <Text className="text-white text-3xl font-sans font-bold">que tu necesitas</Text>
          <Text className="ml-8 mr-8 text-center mt-4 text-white text-sm ">Descarga y disfruta cuando quieras sin conexion en todo el mundo</Text>
          <View className="mt-6 border border-red-600 rounded-full">
          <Button
           color="#00000"
            title="Iniciar sesion"
            backgroundColor= 'transparent'
            />
          </View>
        </View>

        

     
        

    </SafeAreaView>
  )
}

export default HomeScreen