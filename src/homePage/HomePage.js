import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default function HomePage(props) {
    const {navigate} = props.navigation;
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

HomePage.navigationOptions = {
    title: 'HomePage',
    headerBackTitle: '返回'
}