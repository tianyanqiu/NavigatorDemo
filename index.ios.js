/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';
import App from './src/App';

function NavigatorDemo(){
    return (
        <App><StatusBar backgroundColor="red"></StatusBar></App>
    
    )
}


AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);
