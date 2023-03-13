import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DashboardScreen from "./DashboardScreen";
import OrderScreen from "./OrderScreen";
import FaqScreen from "./FaqScreen";
import { ScrollView } from "react-native";
import PaymentScreen from "./PaymentScreen";
import ActiveOrderScreen from "./ActiveOrderScreen"
export default function AllScreens() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <DashboardScreen />
        <OrderScreen />
        <PaymentScreen />
        <FaqScreen />
       <ActiveOrderScreen/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 2,

  },
});
