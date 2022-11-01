import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import loginImages from "../assets/loginImages";
import GradientButton from "../atoms/GradientButton";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { SvgUri } from "react-native-svg";
import LoaderSVG from "../atoms/LoaderSVG";
import { ref, child, get, set } from "firebase/database";
import { database, authentication } from "../firebase-config";

const dbRef = ref(database);
//   let userId='eqwewqeqw'
//   set(ref(database, 'usuario/' + userId), {
//     username: userId
//   });

const ProfileScreen = ({ navigation }) => {
  const [plan, setplan] = useState();
  let uuid = authentication.currentUser.uid;

  get(child(dbRef, `users/${uuid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setplan(snapshot.val().planType);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  const SingOut = async () => {
    signOut(authentication)
      .then(navigation.navigate("Inicio"))
      .catch((res) => {
        console.log(res);
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="h-full w-full bg-[#171719]">
      <View className="items-center mt-10">
        <Image className="w-10 h-12 mt-10" source={loginImages.logobn} />
      </View>
      <View className="mt-5 mx-5">
        <Text className="text-white text-2xl mt-5 font-sans font-bold text-center">
          ¿Quién está viendo ahora?
        </Text>
        <Text className="text-white font-semibold text-center capitalize ">
          Tipo de Plan: {plan}
        </Text>
      </View>

      <View className="form-control mt-28">
        <View className="mx-32 gap-y-3">
          <TouchableOpacity
            className="w-full rounded-lg "
            onPress={() => {
              navigation.navigate("PeliculasScreen");
            }}
          >
            <View className=" p-3 flex justify-between items-center w-full py-4">
              <LoaderSVG />

              <View className="flex w-32">
                <Text className="text-white font-semibold mb-5 text-center capitalize">
                  {authentication.currentUser.displayName}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex w-32">
          <Text className="text-white font-semibold text-center capitalize ">
            Perfil: {authentication?.currentUser?.displayName}
          </Text>
        </View>
      </View>

      <View className="text-white text-center text-xl mt-36">
        <GradientButton
          text={"Administrar Perfil"}
          onPressed={() => navigation.navigate("")}
        />
      </View>
      <View className="text-white text-center text-xl mt-10">
        <GradientButton text={"Cerrar Sesion"} onPressed={SingOut} />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
