import { View, Image, SafeAreaView, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Title from "../atoms/Title";
import loginImages from "../assets/loginImages";
import Plan from "../components/Plan";
import { planes } from "../const/planes";
import checkSesion from "../validation/sesion.handler";


const SelecionDePlan = ({navigation}) => {
  // const navigation = useNavigation();
  const [planSelecionado, setPlanSelecionado] = useState("");


  useEffect(() => {
    //no le quites el if poque al ser un hook de tipo use effect
    //se ejecuta una vez cuando carga el componente y vas a hacer un loop infinito
    if (planSelecionado !== "") {
      navigation.navigate("pago", {
        planId: planSelecionado
      });
    }
  }, [planSelecionado])
  

  const handlePlanSelecionado = (id) => {
    setPlanSelecionado(id);
  };


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  
  useEffect(() => {
     checkSesion(navigation);
  }, [])
  

  return (
    <SafeAreaView className="h-full w-full  bg-black">
      <Image className="w-10 h-12 ml-7 mt-10" source={loginImages.logobn} />
      <View className="mt-5 p-5 mb-8">
        <View className="items-center">
          <Title text="Elije el plan que deseas adquirir" />
       
        </View>
      </View>
      <View className="items-center flex">
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
