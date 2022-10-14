import React from "react";
import { View, Text, Image } from "react-native";
import planImages from "../assets/planImages";
import SolidButton from "../atoms/SolidButton";

const Plan = ({ titulo, precio, beneficios, onSubmit, id }) => {
  return (
    <View
      key={titulo}
      className="bg-white rounded-[10px] min-h-[200] w-[334px] mb-20"
    >
      <View className="min-h-[62] w-[62]  bg-[#143452] rounded-[50px] flex items-center justify-center absolute right-0	top-[-45px]">
        <Text className="text-white text-base">
          {precio ? `$${precio.toFixed(2)}` : "Free"}
        </Text>
      </View>
      <Text className="text-black my-3 ml-8 font-bold text-base">{titulo}</Text>
      <View className="ml-5">
        {beneficios.map((beneficio) => (
          <View
            className="flex-1 flex-row pb-2 align-middle items-center	"
            key={beneficio}
          >
            <Image source={planImages.check} />
            <Text className="ml-5 text-base">{beneficio}</Text>
          </View>
        ))}
      </View>
      <View className="flex justify-center w-[334px]  items-center">
        <SolidButton text="Adquirir" onSubmit={() => onSubmit(id)} />
      </View>
    </View>
  );
};

export default Plan;
