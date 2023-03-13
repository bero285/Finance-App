import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import warningLogo from "../assets/warning.png";
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
    // flex: 1,
    height:410,
 
    marginTop: 20,
  },
  headText: {
    fontSize: 30,
    color: "#070D59",
    fontWeight: "400",
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
    fontSize: 24,
    color: "#070D59",
    fontWeight: "500",
  },
  credit: {
    marginTop: 40,
  },
  amountText: {
    fontSize: 25,
    color: "#070D59",
    fontWeight: "500",
  },
  creditText: {
    fontSize: 18,
    color: "#a9a9a9",
    fontWeight: "300",
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
    fontSize: 25,
    color: "#1AAE5F",
    fontWeight: "500",
  },
  baseRateCont: {
    width: "100%",
    height: 50,
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
    height: 80,
    backgroundColor: "#F1F3F8",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    padding: 7,
    marginTop: 10,
  },
  limitText: {
    width: "60%",
    fontSize: 18,
    color: "#a9a9a9",
    fontWeight: "300",
    justifyContent: "center",
  },
  limitButton: {
    backgroundColor: "white",
    width: 130,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  limmitButtonText: {
    color: "#0066FF",
    fontSize: 17,
    fontWeight: "500",
  },
});
