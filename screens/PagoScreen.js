import { View, SafeAreaView, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../atoms/Title";
import Total from "../atoms/Total";
import pagoImages from "../assets/pagoImages";
import loginImages from "../assets/loginImages";
import FormularioDePago from "../atoms/FormularioDePago";

import React, { useLayoutEffect } from "react";

const PagoScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="h-full w-full  bg-[#171719] ">
      <View className="flex-row mt-10">
        <View className="ml-5">
          <View className=" items-center">
            <Image
              className="w-10 h-12 ml-5 mt-5"
              source={loginImages.logobn}
            />
          </View>
        </View>
      </View>
      <View className="ml-5">
        <View className="items-center">
          <Title text="Paga con:" />
        </View>
      </View>
      <View className="ml-5 mt-5">
        <View className="flex-row">
          <Image source={pagoImages.debito} />
          <Image source={pagoImages.paypal} />
          <Image source={pagoImages.bitcoin} />
        </View>
      </View>
      <View className="flex-row mt-10 p-5 space-x-10">
        <Total total={7} />
        <Image source={pagoImages.paymentMethods} />
      </View>
      <ScrollView className="p-5">
        <FormularioDePago />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PagoScreen;
