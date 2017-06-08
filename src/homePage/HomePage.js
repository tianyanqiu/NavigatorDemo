import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import page from "../CreatePages";

function Home(props) {
  const { navigate } = props.navigation;
  return (
    <View>
      <Text>Hello, Navigation!</Text>
      <Button
        onPress={() => navigate("Chat", { user: "John" })}
        title="Chat with people"
      />
    </View>
  );
}

const HomePage = page({
  navigationOptions: {
    title: "HomePage"
  },
  color: "dark",
})(Home);

export default HomePage;
