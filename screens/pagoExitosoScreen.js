import { View, Text, Image, SafeAreaView } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import Title from "../atoms/Title";
import { useNavigation } from "@react-navigation/native";
import loginImages from "../assets/loginImages";
import pagoImages from "../assets/pagoImages";
import Button from "../atoms/Button";
import { ref, child, get,set } from "firebase/database";
//getDatabase() & getAuth
import { database, authentication } from "../firebase-config";
import checkSesion from "../validation/sesion.handler";



const HomeScreen = ({ route, navigation }) => {
  const { planId } = route.params;
  // console.log("pago exitoso", JSON.stringify(planId));

  function writeUserPlanInRTD() {
    let uuid = authentication.currentUser.uid;
    console.log(uuid);
    set(ref(database, "users/" + uuid), {
      planType: planId,
    })
      .catch((err) => console.log(err))
      .finally(navigation.navigate("Perfil"));
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    checkSesion(navigation);
  }, []);

  return (
    <SafeAreaView className="h-full w-full  bg-[#171719]">
      <Image className="w-10 h-12 ml-7 mt-16" source={loginImages.logobn} />
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
        <Button
          text="Ir a pantalla de inicio"
          onSubmit={writeUserPlanInRTD()}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
