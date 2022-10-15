import { View, Text, SafeAreaView, Image, TextInput, StyleSheet, TouchableHighlight, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import loginImages from '../assets/loginImages';
import { LinearGradient } from 'expo-linear-gradient';

const InputComponent = ({ placeholder, type, isError, secureText = false }) => (
    <>
        <TextInput
            className='border border-[#082EB4] rounded-2xl w-11/12 h-12 text-white mx-auto pl-5 mt-5 font-sans'
            placeholder={ placeholder }
            keyboardType={ type }
            placeholderTextColor={'white'}
            secureTextEntry={secureText}
        />
        {
            isError ? (
                <Text
                    className='text-[#fc3f3f] ml-7 mt-1'
                >Campo obligatorio</Text>
            ) : ('')
        }
        
    </>
);

const ProfileScreen = () => {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
        navigation.setOptions({
        headerShown: false
        })
    }, []);
  return (
    <SafeAreaView className='h-full w-full bg-black'>
            <ScrollView>
                <View className='items-center mt-10'>
                    <Image className="w-16 h-16" tintColor='#DC2626' source={loginImages.videoCamera}/>
                </View>
                <View className='mt-5 mx-5'>
                    <Text className='text-white text-4xl font-sans font-bold text-center'>¿Quién está viendo ahora?</Text>
                </View>

                <View className='form-control'>
                    <View className='mt-5 items-center'>
                        <Image className="w-16 h-16" tintColor='#DC2626' source={loginImages.perfil}/>
                    </View>
                    <View className='mt-3 mx-5'>
                        <Text className='text-white text-base font-sans font-bold text-center'> Perfil 1 </Text>
                    </View>

                    <TouchableHighlight>
                        <LinearGradient
                            colors={['#082EB4', '#640707']}
                            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                            className='w-11/12 mx-auto h-12 my-80 border rounded-3xl justify-center align-middle'
                        >
                            <View
                                className='bg-black rounded-3xl m-0.5 flex-auto'>
                                <Text
                                    className='text-white text-center text-xl m-auto'
                                >Administrar Perfiles</Text>
                            </View>
                        </LinearGradient>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </SafeAreaView>
  )
}

export default ProfileScreen