import React, { Component } from "react";
import { Platform, ScrollView } from "react-native";

const color = Platform.OS === "android"
  ? {
      primary: "#387ef5",
      success: "#32db64",
      info: "#5bc0de",
      warning: "#ffc125",
      danger: "#f53d3d",
      dark: "#222",
      light: "#f4f4f4"
    }
  : {
      light: "#f4f4f4",
      primary: "#428bca",
      success: "#5cb85c",
      info: "#5bc0de",
      warning: "#f0ad4e",
      danger: "#f53d3d",
      dark: "#222"
    };

function getColor(name) {
  return color[name];
}

export default function page({ navigationOptions, color, z }) {
  return Comp => {
    const { headerStyle, ...pageOptions } = navigationOptions;
    return class NavigatorPage extends Component {
      static navigationOptions = {
        headerStyle: {
          backgroundColor:
            (headerStyle && headerStyle.backgroundColor) ||
              getColor(color) ||
              "#387ef5"
        },
        ...pageOptions
      };
      render() {
        return <ScrollView><Comp {...this.props} /></ScrollView>;
      }
    };
  };
}
