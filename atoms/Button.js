import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ButtonComponent = ({ text, onSubmit }) => {
  return (
    <LinearGradient
      colors={["#182897", "#560E26"]}
      className="rounded-[20px] w-[343px] h-[50px] mt-12"
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
    >
      <TouchableOpacity
        onPress={onSubmit}
        className="mt-0.5	ml-0.5 w-[339px] h-[45px] flex justify-items-center justify-center bg-black rounded-[20px]"
      >
        <Text className="text-4xl text-lg	w-32	text-white font-extrabold  text-center  w-[339px]">
          {text}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ButtonComponent;
