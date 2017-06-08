import React, { Component } from "react";
import { Platform, ScrollView, StatusBar } from "react-native";

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

const transitionEndEventHandlers = [];
export function onTransitionEnd() {
  transitionEndEventHandlers.forEach(fn => fn());
}

function removeEventHandler(fn) {
  for (let i = 0; i < transitionEndEventHandlers.length; i++) {
    if (transitionEndEventHandlers[i] === fn) {
      delete transitionEndEventHandlers[i];
    }
  }
}

export default function page({ navigationOptions, color, statusBar, loading }) {
  return Comp => {
    return class NavigatorPage extends Component {
      constructor(props) {
        super();
        this.state = {
          transitionEnd: loading ? false : true
        };

        this.fn = () => {
          this.setState({
            transitionEnd: true
          });
          removeEventHandler(this.fn);
        };

        transitionEndEventHandlers.push(this.fn);
      }
      static navigationOptions = typeof navigationOptions === "object"
        ? {
            headerStyle: {
              backgroundColor: getColor(color) || "#387ef5"
            },
            ...navigationOptions
          }
        : navigationOptions;

      componentWillUnmount() {
        removeEventHandler(this.fn);
      }

      render() {
        return (
          <ScrollView>
            {statusBar && <StatusBar {...statusBar} />}
            {!this.state.transitionEnd && loading}
            {this.state.transitionEnd && <Comp {...this.props} />}
          </ScrollView>
        );
      }
    };
  };
}
