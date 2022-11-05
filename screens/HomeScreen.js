import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import loginImages from "../assets/loginImages";
import { useNavigation } from "@react-navigation/native";

const Data = [
  {
    id: "1",
    image: loginImages.spiderMan,
  },
  {
    id: "2",
    image: loginImages.blackAdam,
  },
  {
    id: "3",
    image: loginImages.bladeRunner,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://ec2-54-90-253-155.compute-1.amazonaws.com/api/movies')
    .then(res => res.json())
    .then(({data}) => {
        setMovies(data)
    })
  
  }, [])
  

  return (
    <SafeAreaView className="h-full w-full bg-[#171719] flex justify-center items-center">
      <View className="flex-auto mt-10">
        <View className="flex flex-row justify-between">
          <View className="ml-3">
            <Image 
            className="w-10 h-12" 
            source={loginImages.logobn} />
          </View>
          <View className="mt-0">
            <TouchableOpacity className="mb-2">
              <Image
                className="w-12 h-12 ml-5 mr-3"
                source={loginImages.perfil}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="h-96">
          <Image className="w-full h-92" source={{uri:movies[3]?.image}} />
          <View className="absolute bottom-3 w-full">
            <Text className="text-slate-50 text-center mb-1 font-bold text-2xl">
              {movies[21]?.title }
            </Text>
            <Text className="text-slate-50 text-center mb-2 text-l font-bold">
              {movies[21]?.listed_in} 
            </Text>
            <TouchableOpacity className="relative">
              <View className="w-3/12 bg-white rounded-md flex flex-row mx-auto justify-center py-1">
                <Image
                  className="w-6 h-6 my-auto mr-2"
                  source={loginImages.videoplays}
                />
                <Text className="text-lg font-bold">Play</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text className="text-white text-lg m-2">
            Populares de Watch.io
          </Text>
          <FlatList
            horizontal
            data={Data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity>
      <View className="w-40 h-56 mr-4">
        <Image className="w-full h-full rounded-2xl" source={item.image} />
      </View>
    </TouchableOpacity>
  );
};

export default HomeScreen;
