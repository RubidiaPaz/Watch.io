import {View,Text,SafeAreaView,Image,TextInput,ScrollView, Alert, Modal,Pressable} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import loginImages from "../assets/loginImages";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GradientButton from "../atoms/GradientButton";
import { authentication } from "../firebase-config";
import { createUserWithEmailAndPassword, updateProfile,} from "firebase/auth";
import FieldInput from "../components/FieldInput";
import validation from "../validation/validate";



const RegisterScreen = () => {
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState(
    {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      paswordConfirm: "",
     })
  const [submited, setSubmited]= useState(false)


  const RegisterUser = () => {
    setSubmited(!submited)
    // console.log('validado: ', )

    if (validation(userInfo, "all")) {
        createUserWithEmailAndPassword(authentication, userInfo.email, userInfo.password)
        .then(function (result) {
          return updateProfile(result.user,{
            displayName: `${userInfo.firstName} ${userInfo.lastName}`,
            photoURL : `https://avatars.dicebear.com/api/avataaars/${userInfo.firstName.trim()}.svg`
          });
        })
        .then(
          
        )
        .catch(function (error) {
          console.log(error.message)
          setMessage(error.message)
        });
        return
      }
      
     
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="h-full w-full bg-[#171719] flex justify-center items-center">
      <ScrollView >
        <View className="flex-row mt-10">
          <View className="ml-5">
            <Image
              className="w-10 h-12 mt-10"
              source={loginImages.logobn}
            />
          </View>
        </View>

        {/* legend */}
        <View className="mt-5 mx-5">
          <Text className="text-white text-4xl  font-bold text-center">
            Registrate para iniciar tu mes gratis
          </Text>
        </View>



        {/* data input */}
        <View className="form-control mt-3">

          <FieldInput  hint={"Correo"} type={"email-address"} value={userInfo.email} onChangeText={e=>setUserInfo(prev => ({...prev, email: e}))} secureTextEntry={false} validateType={"email"}/>
          {(submited && validation(userInfo.email,"email"))}
          
          <FieldInput  hint={"Nombre"} type={"default"} value={userInfo.firstName} onChangeText={e=>setUserInfo(prev => ({...prev, firstName: e}))} secureTextEntry={false} validateType={"name"}/>
          {(submited && validation(userInfo.firstName,"name")) }
          
          <FieldInput  hint={"Apellidos"} type={"default"} value={userInfo.lastName} onChangeText={e=>setUserInfo(prev => ({...prev, lastName: e}))} secureTextEntry={false} validateType={"name"}/>
          {(submited && validation(userInfo.lastName,"name")) }
          
          <FieldInput  hint={"Contraseña"} type={"password"} value={userInfo.password} onChangeText={e=>setUserInfo(prev => ({...prev, password: e}))} secureTextEntry={true} validateType={"password"}/>
          {(submited && validation(`${userInfo.password}`,"password")) }
          
          <FieldInput  hint={"Confirma la Contraseña"} type={"password"} value={userInfo.paswordConfirm} onChangeText={e=>setUserInfo(prev => ({...prev, paswordConfirm: e}))} secureTextEntry={true} validateType={"password"}/>
          {(!submited && (userInfo.password == userInfo.paswordConfirm) )
            ?  null
            : <Text className="text-red-500 px-8 mt-2 ">Contraseña no coinciden</Text>
          }
          

        </View>

        <View className="mt-10 border-white  h-10">
          <GradientButton text={"Registrarse"} onPressed={RegisterUser} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RegisterScreen;
