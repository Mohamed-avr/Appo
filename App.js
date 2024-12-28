import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// screen
import About from "./screens/About";
import Dashboard from "./screens/Dashboard";

const Drawer = createDrawerNavigator();

export default function App() {
  const options = {
    drawerIcon: () => <Text> icon </Text>,
    drawerActiveTintColor: "#33",
    drawerActiveBackgroundColor: "#ddd",
    drawerType: "front",
    drawerStyle: {
      backgroundColor: "#ddd",
      width: 250,
    },
    drawerPosition: "left",
    drawerLabelStyle: {
      fontSize: 20,
    },
    drawerItemStyle: {
      marginVertical: 10,
    },

    drawerContentStyle: {
      backgroundColor: "#eee",
    },
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen options={options} name="About" component={About} />
        <Drawer.Screen
          options={options}
          name="My Dashboard"
          component={Dashboard}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
