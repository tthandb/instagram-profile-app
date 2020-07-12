import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";

const data = [
  {
    id: 1,
    uri: require("./assets/album/1.jpg"),
  },
  {
    id: 2,
    uri: require("./assets/album/2.jpg"),
  },
  {
    id: 3,
    uri: require("./assets/album/3.jpg"),
  },
  {
    id: 4,
    uri: require("./assets/album/4.jpg"),
  },
  {
    id: 5,
    uri: require("./assets/album/5.jpg"),
  },
  {
    id: 6,
    uri: require("./assets/album/6.jpg"),
  },
  {
    id: 7,
    uri: require("./assets/album/7.jpg"),
  },
  {
    id: 8,
    uri: require("./assets/album/8.jpg"),
  },
];
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          <Image source={item.uri} />;
        }}
      />
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
});
