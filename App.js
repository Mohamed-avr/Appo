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
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 60,
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>This is stylesheet API</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    width: "80%",
    height: "60%",
    margin: "auto",
    padding: 20,
    borderRadius: 16,
  },
  text: {
    color: "#fff",
    fontSize: 34,
    textAlign: "left",
    fontWeight: "medium",
    color: "black",
  },
});