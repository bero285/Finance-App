import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ActiveOrders() {
  return (
    <View style={styles.Container}>
      <Text style={styles.ActiveText}>Active Orders</Text>
      <TouchableOpacity>
        <Text style={styles.ActiveButtonText}>View All</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
  },
  ActiveText: {
    fontSize: 23,
    color: "#070D59",
    fontWeight: "500",
  },
  ActiveButtonText: {
  fontSize: 18,
  color: "#a9a9a9",
  fontWeight: "300",
  justifyContent: "center",
  }
});
