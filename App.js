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
  TextBase,
} from "react-native";
import Greeting from "./components/Greeting";
import Box from "./components/Box";

export default function App() {
  const [isActive, setIsActive] = useState(true);
  return (
    <View
      style={{
        padding: 16,
        backgroundColor: "#111",
        flex: 1,
        borderWidth: 2,
        marginTop: 40,
        borderColor: "red",
      }}
    >
      <Box
        style={{
          backgroundColor: "red",
          postion: "absolute",
          top: 150,
          left: 150,
        }}
      >
        BOX 1
      </Box>
      <Box style={{ backgroundColor: "#FCC", postion: "absolute", top: -150 }}>
        BOX 2
      </Box>
      <Box style={{ backgroundColor: "#ff0" }}>BOX 1</Box>
      <Box style={{ backgroundColor: "#F8C" }}>BOX 2</Box>
      <Box style={{ backgroundColor: "#ee9" }}>BOX 1</Box>
    </View>
  );
}

