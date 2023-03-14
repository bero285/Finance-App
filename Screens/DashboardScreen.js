import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import warningLogo from "../assets/warning.png";
import { Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
const { width, height } = Dimensions.get("window");
const baseFontSize = 20;

const scaleFont = (size) => {
  const ratio = size / baseFontSize;
  const newSize = Math.round(ratio * width);
  return newSize;
};

export default function DashboardScreen() {
  return (
    <View style={styles.furhterContainer}>
      <Text style={styles.headText}>Dashboard</Text>

      <View style={styles.statement}>
        <View style={styles.statementContainer}>
          <Text style={styles.statementText}>Statement</Text>
          <View style={styles.creditContainer}>
            <View style={styles.credit}>
              <Text style={styles.amountText}> $12,456.00</Text>
              <View style={styles.approved}>
                <Text style={styles.creditText}>Approved Credit</Text>
                <Image source={warningLogo} style={styles.warningLogo} />
              </View>
            </View>
            <View style={styles.Recredit}>
              <Text style={styles.ReamountText}>$8,456.00</Text>
              <View style={styles.approved}>
                <Text style={styles.creditText}>Remaining Credit</Text>
                <Image source={warningLogo} style={styles.warningLogo} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.baseRateCont}>
        <View style={styles.baseRate}>
          <Text style={styles.creditText}>Base Rate</Text>
          <Image source={warningLogo} style={styles.warningLogo} />
        </View>
        <Text style={styles.amountText}>1%</Text>
      </View>
      <View style={styles.limitContainer}>
        <Text style={styles.limitText}>Learn how you can increase limit</Text>
        <TouchableOpacity style={styles.limitButton}>
          <Text style={styles.limmitButtonText}>Increase Limit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  furhterContainer: {
    width: "90%",

    marginTop: 20,
  },
  headText: {
    fontSize: scaleFont(1.5),
    color: "#070D59",
    fontWeight: "500",
    padding: 7,
  },
  statement: {
    marginTop: 30,
    padding: 7,
  },
  statementContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  statementText: {
    fontSize: scaleFont(1.2),
    color: "#070D59",
    fontWeight: "500",
  },
  credit: {
    marginTop: 40,
  },
  amountText: {
    fontSize: scaleFont(1.2),
    color: "#070D59",
    fontWeight: "500",
  },
  creditText: {
    fontSize: scaleFont(0.81),
    color: "#707070",
    fontWeight: "400",
    justifyContent: "center",
  },
  warningLogo: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  approved: {
    flexDirection: "row",
    alignItems: "center",
  },
  creditContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Recredit: {
    marginTop: 40,
  },
  ReamountText: {
    fontSize: scaleFont(1.2),
    color: "#1AAE5F",
    fontWeight: "500",
  },
  baseRateCont: {
    width: "100%",
  
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
    padding: 7,
  },
  baseRate: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  limitContainer: {
    width: "100%",
    backgroundColor: "#F1F3F8",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    padding: 7,
    paddingTop: 18,
    paddingBottom: 18,
    marginTop: 10,
  },
  limitText: {
    width: "50%",
    fontSize: scaleFont(0.82),
    color: "#999999",
    fontWeight: "400",
    justifyContent: "center",
  },
  limitButton: {
    backgroundColor: "white",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  limmitButtonText: {
    color: "#0066FF",
    fontSize: scaleFont(0.7),
    fontWeight: "500",
  },
});
