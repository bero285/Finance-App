import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native";
import chasebankLogo from "../assets/chaseBank.png";
import rightArrowLogo from "../assets/rightArrow.png";
import vendorLogo from "../assets/vendor.png";
import questionLogo from "../assets/anotherquestion.png";
import { TouchableOpacity } from "react-native";
export default function PaymentScreen() {
  return (
    <View style={styles.paymentContainer}>
      <View style={styles.payment}>
        <Text style={styles.paymentText}>Primry Payment Method</Text>
        <TouchableOpacity>
          <Text style={styles.paymentButtonText}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.condition}>
        <View style={styles.active}>
          <Image source={chasebankLogo} style={styles.chaseLogo} />
          <Text style={styles.paymentButtonText}>Chase Bank ****1212</Text>
        </View>

        <Text style={styles.paymentButtonTextGreen}>Active</Text>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  paymentContainer: {
    width: "90%",
    marginTop: 50,
    alignSelf:"center",
  },
  payment: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paymentText: {
    fontSize: 23,
    color: "#070D59",
    fontWeight: "500",
  },
  paymentButtonText: {
    fontSize: 18,
    color: "#a9a9a9",
    fontWeight: "300",
    justifyContent: "center",
  },
  paymentButtonTextGreen: {
    fontSize: 18,
    color: "#1AAE5F",
    fontWeight: "300",
    justifyContent: "center",
  },
  condition: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
  },
  active: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",

    width: "60%",
  },
  chaseLogo: {
    width: 30,
    height: 30,
  },

  cardContainer: {
    marginTop: 30,
  },

  firstCard: {
    flexDirection: "row",
    paddingBottom: 30,
  },
  cardCont: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  vendorLogoContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#FFC423",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  questionLogoContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#E0BEA3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  vendorLogo: {
    width: 18,
    height: 22,
  },
  cardText: {
    fontSize: 21,
    width: 180,
    color: "#070D59",
    fontWeight: 400,
    marginTop: 40,
  },
  invoiceText: {
    fontSize: 16,
    width: 180,
    color: "#a9a9a9",
    fontWeight: "400",
    justifyContent: "center",
    alignItems: "center",
    marginTop:10,
  },
  arrowLogo: {
    // width:8,
    // height:24,
    
  },
});
