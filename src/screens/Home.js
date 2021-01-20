import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={style.home}>
      <Text style={style.text}>This is a Home Component</Text>
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  home: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  text: {
    fontSize: 24,
  },
});
