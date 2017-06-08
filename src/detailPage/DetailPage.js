import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import page from "../CreatePages";

function Detail(props) {
  return (
    <View>
      <Text>Hello, Navigation!</Text>
      <Button onPress={() => props.navigation.goBack()} title="返回上一页" />
    </View>
  );
}

export default (DetailPage = page({
  navigationOptions: {
    title: "DetailPage"
  },
  statusBar: {
    barStyle: "dark-content",
    backgroundColor: "#f4f4f4"
  }
})(Detail));
