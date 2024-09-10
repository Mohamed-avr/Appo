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
import Box from "./components/Box";

export default function App() {
  const [isActive, setIsActive] = useState(true);
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 60,
        flex: 1,
        backgroundColor: "#111",
      }}
    >
      <Box style={{ backgroundColor: "red" }}>BOX 1</Box>
      <Box style={{ backgroundColor: "#FCC" }}>BOX 2</Box>
      <Box style={{ backgroundColor: "green" }}>BOX 3</Box>
      <Box style={{ backgroundColor: "#FB1" }}>BOX 4</Box>
      <Box style={{ backgroundColor: "blue" }}>BOX 5</Box>
      <Box style={{ backgroundColor: "orange" }}>BOX 6</Box>
    </View>
  );
}

