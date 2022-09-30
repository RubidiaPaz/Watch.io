import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ButtonComponent = ({ text, onSubmit }) => {
  return (
    <LinearGradient
      colors={["#182897", "#560E26"]}
      style={styles.linearGradient}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
    >
      <TouchableOpacity style={styles.defaultButton} onPress={onSubmit}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    marginLeft: 2,
    marginTop: 2,
    height: 45,
    width: 339,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  linearGradient: {
    borderRadius: 20,
    marginTop: 50,
    height: 50,
    width: 343,
  },
});

export default ButtonComponent;
