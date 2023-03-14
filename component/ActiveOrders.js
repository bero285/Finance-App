import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const baseFontSize = 18;

const scaleFont = (size) => {
  const ratio = size / baseFontSize;
  const newSize = Math.round(ratio * width);
  return newSize;
};
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
    fontSize: scaleFont(1.1),
    color: "#070D59",
    fontWeight: "500",
  },
  ActiveButtonText: {
  fontSize: scaleFont(0.8),
  color: "#707070",
  fontWeight: "400",
  justifyContent: "center",
  }
});
