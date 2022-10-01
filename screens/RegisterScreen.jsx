import { View, Text, SafeAreaView, Image, TextInput, StyleSheet, TouchableHighlight, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import loginImages from '../assets/loginImages';
import { LinearGradient } from 'expo-linear-gradient';



const InputComponent = ({ placeholder, type, isError }) => (
    <>
        <TextInput
            placeholder={ placeholder }
            keyboardType={ type }
            style={ style.input }
            placeholderTextColor={'white'}
        />
        {
            isError ? (
                <Text
                    style = {{ color: '#640707', marginLeft: '8%', marginTop: 3 }}
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

                <View className='my-7 mx-5'>
                    <Text className='text-white text-4xl font-sans font-bold'>Registro</Text>
                </View>

                <View className='form-control'>
                    <InputComponent placeholder={'Correo Electronico'} type={'text'} isError={ false } />
                    <InputComponent placeholder={'Nombres'} type={'text'} isError={ false } />
                    <InputComponent placeholder={'Apellidos'} type={'text'} isError={ false } />
                    <InputComponent placeholder={'Contraseña'} type={'text'} isError={ false } />
                    <InputComponent placeholder={'Confirmar contraseña'} type={'text'} isError={ false } />
                </View>

                <View>
                    <TouchableHighlight>
                        <LinearGradient
                            colors={['#082EB4', '#640707']}
                            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                            style = { style.button }
                        >
                            <Text
                                style = { style.buttonText }
                            >Registrarse</Text>
                        </LinearGradient>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    input: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#082EB4',
        width: '90%',
        height: 50,
        color: 'white',
        marginHorizontal: '5%',
        paddingLeft: 15,
        marginTop: 10,
        fontFamily: 'font-sans',
    },
    button: {
        width: '90%',
        marginHorizontal: '5%',
        height: 45,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
    },
    buttonText: { 
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        width: '99%',
        backgroundColor: 'black',
        height: '96%',
        borderRadius: 19,
        margin: 1,
    }
    
})

export default RegisterScreen