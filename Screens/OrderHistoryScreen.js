import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import OrderComponent from "../myComponents/OrderComponent";

import React, { useEffect, useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ScrollView } from "react-native-gesture-handler";

export default function OrderHisotryScreen() {
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
      <Text style={styles.headText}>Order History</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
          <Text style={styles.componentTextActive}>Active Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.componentText}>Payment schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.componentText}>Close</Text>
        </TouchableOpacity>
      </ScrollView>
      {info.map((dat) => (
        <OrderComponent name={dat.name} price={dat.price} myImage={dat.logo} />
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
    paddingBottom: 30,
    alignSelf: "center",
  },
  headText: {
    fontSize: 30,
    color: "#070D59",
    fontWeight: "400",
    padding: 7,
  },
  componentText: {
    marginTop: 5,
    fontSize: 20,
    marginLeft: 5,
    paddingLeft: 10,
  },
  componentTextActive: {
    marginTop: 5,
    fontSize: 20,
    marginLeft: 15,
    color: "#0066FF",
    height: 45,
    borderBottomColor: "#0066FF",
    borderBottomWidth: 3,
    fontWeight: "400",
  },
});
