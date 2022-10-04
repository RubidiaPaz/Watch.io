import React from "react";
import { Text } from "react-native";

const Title = ({ text }) => {
  return (
    <Text className="text-4xl font-extrabold	text-white text-center">
      {text}
    </Text>
  );
};

export default Title;
