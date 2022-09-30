import React from "react";
import { Text, StyleSheet } from "react-native";

const Title = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 34,
    lineHeight: 46,
    textAlign: "center",
    color: "white",
  },
});

export default Title;
