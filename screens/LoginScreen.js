import {
  View,Text,Image,SafeAreaView,Button,TextInput,Keyboard,ActivityIndicator
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {authentication} from "../firebase-config";
import loginImages from "../assets/loginImages";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import GradientButton from "../atoms/GradientButton";
import GradientButtonImage from "../atoms/GradientButtonImage";
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";


const LoginScreen = () => {
  
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [checked, setChecked] = React.useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(authentication,(user) =>{
  //     if(user){
  //       navigation.navigate('SelecionDePlan')
  //     }
  //   })
  //   return unsubscribe
  // }, [])
  

  onAuthStateChanged(authentication, (user) => {
    if (user) {
      navigation.navigate('SelecionDePlan')
    } else {
      // User is signed out
      // ...
    }
  });
  const LoginWithPassword = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(authentication,userEmail, userPassword)
      .then(res=>{console.log(res)})
      setLoading(false);
    } catch (e) {
      alert(e);
    }
    
  }

  if(loading) {
    return (
         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
             <ActivityIndicator size="large" color={'#fff'} />
         </View>
    )
   }
  
  // const LoginWithPassword = () => {
  //   signInWithEmailAndPassword(authentication, userEmail, userPassword)
  //     .then((res) => {
  //       console.log("login response: ", res);
  //     })
  //     .catch((res) => {
  //       console.log("login error: ", res);
  //     });
  // };

  return (
    <SafeAreaView className="h-full w-full bg-[#171719]">
      <View className="mt-28">
        {/*div de camara y ayuda*/}
        <View className="ml-10">
          <View className="flex-row  justify-between mr-16 items-center">
            <Image
              source={loginImages.logobn} className="h-12 w-10"
            />
            <Text className="font-bold text-md text-white">Ayuda</Text>
          </View>
        </View>

        <View className="items-center mt-10">
          <Text className="font-bold text-3xl text-white">
            Inicio de Sesión
          </Text>
        </View>

        <View className="items-center mt-10 px-8">
          <TextInput
            value={userEmail}
            onChangeText={(userEmail) => setUserEmail(userEmail)}
            className="w-full border border-[#082eb4] p-2 rounded-xl"
            placeholder="Correo Electrónico"
            color="white"
            placeholderTextColor="#8b9cb5" //tono gris para placeholder
            autoCapitalize="none" //es para que no ponga en mayuscula la pirmera letra en escribir
            keyboardType="email-address" //formato de correo en teclado
            returnKeyType="next"
            //onSubmitEditing={()=>}
            blurOnSubmit={false}
          />
        </View>

        <View className="items-center mt-10 px-8">
          <TextInput
            className="w-full border border-[#082EB4]  p-2 rounded-xl "
            onChangeText={(userPassword) => setUserPassword(userPassword)}
            value={userPassword}
            placeholder="Contraseña" //12345
            placeholderTextColor="#8b9cb5"
            keyboardType="default"
            color="white"
            // ref={passwordInputRef}
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true} //para que la contraseña no se vea
            // underlineColorAndroid="#f000"
            returnKeyType="next"
          />
        </View>
      </View>

      <View className="flex-row items-center ml-6 mt-6">
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
          color={"green"}
          uncheckedColor="white"
        />
        <Text className="text-white">Recordarme</Text>
      </View>

      <View className="space-y-2">
        <View className='text-white text-center text-xl mt-10'>
          <GradientButton text={"Ingresar"} onPressed={LoginWithPassword}/>
        </View>
        
        <View className="items-center justify-center">
            <Text className="text-white text-xs p-1"> O continuar con </Text>
        </View>
        <View className='text-white text-center text-xl mt-10'>
          <GradientButtonImage text={"Iniciar Sesión"} onPressed={()=>navigation.navigate('')}/>
        </View>

        <Text className="text-white text-center ">
          ¿No tienes una cuenta?
          <Text
            onPress={()=>navigation.navigate('Registro')}
            style={{ fontWeight: "bold" }}
          >
            {" "}
            Registrate aquí
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
