import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import OrderComponent from "../myComponents/OrderComponent";
import ActiveOrders from "../myComponents/ActiveOrders";
import React, { useEffect, useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

export default function ActiveOrdersScreen() {
  const [info, setInfo] = useState([]);
  const getInfo =
    "https://us-central1-js04-b4877.cloudfunctions.net/api/stock/companies";

  const { isLoading, error, data } = useQuery("info", async () =>
    fetch(getInfo)
      .then((res) => res.json())
      .then((newRes) => setInfo(newRes))
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error has occured</Text>;
  }



  return (
    <View style={styles.Container}>
      <ActiveOrders />
      {info.slice(0,3).map((dat) => (
        <OrderComponent
       
          name={dat.name}
          price={dat.price}
          myImage={dat.logo}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: "90%",
    justifyContent: "space-between",
    flexDirection: "column",
    marginTop: 20,
    paddingBottom:30
  },

});
