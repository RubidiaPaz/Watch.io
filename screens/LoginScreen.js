import { View, Text,Image, SafeAreaView, Button} from 'react-native'
import React from 'react'
import loginImages from '../assets/loginImages';

const LoginScreen = () => {
  return (
    <SafeAreaView className="h-full w-full bg-black">
      <View className="mt-10">
        {/*div de camara y ayuda*/}
        <View className="ml-12">
          <View className="flex-row  justify-between mr-16 items-center">
            <Image source={loginImages.videoCamera} className="h-16 w-16" tintColor="red"/>
            <Text className="font-bold text-md text-white">Ayuda</Text>
          </View>
        </View>

        <View className="items-center mt-5">
            <Text className="font-bold text-3xl text-white">Inicio de Sesión</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen