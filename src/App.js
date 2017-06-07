import React from 'react';
import {Platform} from 'react-native';
import { StackNavigator } from "react-navigation";
import HomePage from "./homePage/HomePage";
import ChatPage from "./chatPage/ChatPage";
import DetailPage from "./detailPage/DetailPage";

const MainApp = StackNavigator({
  Home: { screen: HomePage },
  Chat: { screen: ChatPage, path: "chat/:user" }, //path告诉router需要匹配的path和需要提取的参数
  Detail: { screen: DetailPage }
});
//安卓的URL前缀应包括host
const prefix = Platform.OS == 'android' ? 'mychat://mychat/' : 'mychat://';

export default App = () => <MainApp uriPrefix={prefix}></MainApp>