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
        className="w-16 h-16 ml-5 mt-5"
        tintColor="#DC2626"
        source={loginImages.videoCamera}
      />
      <View className="mt-5">
        <View className="items-center">
          <Title text="El pago se realizo de forma exitosa" />
        </View>
      </View>
      <View className="items-center">
        <View>
          <Image source={pagoImages.exito} />
        </View>
      </View>
      <View className="items-center">
        <Button text="Ir a pantalla de inicio" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
