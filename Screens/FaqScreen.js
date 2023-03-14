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
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const baseFontSize = 18;

const scaleFont = (size) => {
  const ratio = size / baseFontSize;
  const newSize = Math.round(ratio * width);
  return newSize;
};

export default function PaymentScreen() {
  return (
    <View style={styles.FaqContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.firstCard}>
          <View style={styles.cardFirst}>
            <View style={styles.vendorLogoContainer}>
              <Image source={vendorLogo} style={styles.vendorLogo} />
            </View>
            <Text style={styles.cardText}>Pay any vendor. Any invoice.</Text>
            <TouchableOpacity>
              <View style={styles.cardCont}>
                <Text style={styles.invoiceText}>Submit new invoices</Text>
                <Image source={rightArrowLogo} style={styles.arrowLogo} />
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
                </Text>
                <Image source={rightArrowLogo} style={styles.arrowLogoRight} />
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
                <Text style={styles.invoiceTextBottom}>Activate Card</Text>
                <Image source={rightArrowLogo} style={styles.arrowLogoBottom} />
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
  cardFirst: {
    backgroundColor: "#FFF8F3",
    padding: 5,
    paddingBottom: 10,
    paddingTop: 20,
    borderRadius: 10,
    width: "50%",
  },
  card: {
    padding: 5,
    paddingBottom: 20,
    paddingTop: 20,
    borderRadius: 10,
    marginLeft: 5,
    width: "50%",
  },
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
  },
  cardCont: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
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
    fontSize: scaleFont(0.9),

 
    color: "#070D59",
    fontWeight: 400,
    marginTop: 30,
  },
  cardTextBottom: {
    fontSize: scaleFont(0.9),

    color: "#070D59",
    fontWeight: 400,
    marginTop: 30,
  },
  invoiceText: {
    fontSize: scaleFont(0.75),

    color: "#707070",
    fontWeight: "400",
    justifyContent: "space-between",
    alignItems: "center",
  },
  invoiceTextMiddle: {
    fontSize: scaleFont(0.75),

    color: "#707070",
    fontWeight: "400",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  invoiceTextBottom: {
    fontSize: scaleFont(0.75),
  
    color: "#707070",
    fontWeight: "400",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  arrowLogo: {
    width: 10,
    height: 15,
    marginTop: 2,
    marginLeft: 7,
  },
  arrowLogoRight: {
    width: 10,
    height: 15,
    marginTop: 30,
    marginLeft: -24,
  },
  arrowLogoBottom: {
    width: 10,
    height: 15,

    marginLeft: 5,
  },
  cardLogoCont: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: "50%",
  },
  cardLogo: {
    width: 105,
    height: 66,
  },
  card1: {
    width: "50%",
  },
});
