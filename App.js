import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DashboardScreen from "./screens/DashboardScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import creditLogo from "./assets/credit-logo.png";
import headerLogo from "./assets/header-logo.png";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import closeLogo from "./assets/close.png";
import CustomDrawerContent from "./component/CustomDrawerContent";
import AllScreens from "./screens/MainScreens";
import OrderScreen from "./screens/OrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import FaqScreen from "./screens/FaqScreen";
import Seetings from "./Seetings";
import { QueryClient, QueryClientProvider } from "react-query";
import OrderHisotryScreen from "./screens/OrderHistoryScreen";

const Drawer = createDrawerNavigator();
const queryClient = new QueryClient();
export default function App(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="allScreen"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
              headerTitle: () => (
                <Image
                  source={creditLogo}
                  style={{
                    width: 133,
                    height: 24,
                  }}
                />
              ),
              headerTitleAlign: "center",

              headerRight: () => {
                return (
                  <Image
                    source={headerLogo}
                    style={{
                      width: 32,
                      height: 32,
                      marginRight: 20,
                    }}
                  />
                );
              },
            }}
          >
            <Drawer.Screen name="allScreen" component={AllScreens} />
            <Drawer.Screen name="order" component={OrderHisotryScreen} />
            <Drawer.Screen name="payment" component={PaymentScreen} />
            <Drawer.Screen name="FAQ" component={FaqScreen} />
            <Drawer.Screen name="seetings" component={Seetings} />
          </Drawer.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headercont: {
    position: "absolute",
    width: "100%",
    height: 50,
    marginTop: 50,
    // backgroundColor: "black",
    // zIndex: 3,
  },
});
