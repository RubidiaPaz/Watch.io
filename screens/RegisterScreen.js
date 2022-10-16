import { View, Text, SafeAreaView, Image, TextInput, StyleSheet, TouchableHighlight, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import loginImages from '../assets/loginImages';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonComponent from '../atoms/Button';
import GradientButton from '../atoms/GradientButton';
import {authentication} from "../firebase-config"
import { createUserWithEmailAndPassword } from 'firebase/auth';



const InputComponent = ({ placeholder, type, isError,value, onChangeText, secureText = false }) => (
    <>
        <TextInput 
            className='border border-[#082EB4] rounded-2xl w-11/12 h-12 text-white mx-auto pl-5 mt-5 font-sans'
            placeholder={ placeholder }
            keyboardType={ type }
            placeholderTextColor={'white'}
            secureTextEntry={secureText}
            value={value}
            onChangeText={onChangeText}
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
    
    const [userEmail, setUserEmail] = useState("");
    const [firstNames, setFirstNames] = useState("");
    const [lastNames, setLastNames] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordConfirm, setUserPasswordConfirm] = useState("");

    // se registra el usuario 
    const RegisterUser= () =>{
        if (userPassword===userPasswordConfirm) {
            createUserWithEmailAndPassword (authentication,userEmail,userPassword)
        .then(()=>{
            console.log(response);
        })
        .catch((response)=>{
            console.log(response)
        })
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
        headerShown: false
        })
    }, []);

    return (
        <SafeAreaView className='h-full w-full bg-[#171719]'>
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
                    <InputComponent placeholder={'Correo Electronico'} value={userEmail} onChangeText={(userEmail) => setUserEmail(userEmail)} type={'email-address'} isError={ false } />
                    <InputComponent placeholder={'Nombres'} type={'text'} value={firstNames} onChangeText={(firstNames) => setFirstNames(firstNames)} isError={ false } />
                    <InputComponent placeholder={'Apellidos'} type={'text'} value={lastNames} onChangeText={(lastNames) => setLastNames(lastNames)} isError={ false } />
                    <InputComponent placeholder={'Contraseña'} type={''}  value={userPassword} onChangeText={(userPassword) => setUserPassword(userPassword)} isError={ false } secureText={true} />
                    <InputComponent placeholder={'Confirmar contraseña'}  value={userPasswordConfirm} onChangeText={(userPasswordConfirm) => setUserPasswordConfirm(userPasswordConfirm)} type={''} isError={ false } secureText={true}/>
                </View>

                <View className="mt-10 border-white  h-10">
                   <GradientButton text={"Registrarse"} onPressed={RegisterUser}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default RegisterScreen