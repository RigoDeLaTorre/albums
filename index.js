// /**
//  * @format
//  * @lint-ignore-every XPLATJSCOPYRIGHT1
//  */
//
// import { AppRegistry } from "react-native";
// import App from "./App";
// import { name as appName } from "./app.json";
//
// AppRegistry.registerComponent(appName, () => App);

import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

const App = () => (
  <View>
    <Header headerText="Albumsss" />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent("albums", () => App);
