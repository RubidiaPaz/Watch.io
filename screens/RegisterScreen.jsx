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

const RegisterScreen = () => {  
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
        navigation.setOptions({
        headerShown: false
        })
    }, []);

    return (
        <SafeAreaView className='h-full w-full bg-black'>
            <ScrollView>
                <View className='flex-row mt-3'>
                    <View className='ml-5'>
                        <Image className="w-16 h-16 ml-5" tintColor='#DC2626' source={loginImages.videoCamera}/>
                    </View>
                </View>

                <View className='mt-5 mx-5'>
                    <Text className='text-white text-4xl font-sans font-bold text-center'>Registrate para iniciar tu mes gratis</Text>
                </View>

                <View className='mt-7 mx-5'>
                    <Text className='text-white text-4xl font-sans font-bold'>Registro</Text>
                </View>

                <View className='form-control'>
                    <InputComponent placeholder={'Correo Electronico'} type={'text'} isError={ false } />
                    <InputComponent placeholder={'Nombres'} type={'text'} isError={ false } />
                    <InputComponent placeholder={'Apellidos'} type={'text'} isError={ false } />
                    <InputComponent placeholder={'Contraseña'} type={''} isError={ false } secureText={true} />
                    <InputComponent placeholder={'Confirmar contraseña'} type={''} isError={ false } secureText={true}/>
                </View>

                <View>
                    <TouchableHighlight>
                        <LinearGradient
                            colors={['#082EB4', '#640707']}
                            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                            className='w-11/12 mx-auto h-12 my-6 border rounded-3xl justify-center align-middle'
                        >
                            <View
                                className='bg-black rounded-3xl m-0.5 flex-auto'>
                                <Text
                                    className='text-white text-center text-xl m-auto'
                                >Registrarse</Text>
                            </View>
                        </LinearGradient>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default RegisterScreen