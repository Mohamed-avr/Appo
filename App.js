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
      <Greeting name="Alfrido" clubName="Prawxx" />
    </View>
  );
}