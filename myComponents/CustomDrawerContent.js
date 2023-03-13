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
export default function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
        <Image
          source={closeLogo}
          style={{ width: 35, height: 35, margin: 10 }}
        />
      </TouchableOpacity>
      <DrawerContentScrollView {...props}>
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

        <View
          style={[
            styles.itemContainerNew,
            props.state.routeNames[props.state.index] === "" &&
              styles.activeItemContainer,
          ]}
        >
          <DrawerItem
            label="Become a merchant"
            // onPress={() => props.navigation.navigate("")}
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
            // onPress={() => props.navigation.navigate("")}
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
            
            // icon={({ color, size }) => (

            // )}

            // onPress={() => props.navigation.navigate("")}
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
            // onPress={() => props.navigation.navigate("")}
            activeTintColor="red"
            labelStyle={styles.textLog}
            inactiveTintColor="red"
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
const styles = StyleSheet.create({

  // itemContainerHelp: {
  //   // width:700,
  //   borderLeftWidth: 5,
  //   borderLeftColor: "transparent",
  //   paddingLeft: 10,
  //   height:60,
  //   // marginTop:10,
  //   flexDirection:"row-reverse",
  //   alignItems:"center",
  //   justifyContent:"center",
  //   // marginRight:-565,
  //   flex:3

  // },
  itemContainerRenew: {
    borderLeftWidth: 5,
    borderLeftColor: "transparent",
    paddingLeft: 10,
    height: 60,
    marginTop: 0,
  },
  label: {},
  itemContainerNew: {
    borderLeftWidth: 5,
    borderLeftColor: "transparent",
    paddingLeft: 10,
    marginTop: 150,
    height: 65,
  },
  itemContainer: {
    borderLeftWidth: 5,
    borderLeftColor: "transparent",
    paddingLeft: 10,
    height: 60,
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
    // marginLeft: 40,
  },

  bottomLogo: {
    width: 15,
    height: 15,
    marginLeft: 10,
    zIndex: 3,
  },
  helpContainer:{
    flexDirection:"row",
    alignItems:"center"
  },
  text:{
    fontSize:18,
    fontWeight:"400",
    color:"#808080"
  },
  textLog:{
    fontSize:18,
    fontWeight:"400",
    
  },
  activeText:{
    fontSize:18,
    fontWeight:"400",
    color:"black"
  }
});

{
  /* <View style={styles.container}>
<TouchableOpacity
  onPress={() => props.navigation.closeDrawer()}
  style={{
    borderLeftColor: "#0066FF",
    borderLeftWidth: 5,
  }}
>
  <View style={styles.itemCont}>
    <Image source={dashboardLogo} style={styles.logo} />
    <Text style={styles.chosenText}>Dashboard</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity
  style={styles.contOpacity}
  onPress={() => props.navigation.closeDrawer()}
>
  <View style={styles.itemCont}>
    <Image source={cartLogo} style={styles.logo} />
    <Text style={styles.itemText}>Orders</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity
  style={styles.contOpacity}
  onPress={() => props.navigation.closeDrawer()}
>
  <View style={styles.itemCont}>
    <Image source={paymentLogo} style={styles.logo} />
    <Text style={styles.itemText}>Payments</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity
  style={styles.contOpacity}
  onPress={() => props.navigation.closeDrawer()}
>
  <View style={styles.itemCont}>
    <Image source={questionLogo} style={styles.logo} />
    <Text style={styles.itemText}>FAQ</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity
  style={styles.contOpacity}
  onPress={() => props.navigation.closeDrawer()}
>
  <View style={styles.itemCont}>
    <Image source={seetingsLogo} style={styles.logo} />
    <Text style={styles.itemText}>Account Seetings</Text>
  </View>
</TouchableOpacity>
</View>
<View style={styles.bottomCont}>
<TouchableOpacity
  style={styles.contOpacity}
  onPress={() => props.navigation.closeDrawer()}
>
  <View style={styles.bottomItemCont}>
    <Text style={styles.bottomItemText}>Become a Merchant</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity
  style={styles.contOpacity}
  onPress={() => props.navigation.closeDrawer()}
>
  <View style={styles.bottomItemCont}>
    <Text style={styles.bottomItemText}>Rewards</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity
  style={styles.contOpacity}
  onPress={() => props.navigation.closeDrawer()}
>
  <View style={styles.bottomItemCont}>
    <Text style={styles.bottomItemText}>Help Center</Text>
    <Image source={helpLogo} style={styles.bottomLogo} />
  </View>
</TouchableOpacity>
<TouchableOpacity
  style={styles.contOpacity}
  onPress={() => props.navigation.closeDrawer()}
>
  <View style={styles.bottomItemCont}>
    <Text style={styles.bottomItemTextLog}>Logout</Text>
  </View>
</TouchableOpacity>
</View> */
}
