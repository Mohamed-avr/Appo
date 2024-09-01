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
      <View style={[styles.box, styles.box1Bg]}>
        <Text style={styles.text}>Multiple styles Box 1</Text>
      </View>

      <View style={[styles.box, styles.box2Bg]}>
        <Text style={styles.text}>Multiple styles Box 2 </Text>
      </View>
      {/* conditional styling */}
      <View style={[styles.box, isActive && styles.box3Bg]}>
        <Text style={styles.text}>Multiple styles Box 3 </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    width: "100%",
    padding: 20,
    marginTop: 16,
    borderRadius: 16,
  },
  box1Bg: {
    backgroundColor: "blue",
  },
  box2Bg: {
    backgroundColor: "green",
  },
  box3Bg: {
    backgroundColor: "brown",
  },
  text: {
    color: "#fff",
    fontSize: 28,
    textAlign: "left",
    fontWeight: "medium",
    color: "black",
  },
});