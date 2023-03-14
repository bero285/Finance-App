import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const baseFontSize = 18;
const scaleFont = (size) => {
  const ratio = size / baseFontSize;
  const newSize = Math.round(ratio * width);
  return newSize;
};

export default function OrderScreen() {
  return (
    <View style={styles.orderContainer}>
      <View style={styles.orders}>
        <Text style={styles.ordersText}>Orders</Text>
        <TouchableOpacity>
          <Text style={styles.ordersButtonText}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.condition}>
        <View style={styles.active}>
          <Text style={styles.ordersButtonText}>Active</Text>
          <Text style={styles.ordersText}>24</Text>
        </View>
        <View style={styles.active}>
          <Text style={styles.ordersButtonText}>Finished</Text>
          <Text style={styles.ordersText}>124</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  orderContainer: {
    alignSelf: "center",
    width: "90%",
    marginTop: 20,
  },
  orders: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ordersText: {
    fontSize: scaleFont(1.2),
    color: "#070D59",
    fontWeight: "500",
  },
  ordersButtonText: {
    fontSize: scaleFont(0.81),
    color: "#707070",
    fontWeight: "400",
    justifyContent: "center",
  },
  condition: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  active: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "45%",
  },
});
