import { View, Image, SafeAreaView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import Title from "../atoms/Title";
import { useNavigation } from "@react-navigation/native";
import loginImages from "../assets/loginImages";
import Plan from "../components/Plan";
import { planes } from "../const/planes";

const SelecionDePlan = () => {
  const navigation = useNavigation();
  const [planSelecionado, setPlanSelecionado] = useState(null);

  const handlePlanSelecionado = (id) => {
    if (id) {
      setPlanSelecionado(id);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="h-full w-full  bg-black">
      <Image
        className="w-16 h-16 ml-5 mt-10"
        tintColor="#DC2626"
        source={loginImages.videoCamera}
      />
      <View className="mt-5 p-5 mb-8">
        <View className="items-center">
          <Title text="Elije el plan que deseas adquirir" />
        </View>
      </View>
      <View className="items-center">
        {planes.map((plan) => (
          <Plan
            titulo={plan.titulo}
            precio={plan.precio}
            beneficios={plan.beneficios}
            key={plan.titulo}
            id={plan.id}
            onSubmit={handlePlanSelecionado}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default SelecionDePlan;
