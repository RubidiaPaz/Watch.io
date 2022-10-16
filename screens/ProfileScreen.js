import { View, Text, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import loginImages from '../assets/loginImages';
import GradientButton from "../atoms/GradientButton";

const ProfileScreen = () => {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
        navigation.setOptions({
        headerShown: false
        })
    }, []);
  return (
    <SafeAreaView className='h-full w-full bg-[#171719]'>
                <View className='items-center mt-10'>
                    <Image className="w-10 h-12 mt-10" source={loginImages.logobn}/>
                </View>
                <View className='mt-5 mx-5'>
                    <Text className='text-white text-2xl mt-5 font-sans font-bold text-center'>¿Quién está viendo ahora?</Text>
                </View>

                <View className='form-control mt-28'>
            
                    <View className="mx-32 gap-y-3">
                        <TouchableOpacity className="w-full rounded-lg ">
                            <View className=" p-3 flex justify-between items-center w-full py-4">
                                <Image  className="w-20 h-20 mb-2"  source={loginImages.perfil}/>
                                <View className="flex w-32">
                                    <Text className="text-white font-semibold text-center">Perfil 1</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View
                        className='text-white text-center text-xl mt-36'>
                        <GradientButton text={"Ingresar"} onPressed={()=>navigation.navigate('')}/>
                    </View>
                </View>
        </SafeAreaView>
  )
}

export default ProfileScreen