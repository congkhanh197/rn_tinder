import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Colors from "../constants/Colors";

import TabBarIcon from "../components/TabBarIcon";
import DiscoverScreen from "../screens/DiscoverScreen/Discover.screen";
import FavoriteScreen from "../screens/FavoriteScreen/Favorite.screen";
import FavoriteIconWithBadge from "../screens/FavoriteScreen/components/FavoriteIconWithBadge";

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
    <FavoriteIconWithBadge
      name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  )
};

FavoriteStack.path = "";

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
