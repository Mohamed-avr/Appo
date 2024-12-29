import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";

// navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screen
import About from "./About";
import Home from "./Home";
import Account from "./Account";
import Setting from "./Setting";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 75,
          paddingBottom: 9,
          paddingTop: 10,
          paddingHorizontal: 12,
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}
