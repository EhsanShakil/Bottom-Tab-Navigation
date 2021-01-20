import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Setting = () => {
  return (
    <View style={style.about}>
      <Text style={style.text}>This is a Setting Component</Text>
    </View>
  );
};

export default Setting;

const style = StyleSheet.create({
  about: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
  },
  text: {
    fontSize: 24,
  },
});
