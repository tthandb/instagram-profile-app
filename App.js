import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import Styles from "./Styles";
import { Feather, Entypo } from "@expo/vector-icons";
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
  const [halfOfImagesAmount, setHalfOfImagesAmount] = useState(0);

  useEffect(() => {
    setHalfOfImagesAmount(Math.floor(data.length / 2));
    console.log(data.slice(0, halfOfImagesAmount));
  }, [data.length]);

  const singlePost = ({ item }) => {
    return (
      <View style={Styles.imageWrapper}>
        <Image source={item.uri} style={Styles.image} resizeMode="contain" />
      </View>
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.headerContainer}>
        <Feather name="arrow-left" size={24} color="black" />
        <Feather
          name="more-horizontal"
          size={24}
          color="black"
          onPress={() => {
            alert("binh");
          }}
        />
      </View>
      <ScrollView style={Styles.contentContainer}>
        <View style={Styles.avatarContainer}>
          <Image
            style={Styles.avatar}
            source={require("./assets/avatar.jpg")}
          />
          <View style={Styles.infoContainer}>
            <Text style={Styles.name}>Binh Nguyen Duc</Text>
            <Text style={Styles.job}>Student</Text>
            <View style={Styles.reactContainer}>
              <TouchableOpacity
                style={Styles.followButton}
                onPress={() => {
                  alert("followed");
                }}
              >
                <Text style={{ color: "white" }}>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.directMessageButton}
                onPress={() => {
                  alert("message sended");
                }}
              >
                <Feather name="send" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Styles.countsContainer}>
          <View style={Styles.countContainer}>
            <Text style={Styles.name}>210</Text>
            <Text style={Styles.job}>Photos</Text>
          </View>
          <View style={Styles.countContainer}>
            <Text style={Styles.name}>15k</Text>
            <Text style={Styles.job}>Followers</Text>
          </View>
          <View style={Styles.countContainer}>
            <Text style={Styles.name}>605</Text>
            <Text style={Styles.job}>Following</Text>
          </View>
        </View>
        <View style={Styles.flatListContainer}>
          <FlatList
            contentContainerStyle={Styles.flatList}
            data={data.slice(0, halfOfImagesAmount)}
            renderItem={singlePost}
          />
          <FlatList
            contentContainerStyle={Styles.flatList}
            data={data.slice(halfOfImagesAmount)}
            renderItem={singlePost}
          />
        </View>
      </ScrollView>
      <View style={Styles.footerContainer}>
        <Entypo name="popup" size={24} color="black" />
        <Feather name="plus-circle" size={24} color="black" />
        <Feather name="user" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
}
