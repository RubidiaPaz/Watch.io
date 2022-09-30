import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Total = ({ total }) => {
  return (
    <View>
      <Text style={styles.totalTile}>Total a pagar:</Text>
      <Text style={styles.totalCost} className="mt-5">{`$ ${total.toFixed(
        2
      )}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  totalTile: {
    fontSize: 18,
    color: "white",
    width: 127,
  },
  totalCost: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    width: 89,
    marginTop: 10,
  },
});

export default Total;
