import React from "react";
import { Text, View } from "react-native";

const Total = ({ total }) => {
  return (
    <View>
      <Text className="text-4xl text-lg	w-32	text-white">Total a pagar:</Text>
      <Text className="text-4xl text-lg	w-32	text-white font-extrabold  w-20	">{`$ ${total.toFixed(
        2
      )}`}</Text>
    </View>
  );
};

export default Total;
