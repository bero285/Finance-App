import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native";
import chasebankLogo from "../assets/chaseBank.png";
import rightArrowLogo from "../assets/rightArrow.png";
import vendorLogo from "../assets/vendor.png";
import starLogo from "../assets/star.png";
import questionLogo from "../assets/anotherquestion.png";
import cardLogo from "../assets/card.png";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function PaymentScreen() {
  return (
    <View style={styles.FaqContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.firstCard}>
          <View style={styles.card}>
            <View style={styles.vendorLogoContainer}>
              <Image source={vendorLogo} style={styles.vendorLogo} />
            </View>
            <Text style={styles.cardText}>Pay any vendor. Any invoice.</Text>
            <TouchableOpacity>
              <View style={styles.cardCont}>
                <Text style={styles.invoiceText}>
                  Submit new invoices
                  <Image source={rightArrowLogo} style={styles.arrowLogo} />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <View style={styles.questionLogoContainer}>
              <Image source={questionLogo} style={styles.vendorLogo} />
            </View>
            <Text style={styles.cardText}>Need Support?</Text>
            <TouchableOpacity>
              <View style={styles.cardCont}>
                <Text style={styles.invoiceTextMiddle}>
                  Check out our FAQs for common questions
                  <Image source={rightArrowLogo} style={styles.arrowLogo} />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.cardContainerBottom}>
        <View style={styles.firstCard}>
          <View style={styles.card1}>
            <View style={styles.starLogoContainer}>
              <Image source={starLogo} style={styles.vendorLogo} />
            </View>
            <Text style={styles.cardTextBottom}>
              Special offer to take our credit card
            </Text>
            <TouchableOpacity>
              <View style={styles.cardCont}>
                <Text style={styles.invoiceTextBottom}>
                  Activate Card
                  <Image source={rightArrowLogo} style={styles.arrowLogo} />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.cardLogoCont}>
            <Image source={cardLogo} style={styles.cardLogo} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FaqContainer: {
    width: "90%",
    marginTop: 50,
    paddingBottom: 20,
    alignSelf: "center",
  },

  cardContainer: {
    marginTop: 30,
  },
  cardContainerBottom: {
    marginTop: 30,
    backgroundColor: "rgba(0, 102, 255, 0.2)",
    padding: 15,
    borderRadius: 10,
  },
  firstCard: {
    flexDirection: "row",
    // paddingBottom: 30,
  },
  cardCont: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
    justifyContent: "space-between",

    width: "90%",
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
  starLogoContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#0066FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  vendorLogo: {
    width: 18,
    height: 22,
  },
  cardText: {
    fontSize: 23,
    width: 200,
    height: 60,
    color: "#070D59",
    fontWeight: 400,
    marginTop: 30,
  },
  cardTextBottom: {
    fontSize: 20,
    width: 190,
    color: "#070D59",
    fontWeight: 400,
    marginTop: 30,
  },
  invoiceText: {
    fontSize: 15,
    width: 180,
    color: "#a9a9a9",
    fontWeight: "400",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 10,
  },
  invoiceTextMiddle: {
    fontSize: 15,
    width: 180,
    color: "#a9a9a9",
    fontWeight: "400",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
  },
  invoiceTextBottom: {
    fontSize: 16,
    width: 180,
    color: "#a9a9a9",
    fontWeight: "400",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  arrowLogo: {
    // width:8,
    // height:24,
    marginLeft: 10,
  },
  cardLogoCont: {
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor:"red",
    width: "45%",
  },
  cardLogo: {
    width: 105,
    height: 66,
  },
});
