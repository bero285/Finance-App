import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import closeLogo from "../assets/close.png";
import dashboardLogo from "../assets/dashboard.png";
import cartLogo from "../assets/cart.png";
import paymentLogo from "../assets/paymentLogo.png";
import questionLogo from "../assets/questionLogo.png";
import seetingsLogo from "../assets/seetingsLogo.png";
import helpLogo from "../assets/helpLogo.png";

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const baseFontSize = 18;

const scaleFont = (size) => {
  const ratio = size / baseFontSize;
  const newSize = Math.round(ratio * width);
  return newSize;
};
export default function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
        <Image
          source={closeLogo}
          style={{ width: 35, height: 35, margin: 10 }}
        />
      </TouchableOpacity>

      <View
        style={[
          styles.itemContainer,
          props.state.routeNames[props.state.index] === "allScreen" &&
            styles.activeItemContainer,
        ]}
      >
        <DrawerItem
          label="Dashboard"
          icon={({ color, size }) => (
            <Image source={dashboardLogo} style={styles.logo} />
          )}
          labelStyle={[
            styles.text,
            props.state.routeNames[props.state.index] === "allScreen" &&
              styles.activeText,
          ]}
          onPress={() => props.navigation.navigate("allScreen")}
          activeTintColor="red"
          inactiveTintColor="black"
        />
      </View>
      <View
        style={[
          styles.itemContainer,
          props.state.routeNames[props.state.index] === "order" &&
            styles.activeItemContainer,
        ]}
      >
        <DrawerItem
          label="Orders"
          icon={({ color, size }) => (
            <Image source={cartLogo} style={styles.logo} />
          )}
          labelStyle={[
            styles.text,
            props.state.routeNames[props.state.index] === "order" &&
              styles.activeText,
          ]}
          onPress={() => props.navigation.navigate("order")}
          activeTintColor="red"
          inactiveTintColor="black"
        />
      </View>

      <View
        style={[
          styles.itemContainer,
          props.state.routeNames[props.state.index] === "payment" &&
            styles.activeItemContainer,
        ]}
      >
        <DrawerItem
          label="payment"
          icon={({ color, size }) => (
            <Image source={paymentLogo} style={styles.logo} />
          )}
          labelStyle={[
            styles.text,
            props.state.routeNames[props.state.index] === "payment" &&
              styles.activeText,
          ]}
          onPress={() => props.navigation.navigate("payment")}
          activeTintColor="red"
          inactiveTintColor="black"
        />
      </View>

      <View
        style={[
          styles.itemContainer,
          props.state.routeNames[props.state.index] === "FAQ" &&
            styles.activeItemContainer,
        ]}
      >
        <DrawerItem
          label="FAQ"
          icon={({ color, size }) => (
            <Image source={questionLogo} style={styles.logo} />
          )}
          labelStyle={[
            styles.text,
            props.state.routeNames[props.state.index] === "FAQ" &&
              styles.activeText,
          ]}
          onPress={() => props.navigation.navigate("FAQ")}
          activeTintColor="red"
          inactiveTintColor="black"
        />
      </View>

      <View
        style={[
          styles.itemContainer,
          props.state.routeNames[props.state.index] === "seetings" &&
            styles.activeItemContainer,
        ]}
      >
        <DrawerItem
          label="seetings"
          icon={({ color, size }) => (
            <Image source={seetingsLogo} style={styles.logo} />
          )}
          labelStyle={[
            styles.text,
            props.state.routeNames[props.state.index] === "seetings" &&
              styles.activeText,
          ]}
          onPress={() => props.navigation.navigate("seetings")}
          activeTintColor="red"
          inactiveTintColor="black"
        />
      </View>
      <View style={styles.bottomItemContainer}>
        <View
          style={[
            styles.itemContainerNew,
            props.state.routeNames[props.state.index] === "" &&
              styles.activeItemContainer,
          ]}
        >
          <DrawerItem
            label="Become a merchant"
            labelStyle={styles.text}
            activeTintColor="red"
            inactiveTintColor="black"
          />
        </View>

        <View
          style={[
            styles.itemContainerRenew,
            props.state.routeNames[props.state.index] === "" &&
              styles.activeItemContainer,
          ]}
        >
          <DrawerItem
            label="Rewards"
            labelStyle={styles.text}
            activeTintColor="red"
            inactiveTintColor="black"
          />
        </View>
        <View
          style={[
            styles.itemContainerRenew,
            props.state.routeNames[props.state.index] === "" &&
              styles.activeItemContainer,
          ]}
        >
          <DrawerItem
            label={() => {
              return (
                <View style={styles.helpContainer}>
                  <Text style={styles.text}>Help Center</Text>
                  <Image source={helpLogo} style={styles.bottomLogo} />
                </View>
              );
            }}
            activeTintColor="red"
            inactiveTintColor="black"
          />
        </View>
        <View
          style={[
            styles.itemContainerRenew,
            props.state.routeNames[props.state.index] === "" &&
              styles.activeItemContainer,
          ]}
        >
          <DrawerItem
            label="Logout"
            activeTintColor="red"
            labelStyle={styles.textLog}
            inactiveTintColor="red"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bottomItemContainer: {
    flex: 1,
    justifyContent: "flex-end",
    bottom:20
  },
  itemContainerRenew: {
    borderLeftWidth: 5,
    borderLeftColor: "transparent",
    paddingLeft: 10,

    marginTop: 0,
  },

  itemContainerNew: {
    borderLeftWidth: 5,
    borderLeftColor: "transparent",
    paddingLeft: 10,
  },
  itemContainer: {
    borderLeftWidth: 5,
    borderLeftColor: "transparent",
    paddingLeft: 10,

    marginTop: 10,
  },
  activeItemContainer: {
    borderLeftColor: "#0066FF",
  },
  container: {
    width: "100%",
    flex: 1,
  },
  logo: {
    width: 25,
    height: 25,
  },

  bottomLogo: {
    width: 15,
    height: 15,
    marginLeft: 10,
    zIndex: 3,
  },
  helpContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: scaleFont(0.8),
    fontWeight: "400",
    color: "#808080",
  },
  textLog: {
    fontSize: scaleFont(0.8),
    fontWeight: "400",
  },
  activeText: {
    fontSize: scaleFont(0.8),
    fontWeight: "400",
    color: "black",
  },
});
