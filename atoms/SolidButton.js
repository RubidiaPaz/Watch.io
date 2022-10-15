import React from "react";
import { TouchableOpacity, Text } from "react-native";

const SolidButton = ({ text, onSubmit }) => {
  return (
    <TouchableOpacity
      onPress={onSubmit}
      className="rounded-[50px] min-h-[40] w-[216px] bg-indigo-500 flex justify-center bg-[#143452]"
    >
      <Text className="text-full text-white font-extrabold  text-center  w-[216px]">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default SolidButton;
