import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { Component, useEffect, useLayoutEffect } from "react";
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex  bg-black min-h-full">
      {loading && <ActivityIndicator size="large" />}
      {!loading && (
        <ScrollView>
          <View>
            <Text className="text-lg  mt-8 font-semibold  mx-4  text-[#FFFFFF]">
              Comedia
            </Text>
            <ListView data={data.splice(0, 2)} />
          </View>
          <View>
            <Text className="text-lg mt-4 font-semibold  mx-4  text-[#FFFFFF]">
              Acción
            </Text>
            <ListView data={data.splice(4, 6)} />
          </View>
          <View>
            <Text className="text-lg mt-4 font-semibold  mx-4  text-[#FFFFFF]">
              Romance
            </Text>
            <ListView data={data?.splice(6)} />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default SeriesScreen;
