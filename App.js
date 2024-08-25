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
} from "react-native";

const dataPr = [
  {
    Id: 1,
    heroName: "gabrial",
    score: 1923,
    country: "amazonlIli",
  },
  {
    Id: 2,
    heroName: "gabrial",
    score: 233,
    country: "amazonlIli",
  },
  {
    Id: 3,
    heroName: "gabrial",
    score: 233,
    country: "amazonlIli",
  },
  {
    Id: 4,
    heroName: "gabrial",
    score: 233,
    country: "amazonlIli",
  },

  {
    Id: 5,
    heroName: "gabrial",
    score: 233,
    country: "amazonlIli",
  },
  {
    Id: 6,
    heroName: "gabrial",
    score: 233,
    country: "amazonlIli",
  },
];

export default function App() {
  const [stop, setStop] = useState(true);
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 60,
        flex: 1,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 500 }}>
        ActivityIndicator, is loading ...
      </Text>
      <ActivityIndicator
        size="small"
        color="#0000ff"
        animating={stop}
        style={{
          marginTop: 100,
        }}
      />
      <ActivityIndicator
        size="large"
        color="#0000ff"
        animating={stop}
        style={{
          marginTop: 20,
        }}
      />

      <Button
        color={"#111"}
        title={stop ? "Stop loading " : "Start loading"}
        onPress={() => {
          setStop(stop ? false : true);
        }}
      />
    </View>
  );
}