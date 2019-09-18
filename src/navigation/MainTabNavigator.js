import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import DiscoverScreen from "../screens/DiscoverScreen/Discover.screen";
import FavoriteScreen from "../screens/FavoriteScreen/Favorite.screen";

const DiscoverStack = createStackNavigator({
  Discover: DiscoverScreen
});

DiscoverStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-albums" : "md-albums"}
    />
  )
};

DiscoverStack.path = "";

const FavoriteStack = createStackNavigator({
  Favorite: FavoriteScreen
});

FavoriteStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
    />
  )
};

FavoriteStack.path = "";

// const SettingsStack = createStackNavigator(
//   {
//     Settings: SettingsScreen
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: "Settings",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-options" : "md-options"}
//     />
//   )
// };

// SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    DiscoverStack,
    FavoriteStack
  },
  {
    tabBarOptions: { showLabel: false }
  }
);

tabNavigator.path = "";

export default tabNavigator;
