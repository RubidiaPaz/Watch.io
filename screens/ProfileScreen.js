import { View, Text, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import loginImages from '../assets/loginImages';
import GradientButton from "../atoms/GradientButton";
import {signOut, onAuthStateChanged} from "firebase/auth";
import { authentication } from '../firebase-config';
import { SvgUri } from 'react-native-svg';
import LoaderSVG from '../atoms/LoaderSVG';


const ProfileScreen = () => {
    const navigation = useNavigation();
 
    const SingOut = async () => {
        signOut(authentication)
        .then(
            navigation.navigate('Inicio')
        )
        .catch(res=>{
            console.log(res)
        })
      }
  
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
                        <TouchableOpacity className="w-full rounded-lg "
                            onPress={()=>{navigation.navigate("PeliculasScreen")}}
                        >
                            <View className=" p-3 flex justify-between items-center w-full py-4">
                  
                              
                                <LoaderSVG/>
                             
                                <View className="flex w-32">
                                    <Text className="text-white font-semibold text-center capitalize ">Perfil: {authentication.currentUser.displayName}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View
                        className='text-white text-center text-xl mt-36'>
                        <GradientButton text={"Administrar Perfil"} onPressed={()=>navigation.navigate('')}/>
                    </View>
                    <View
                        className='text-white text-center text-xl mt-10'>
                        <GradientButton text={"Cerrar Sesion"} onPressed={SingOut}/>
                    </View>
                </View>
        </SafeAreaView>
  )
}

export default ProfileScreen