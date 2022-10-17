import { View, Text, Image, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import Title from "../atoms/Title";
import { useNavigation } from "@react-navigation/native";
import loginImages from "../assets/loginImages";
import pagoImages from "../assets/pagoImages";
import Button from "../atoms/Button";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="h-full w-full  bg-black">
      <Image
        className="w-10 h-12 ml-7 mt-16"
        source={loginImages.logobn}
      />
      <View className="mt-12">
        <View className="items-center">
          <Title text="El pago se realizo de forma exitosa" />
        </View>
      </View>
      <View className="items-center mt-5">
        <View>
          <Image source={pagoImages.exito} />
        </View>
      </View>
      <View className="items-center">
        <Button text="Ir a pantalla de inicio" onSubmit={()=>{navigation.navigate('Perfil')}}/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
