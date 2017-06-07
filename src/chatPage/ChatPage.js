import React, { Component } from "react";
import { View, Text, Button, StatusBar } from "react-native";

export default function ChatPage(props) {
  const { params } = props.navigation.state;
  return (
    <View>
      <StatusBar backgroundColor="blue" barStyle="dark-content" />
      <Text>Chat with {params.user}</Text>
      <Button onPress={() => props.navigation.navigate('Detail')} title="进入详情页"></Button>
    </View>
  );
}
ChatPage.navigationOptions = ({ navigation }) => {
  const { state, setParams } = navigation;
  const isInfo = state.params.mode === "info";
  const { user } = state.params;
  return {
    title: isInfo ? `${user}'s Contact Info` : `Chat with ${user}`,
    headerRight: (
      <Button
        title={isInfo ? "Done" : `${user}'s Info`}
        onPress={() => setParams({ mode: isInfo ? "none" : "info" })}
      />
    ),
  };
};
