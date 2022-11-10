import { View, Text, Image, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import { Motion } from "@legendapp/motion"
import loginImages from '../assets/loginImages'

const Splash = ({ navigation }) => {
  let finish = 0;

  function changeScreen() {
    if (finish === 1) {
      navigation.navigate("Inicio");
    }
  }

  setTimeout(() => {
    navigation.navigate("Inicio");
  }, 2000);
  setTimeout(() => {
    finish = 500;
    console.log(finish);
  }, 1500);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="h-full w-screen  bg-[#171719] flex items-center justify-center">
      <Motion.View
        initial={{ y: -620, scale: 1.6 }}
        animate={{ x: finish, y: 0, scale: 1.8 }}
        whileTap={{ y: 20 }}
        transition={{ type: "spring" }}
        rotate={{ x: 50 }}
        animateProps={{
          fill: true ? "#F81FEC" : "#59B0F8",
        }}
        viewport={{ once: false }}
        className=""
      >
        <Image
          className="ml-6 w-[200px] h-20 animate-pulse "
          source={loginImages.logoC}
        />
  
      </Motion.View>
    </SafeAreaView>
  );
};

export default Splash