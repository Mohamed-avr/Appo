import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Pressable,
  Modal,
  ActivityIndicator,
  Alert,
} from "react-native";
import Greeting from "./components/Greeting";

export default function App() {
  const [isActive, setIsActive] = useState(true);
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 60,
        flex: 1,
      }}
    >
      <View style={[styles.box, styles.androidStyle]}></View>
      <View style={[styles.box, styles.iOsStyle]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    width: "100%",
    height: 200,
    marginTop: 16,
    borderRadius: 16,
  },
  androidStyle: {
    elevation: 10,
    shadowColor: "#222",
  },
  iOsStyle: {
    shadowColor: "green",
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});