import React, { Component } from "react";
import { View, Text, Button, StatusBar } from "react-native";

export default function HomePage(props) {
  const { navigate } = props.navigation;
  return (
    <View>
      <StatusBar backgroundColor="#387ef5" barStyle="light-content" />
      <Text>Hello, Navigation!</Text>
      <Button
        onPress={() => navigate("Chat", { user: "John" })}
        title="Chat with people"
      />
    </View>
  );
}

HomePage.navigationOptions = {
  title: "HomePage"
};
