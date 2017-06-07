import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default function DetailPage(props) {
        return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => props.navigation.goBack()}
          title="返回上一页"
        />
      </View>
    );
}

DetailPage.navigationOptions = {
    title: 'DetailPage'
}