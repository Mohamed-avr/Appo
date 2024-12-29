import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import MainTabNavigator from "./screens/MainTabNavigator/MainTabNavigator";
import Alert from "./screens/Alert";
import Notifcations from "./screens/Notifcations";
import { createDrawerNavigator } from "@react-navigation/drawer";

//
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainTabNavigator} />
        <Drawer.Screen name="alert" component={Alert} />
        <Drawer.Screen name="Notifcations" component={Notifcations} />
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
