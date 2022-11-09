import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { Component, useEffect } from "react";
import ListView from "../components/ListView";
import checkSesion from "../validation/sesion.handler";
import useFetchData from "../hook/use-fetch-data";

const SeriesScreen = ({ navigation }) => {
  useEffect(() => {
    checkSesion(navigation);
  }, []);

  const { data, loading } = useFetchData(
    "http://ec2-54-90-253-155.compute-1.amazonaws.com/api/series"
  );
  const comedia = data.data?.splice(0, 2);
  const accion = data.data?.splice(4, 6);
  const romance = data.data?.splice(6);

  return (
    <SafeAreaView className="flex  bg-white">
      {loading && <ActivityIndicator size="large" />}
      {!loading && (
        <ScrollView>
          <View className=" items-center w-96 h-52">
            {/* <Text className="text-red-500">tesadsada</Text> */}
            {/* <Image  className="w-96 h-52"  source={require('../assets/streaming.jpg')}/> */}
          </View>
          <View>
            <Text className="text-lg mt-4 font-semibold  mx-4">Comedia</Text>
            <ListView data={comedia} />
          </View>
          <View>
            <Text className="text-lg mt-4 font-semibold  mx-4">Acción</Text>
            <ListView data={accion} />
          </View>
          <View>
            <Text className="text-lg mt-4 font-semibold  mx-4">Romance</Text>
            <ListView data={romance} />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default SeriesScreen;
